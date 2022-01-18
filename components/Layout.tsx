import dynamic from "next/dynamic";
function Layout({ children }: any) {
  const Header = dynamic(() => import("../components/Header"), {
    ssr: false,
  });
  const Footer = dynamic(() => import("../components/footer"), {
    ssr: false,
  });
  return (
    <div className="app">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
export default Layout;
