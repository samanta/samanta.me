import classnames from "classnames";

import { Grid, Column } from "components/layout/Grid";
import { Helmet } from "react-helmet";
import { InstagramIcon, TwitterIcon, HomeIcon, SuperPeerIcon } from "components/icons/Icons";
import Footer from "components/layout/Footer";
import gridStyles from "components/layout/Grid.module.css";
import Link from "components/buttons/Link";
import SkipToMainButton from "components/buttons/SkipToMainButton";
import styles from "./Links.module.css";

export default function Links() {
  return (
    <>
      <Helmet>
        <title>Links - Samanta.me</title>
      </Helmet>

      <SkipToMainButton />

      <main id="main" className={classnames(gridStyles.main, styles.main)}>
        <div className={gridStyles.section}>
          <Grid className={classnames(gridStyles.container, styles.container)}>
            <Column type="aside" start={2} end={2} mdStart={1} mdEnd={12} className={styles.aside}>
              <img
                className={styles.image}
                src="https://imgix.cosmicjs.com/2b48d5c0-42cb-11eb-b5f1-77009cd6d567-GR9EgqeT400x400.jpg"
                alt="Me"
                width="128"
                height="128"
              />
              <p>Hi, person from the internet 👋🏽. Here are other places you can find me online.</p>
            </Column>
            <Column
              type="section"
              start={5}
              end={7}
              mdStart={1}
              mdEnd={12}
              className={styles.content}
            >
              <ul className={styles.links}>
                {links.map((link) => (
                  <li key={link.url} className={styles.linkItem}>
                    <Link className={styles.link} href={link.url} onClick={link.onClick}>
                      <span>{link.text}</span>
                      <link.icon
                        height="24"
                        className={classnames(styles.icon, link.iconClassName)}
                      />
                    </Link>
                  </li>
                ))}
              </ul>

              <div className={styles.youtube}>
                <div>
                  <h2 className={styles.title}>YouTube</h2>
                </div>

                <iframe
                  className={styles.iframe}
                  title="YouTube"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/oFuf9YLV3W0"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen={true}
                ></iframe>
              </div>
            </Column>
          </Grid>
        </div>
      </main>

      <Footer contentClassName={styles.footerContent} />
    </>
  );
}

const links = [
  {
    url: "https://superpeer.com/samanta",
    text: "Book a 1:1 with me",
    icon: SuperPeerIcon,
    iconClassName: styles.superPeerIcon,
  },
  {
    url: "https://www.instagram.com/samanta.ux/",
    text: "Follow my Instagram about UX",
    icon: InstagramIcon,
  },
  {
    url:
      "https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fpublish.twitter.com%2F&ref_src=twsrc%5Etfw&region=follow_link&screen_name=samanta&tw_p=followbutton",
    text: "Twitter",
    icon: TwitterIcon,
  },
  {
    url: "/",
    text: "Website",
    icon: HomeIcon,
  },
];
