import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import NavLink from "../navigation/NavLink";
import MainHeaderBackground from "./MainHeaderBackground";

import logoImg from "@/assets/logo.png";
import styles from "./MainHeader.module.css";

export default function MainHeader() {
  return (
    <Fragment>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image src={logoImg} alt="a plate with food on it" priority />
          NextLevel Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
}
