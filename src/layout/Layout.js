import "../styles/global.scss";

const Layout = ({ children }) => {
  return (
    <div className="app">
      <main className="main">{children}</main>
    </div>
  );
};

export default Layout;
