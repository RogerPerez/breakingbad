import Menu from "../menu/Menu";
import Footer from "../footer/Footer";
const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
