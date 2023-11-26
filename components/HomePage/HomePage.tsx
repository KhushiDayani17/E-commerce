import React from "react";
import Header from "../Header/Header";

import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={styles.body}>
      <Header />
    </div>
  );
};

export default HomePage;
