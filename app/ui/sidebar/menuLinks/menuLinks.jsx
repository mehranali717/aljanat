"use client";
import Link from "next/link";
import styles from "./menuLinks.module.css";
import { usePathname } from "next/navigation";
const MenuLinks = ({ item }) => {
  const pathName = usePathname().split("/");
  const title = pathName[pathName.length - 1];
  return (
    <>
      <Link
        href={item.path}
        key={item.title}
        className={`${styles.container} ${
          title === item.path && styles.active
        }`}
      >
        {item.icon}
        {item.title}
      </Link>
      {item.list &&
        item.list.map((submenu) => (
          <Link
            href={submenu.path}
            key={submenu.title}
            className={`${styles.container} ${styles.submenu} ${
              title === item.path && styles.active
            }`}
          >
            {submenu.title}
          </Link>
        ))}
    </>
  );
};
export default MenuLinks;
