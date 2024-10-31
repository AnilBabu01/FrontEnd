import Navbar from "@/components/User/Navber/index";
import HomeBanner from "@/components/User/Home/HomeBanner/index";
import Games from "@/components/User/Home/Games/index";
import Footer from "@/components/User/Home/Footer/index";
import React, { useContext, useEffect } from "react";
import { UserContext } from "@/context/authContext";
import { ProtectedPage } from "@/utils/funtions";
export default function Home() {
  // ProtectedPage();
  const { getUser } = useContext(UserContext);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <main>
        <Navbar />
        <HomeBanner />
        <Games />
        <Footer />
      </main>
    </div>
  );
}
