import { Outlet } from "react-router";
import { Navbar } from "~/components/layout/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-8">
        <Outlet />
      </main>
    </>
  );
}
