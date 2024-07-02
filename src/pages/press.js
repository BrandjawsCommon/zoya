import React from "react";
import { getHeader } from "../lib/contentful/api";
import Head from "next/head";
import Link from "next/link";

const press = ({ HeaderData }) => {
  console.log(HeaderData, "HeaderData");

  return (
    <>
      <Head>
        <title>Home - Zoya</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="w-full flex-col flex border-b-[1px] border-black banner xl:flex-row h-auto lg:h-screen">
        <p className="bold mb-[20px]">{HeaderData[0]?.title}</p>
        <p className="bold mb-[20px]">{HeaderData[0]?.description}</p>
        {HeaderData[0]?.allnewsCollection?.items?.map((item, i) => {
          return (
            <Link href={`/press/${item.postslug}`} key={i}>
              <div>
                <p className="paragraph">{item.posttitle}</p>
                <p>{item.postslug}</p>
                {item.postimg && <img src={item.postimg.url} alt="img" />}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const HeaderData = await getHeader(false);
  return {
    props: {
      HeaderData: HeaderData || [],
    },
    revalidate: 60,
  };
}

export default press;
