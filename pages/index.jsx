import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { Footer } from "../components/Footer";
import { Links } from "../components/Links/Links";
import { Headline } from "../components/Headline";
import { Header } from "../components/Head/Header";
import React,{ useCallback, useEffect} from "react";

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
  useEffect(() => {
    document.body.style.backgroundColor = 'lightblue';
    return ()=> {
      document.body.style.backgroundColor = "";
    }
  }, []);
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