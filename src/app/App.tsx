import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LandingPage } from "./components/LandingPage";
import { Section1 } from "./components/Section1";
import { Section2 } from "./components/Section2";
import { Section3 } from "./components/Section3";
import { Section4 } from "./components/Section4";

type Page = "home" | "section1" | "section2" | "section3" | "section4";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  const navigate = (target: Page) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setPage(target), 200);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case "home":
        return <LandingPage onNavigate={navigate} />;
      case "section1":
        return <Section1 onNavigate={navigate} />;
      case "section2":
        return <Section2 onNavigate={navigate} />;
      case "section3":
        return <Section3 onNavigate={navigate} />;
      case "section4":
        return <Section4 onNavigate={navigate} />;
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
