import { motion } from "framer-motion";
import { useTranslations } from "use-intl";

const HomePage = () => {
  const t = useTranslations("home");

  return (
    <div className="w-full">
      <main className="max-w-7xl mx-auto px-4 h-[90vh] flex flex-col justify-center items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: [0.5, 0, 1], y: 0 }}
          transition={{ duration: 1.2 }}
          className=""
        >
          {t("greeting")} 👋
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1.2 }}
          className="text-center"
        >
          {t("about")}
        </motion.p>
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
