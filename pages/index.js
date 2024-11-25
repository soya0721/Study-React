import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { Footer } from "@/components/Footer";
import { Links } from "@/components/Links";
import { Headline } from "@/components/Headline";
import { Header } from "@/components/Header";

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
      <Headline title="Index Page"/>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <Header />
        <Links pages="indexになってる？" >
        <div>indexのほうでもpropsでもってきた</div>
        </Links>
        <Footer />
      </div>
    </>
  );
}