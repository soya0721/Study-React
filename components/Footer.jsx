import Image from "next/image";
import localFont from "next/font/local";
import classes from "./Footer.module.css";

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

const ITEMS = [
  { href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: '勉強',
    image: 'File icon',
    botton: 'Learn'
  },
  { href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: '例',
    image: 'Window icon',
    botton: 'Examples'
  },
  { href: "https://nextjs.org?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: '進',
    image: 'Globe icon',
    botton: 'Go to nextjs.org →'
  },
]

export function Footer() {
  return (
        <footer className={classes.footer}>
          {ITEMS.map(item => {
            return(
              <div key={item.href}>
          <h3>{item.title}</h3>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt={item.image}
              width={16}
              height={16}
            />
            {item.botton}
          </a>
          </div>
            )
          })}
          
        </footer>
  );
}
