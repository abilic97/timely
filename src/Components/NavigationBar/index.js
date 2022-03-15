import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { navs as navTabs } from '../../constants/const'
import styles from './style.module.css'

const NavigationBar = () => {
  const [clicked, setClicked] = useState(false);
  const menuList = navTabs.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <NavLink exact to={url}>
          {title}
        </NavLink>
      </li>
    );
  });

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <section className={styles.header}>
      <p className={styles.title}>Timely</p>
      <nav className={styles.navBar}>
        <div className={styles.menuItemContainer} onClick={handleClick}>
        </div>
        <ul>{menuList}</ul>
      </nav>
    </section>
  );
};

export default NavigationBar;