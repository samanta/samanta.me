import classnames from "classnames";

import { Grid, Column } from "components/layout/Grid";
import HeaderLogo from "./HeaderLogo";
import Link from "components/buttons/Link";
import NavLink from "components/buttons/NavLink";
import SkipToMainButton from "components/buttons/SkipToMainButton";
import styles from "./Header.module.css";

export default function Header({ className, active }) {
  return (
    <>
      <SkipToMainButton />
      <Grid type="header" className={classnames(styles.container, className)}>
        <Column className={styles.header}>
          <Link name="home-link" className={styles.headerLogo} href="/">
            <HeaderLogo />
          </Link>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {links.map((link) => (
                <li key={link.url} className={classnames(styles.link, link.className)}>
                  <NavLink
                    href={link.url}
                    target={link.url.startsWith("/") ? undefined : "_blank"}
                    active={link.id === active}
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </Column>
      </Grid>
    </>
  );
}

const links = [
  {
    id: "work",
    url: "https://www.linkedin.com/in/samantaaquino",
    title: "Work",
  },
  {
    id: "mentoring",
    url: "/mentoring/",
    title: "Mentoring",
    className: styles.linkMentoring,
  },
  {
    id: "links",
    url: "/links/",
    title: "Links",
    className: styles.linkLinks,
  },
  {
    id: "contact",
    url: "mailto:me@samanta.me",
    title: "Contact",
    className: styles.linkContact,
  },
];
