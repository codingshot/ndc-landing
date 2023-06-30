import React from "react";
import Head from "next/head";

const Layout = ({
  pageTitle,
  description = "The NDC is a Grassroots Movement, led by the NEAR Community to create Decentralized Web 3.0 Governance on NEAR. ",
  img = "/public/NDCLogo.svg",
}) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} key="title" />
        <meta name="description" content={description} />
        <meta itemProp="image" content={img} />
        {/* <meta property="og:url" content="" /> */}
        <meta property="og:type" content="website" />
      </Head>
    </>
  );
};

export default Layout;
