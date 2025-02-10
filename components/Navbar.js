import Link from "next/link";
export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>Home Route</Link>
        </li>
        <li>
          <Link href='supabase-data'>Supabase Route</Link>
        </li>
      </ul>
    </nav>
  );
}
