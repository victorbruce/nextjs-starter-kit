import Head from "next/head";
import { motion } from "framer-motion";

// components
import ToggleThemeButton from "components/toggle-theme-button";

const HomePage = () => {
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
          Hello World!
        </motion.h1>
        <p className="text-fore-secondary">testing...</p>
        <ToggleThemeButton />
      </main>
    </div>
  );
};

export default HomePage;
