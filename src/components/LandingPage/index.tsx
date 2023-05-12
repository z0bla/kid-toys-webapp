import React from "react";

import styles from "./LandingPage.module.css";
import imageToy1 from "./imageToy1.png";

function LandingPage(): JSX.Element {
  return (
    <main className={styles.body}>
      <div className={styles.article}>
        <div className={styles.leftSide}>
          <img src={imageToy1} className={styles.imageOfToy} />
        </div>
        <div className={styles.rightSide}>
          <h1>Lorem ipsum dolor sit.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque illo
            laudantium asperiores labore molestiae dolor architecto at deleniti
            quibusdam fuga velit odio dolorem, vel fugiat incidunt magni
            voluptatibus tenetur alias, perferendis nihil. Facere tenetur ut ab
            dolore odio animi atque cumque minus! Nobis sed, nemo nam culpa
            neque assumenda tempora.
          </p>
        </div>
      </div>
    </main>
  );
}

export default LandingPage;
