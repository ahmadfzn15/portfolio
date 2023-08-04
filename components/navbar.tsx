import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="fixed w-screen flex justify-end gap-10 text-white font-medium px-10 py-5">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/projects">Projects</Link>
      </nav>
    </>
  );
}
