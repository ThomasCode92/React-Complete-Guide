"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./NavLink.module.css";

export default function NavLink({ href, children }) {
  const path = usePathname();

  const isActive = path.startsWith(href);
  const className = isActive ? `${styles.link} ${styles.active}` : styles.link;

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
