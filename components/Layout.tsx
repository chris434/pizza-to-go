import dynamic from "next/dynamic";
function Layout({ children }: any) {
  const Header = dynamic(() => import("../components/Header"), {
    ssr: false,
  });
  const Footer = dynamic(() => import("../components/footer"), {
    ssr: false,
  });
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
export default Layout;
