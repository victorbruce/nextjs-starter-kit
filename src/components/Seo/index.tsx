import Head from "next/head";

interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const Seo = ({
  title = "Next Starter Kit",
  description = "Kick start your NextJs project with all the essentials already setup for you",
  url = "https://nextjs-starter-kit-coral.vercel.app/",
  image = "/vercel.svg",
}: SeoProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="NextJs, React, Template, Javascript, Typescript"
        />

        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content={image} />

        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:creator" content="@nextjs" />
        <link rel="icon" href={image} />
      </Head>
    </>
  );
};

export default Seo;
