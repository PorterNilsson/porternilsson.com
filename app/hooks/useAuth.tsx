import { createContext, use } from "react";

type User = {
  id: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = null;

  async function logout() {
  }

  return (
    <AuthContext value={{ user, logout }}>
      {children}
    </AuthContext>
  );
}

export function useAuth() {
  const context = use(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside an AuthProvider");
  }

  return context;
}
