import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <Link href="/" className="text-lg">
        Bernadette Quitoriano
      </Link>

      <div className="flex gap-6 text-sm">
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <a href="/cv-bernadette-quitoriano-sk-.pdf" download>Download CV</a>
      </div>
    </nav>
  );
}