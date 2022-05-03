import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <header>
      <div>AWESOME FOOD STORE</div>
      <nav>
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>ABOUT</a>
        </Link>
        <Link href="/store">
          <a className={router.pathname === "/about" ? "active" : ""}>STORE</a>
        </Link>
      </nav>
    </header>
  );
}
