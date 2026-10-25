
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-900 text-white shadow-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5"
      >
        <Link href="/" className="text-xl font-bold">
          My Portfolio
        </Link>

        <ul className="flex gap-6">
          <li>
            <Link href="/" className="hover:text-sky-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-sky-300">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
