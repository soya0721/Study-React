import Image from "next/image";
import localFont from "next/font/local";
import classes from "@/components/Links.module.css";
const geistSans = localFont({
  src: "../pages/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../pages/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export function Links(props) {
  return (
        <main className={classes.main}>
          <Image
            className={classes.logo}
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <ol>
            <li>
              Get started by editing <code>/{props.pages}.js</code>.
            </li>
            <li>Save and see your changes instantly.</li>
            <li>enjoy.</li>
            <li>{props.children}</li>
          </ol>

          <div className={classes.ctas}>
            <a
              className={classes.primary}
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={classes.logo}
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.secondary}
            >
              Read our docs
            </a>
          </div>
        </main>
  );
}