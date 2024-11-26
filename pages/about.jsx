import localFont from "next/font/local";
import classes from "@/styles/Home.module.css";
import { Links } from "../components/Links/Links";
import { Footer } from "../components/Footer";
import { Headline } from "../components/Headline";
import { Header } from "../components/Head/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <Headline title="About Page!!!" />
      <div
        className={`${classes.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <Header />
        <Links pages="about">
        <div>propsで持ってきた</div>
        </Links>
        <Footer />
      </div>
    </>
  );
}
