import "../styles/global.scss";

import styles from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className="app">
      <main className="main">
        <div className={styles.wrapper}>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
