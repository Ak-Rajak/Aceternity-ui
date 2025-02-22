import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <p className="p-8 text-center">
        Developed by&nbsp;
        <Link
          href="https://github.com/gopaladhikari"
          target="_blank"
          className="text-blue-700 underline"
        >
          gopaladhikari
        </Link>
      </p>
    </footer>
  );
}
