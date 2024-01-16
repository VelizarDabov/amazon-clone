import Banner from "@/components/Banner";
import Header from "@/components/Header";
import ProductFeed from "@/components/ProductFeed";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-gray-100 ">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header />
      <main className=" max-w-screen-2xl mx-auto">
        {/* banner */}
        <Banner />
        {/* product feed */}
        <ProductFeed />
      </main>
    </div>
  );
}
