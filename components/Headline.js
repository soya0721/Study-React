import Head from "next/head";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";



export function Headline(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}