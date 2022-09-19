import Head from "next/head";
import { motion } from "framer-motion";
import { useTranslations } from "use-intl";
import Link from "next/link";
import { useRouter } from "next/router";

// components
import ToggleThemeButton from "components/toggle-theme-button";

const HomePage = () => {
  const t = useTranslations("home");
  const { locale, locales, route } = useRouter();
  const otherLocale = locales?.find((cur) => cur !== locale);

  return (
    <div>
      <Head>
        <title>Next Starter</title>
        <meta name="description" content="My next starter template project" />
      </Head>
      <main className="h-screen w-screen flex flex-col items-center justify-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: [0.5, 0, 1], y: 0 }}
          transition={{ duration: 1.2 }}
          className=""
        >
          {t("hello")}
        </motion.h1>
        <ToggleThemeButton />
        <Link href={route} locale={otherLocale}>
          <a className="text-fore-secondary bg-gray-500 px-2 py-1 rounded-sm text-sm mt-4">
            Switch to {otherLocale}
          </a>
        </Link>
        <hr />
        <div>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <p>This is a paragraph.</p>
          <p className="text-fore-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias neque
            laboriosam quam dolorem quaerat! Exercitationem quis magni magnam
            eos corrupti ad modi, nam hic odio accusantium tenetur alias
            consequuntur unde?
          </p>
        </div>
      </main>
    </div>
  );
};

export function getStaticProps({ locale }: any) {
  return {
    props: {
      messages: require(`../lang/${locale}.json`),
    },
  };
}

export default HomePage;
