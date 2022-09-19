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
      <main className="h-screen w-screen flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: [0.5, 0, 1], y: 0 }}
          transition={{ duration: 1.2 }}
          className="font-bold text-3xl mb-4 bg-back-secondary"
        >
          {t("hello")}
        </motion.h1>
        <ToggleThemeButton />
        <Link href={route} locale={otherLocale}>
          <a className="text-fore-secondary bg-gray-500 px-2 py-1 rounded-sm text-sm mt-4">
            Switch to {otherLocale}
          </a>
        </Link>
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
