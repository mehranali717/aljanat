"use client";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";
const Header = () => {
  const pathName = usePathname().split("/");
  const title = pathName[pathName.length-1]
  return (
    <div className={styles.container}>
      <span className={styles.headTitle}>{title}</span>
    </div>
  );
};
export default Header;
