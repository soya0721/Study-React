import Link from "next/link";
import localFont from "next/font/local";
import classes from "./Header.module.css"
// import classes from "@/components/Footer.module.css";

const geistSans = localFont({
  src: "../../pages/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../pages/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export function Header() {
  return (
        <header className={classes.header}>
          <Link href="/" className={classes.anchor}>
          Index
          </Link>
          <Link  href="/about" className={classes.anchor}>
          About
          </Link>
        </header>
  );
}
