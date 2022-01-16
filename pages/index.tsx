import type { NextPage } from "next";
import dynamic from "next/dynamic";

const Home: NextPage = () => {
  const Header = dynamic(() => import("../components/Header"), {
    ssr: false,
  });
  return (
    <div>
      <Header />
    </div>
  );
};

export default Home;
