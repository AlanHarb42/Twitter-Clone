import Head from "next/head";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="https://rb.gy/ogau5a" />
      </Head>

      <main className="bg-[#4e1888] min-h-screen flex max-w-[1500px] mx-auto">
        {/*Sidebar*/}
        <Sidebar />
        {/*Feed*/}
        <Feed />

        {/*Widgets*/}
      </main>
    </div>
  );
}

