import MobileLayout from "../components/home/MobileLayout";
import DesktopLayout from "../components/home/DesktopLayout";
import { useEffect, useState } from "react";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <MobileLayout /> : <DesktopLayout />;
};

export default Home;
