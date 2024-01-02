import Link from "next/link";
import styles from "./links.module.css";

export const Links = () => {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];
  return (
    <div className={styles.links}>
      {links.map((link) => (
        <Link href={link.path}>{link.title}</Link>
      ))}
    </div>
  );
};
