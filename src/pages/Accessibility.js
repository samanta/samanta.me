import classnames from "classnames";

import { Grid, Column } from "components/layout/Grid";
import { Helmet } from "react-helmet";
import Footer from "components/layout/Footer";
import gridStyles from "components/layout/Grid.module.css";
import Header from "components/layout/Header";
import Link from "components/buttons/Link";
import styles from "./Mentoring.module.css";

export default function Accessibility() {
  return (
    <>
      <Helmet>
        <title>Accessibility Statement - Samanta.me</title>
      </Helmet>

      <Header active="a11y" />

      <main id="main" className={classnames(gridStyles.main, styles.main)}>
        <section className={gridStyles.section}>
          {/* Hero */}
          <Grid className={classnames(gridStyles.container, styles.hero)}>
            <Column start={1} end={5} mdEnd={12} row={1}>
              <h1>Accessibility statement</h1>
            </Column>
            <Column start={1} end={6} mdEnd={12} row={2}>
              <p>
                I want to make it possible and easy for everyone to use my website. To achieve this,
                this website looks to be compliant with the Web Content Accessibility Guidelines
                V2.1 level A and AA.
              </p>

              <p>
                However, some parts of this website are not fully accessible yet. For example, I’ve
                found the following issues:
              </p>

              <p>
                I’m always looking to improve the experience for everyone, so if you find any
                problems not listed on this page, please send your notes to{" "}
                <Link unstyled={true} href="mailto:me@samanta.me">
                  me@samanta.me
                </Link>
                .
              </p>
            </Column>
          </Grid>
        </section>
      </main>

      <Footer
        contentClassName={styles.footerContent}
        title="Free mentoring"
        description={
          <span>
            I like to make time for free mentoring sessions. Check my{" "}
            <Link
              unstyled={true}
              href="https://www.adplist.org/mentors/samantaaquino"
              target="_blank"
              className={styles.footerLink}
            >
              ADPList
            </Link>{" "}
            profile or sign up to be notified when free mentoring sessions are available.
          </span>
        }
      />
    </>
  );
}
