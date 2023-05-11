import Head from "next/head";
import Welcome from "../components/Welcome";
import Video from "../components/Video";
import Depo_videos from "../components/Depo_videos";

export default function Home() {
  return (
    <>
      <Head>
        <title>Papo de Pijama</title>
        <meta name="description" content="Papo de Pijama - Lading Page" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
      </Head>

      <main className="min-h-xl m-auto flex-col justify-center items-start">
        <Welcome />
        <Video />
        <Depo_videos />
      </main>
    </>
  );
}
