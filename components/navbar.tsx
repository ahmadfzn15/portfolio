import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="w-screen min-h-[5rem] flex justify-between items-center text-slate-300 font-semibold px-10">
        <div className="">
          <h1 className="text-2xl">Ahmad's</h1>
        </div>
        <div className="flex justify-center gap-10 text-sm self-center">
          <Link href="#main" className="relative actives before:hover:w-full">
            Home
          </Link>
          <Link href="#about" className="relative actives before:hover:w-full">
            About
          </Link>
          <Link
            href="/contact"
            className="relative actives before:hover:w-full"
          >
            Contact
          </Link>
          <Link
            href="/projects"
            className="relative actives before:hover:w-full"
          >
            Projects
          </Link>
          <Link
            href="/portofolio"
            className="relative actives before:hover:w-full"
          >
            Portofolio
          </Link>
        </div>
      </nav>
    </>
  );
}
