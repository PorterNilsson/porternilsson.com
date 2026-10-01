import { Button } from "~/components/ui/button";

export function PasskeyLogin() {
  async function handlePasskeyLogin() {
    // 1. Ask your server for WebAuthn authentication options
    const response = await fetch("/api/auth/passkey/options", {
      method: "POST",
      credentials: "include",
    });

    const options = await response.json();

    // 2. Convert the server's base64url values to ArrayBuffers
    const publicKey: PublicKeyCredentialRequestOptions = {
      ...options,
      challenge: base64urlToBuffer(options.challenge),
      allowCredentials: options.allowCredentials?.map(
        (credential: any) => ({
          ...credential,
          id: base64urlToBuffer(credential.id),
        })
      ),
    };

    // 3. Browser/authenticator handles the passkey
    const credential = await navigator.credentials.get({
      publicKey,
    });

    if (!credential) {
      throw new Error("No credential returned");
    }

    // 4. Send the assertion back to your server
    await fetch("/api/auth/passkey/verify", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(serializeCredential(credential)),
    });
  }

  return (
    <Button
      type="button"
      className="w-full"
      onClick={handlePasskeyLogin}
    >
      Sign in with passkey
    </Button>
  );
}

function base64urlToBuffer(value: string): ArrayBuffer {
  const base64 = value
    .replace(/-/g, "+")
    .replace(/_/g, "/")
    .padEnd(Math.ceil(value.length / 4) * 4, "=");

  const bytes = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));

  return bytes.buffer;
}

function serializeCredential(credential: any) {
  return {
    id: credential.id,
    rawId: bufferToBase64url(credential.rawId),
    type: credential.type,
    response: {
      clientDataJSON: bufferToBase64url(
        credential.response.clientDataJSON
      ),
      authenticatorData: bufferToBase64url(
        credential.response.authenticatorData
      ),
      signature: bufferToBase64url(credential.response.signature),
      userHandle: credential.response.userHandle
        ? bufferToBase64url(credential.response.userHandle)
        : null,
    },
  };
}

function bufferToBase64url(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);

  return btoa(String.fromCharCode(...bytes))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}
