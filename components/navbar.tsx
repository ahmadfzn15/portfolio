import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="w-screen min-h-[5rem] flex justify-between items-center text-slate-300 font-semibold px-10 relative before:contents[''] before:absolute before:w-[200px] before:h-[75px] before:bg-blue before:right-10 before:top-20 before:z-[-2] before:skew-x-[50deg] before:blur-3xl">
        <div className="">
          <h1 className="text-2xl">Ahmad's</h1>
        </div>
        <div className="flex justify-center gap-10 text-sm self-center">
          <Link href="/" className="relative actives before:hover:w-full">
            Home
          </Link>
          <Link href="/about" className="relative actives before:hover:w-full">
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
