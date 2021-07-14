import classnames from "classnames";

import { Grid, Column } from "components/layout/Grid";
import gridStyles from "./Grid.module.css";
import Link from "components/buttons/Link";
import NewsletterForm from "components/inputs/NewsletterForm";
import styles from "./Footer.module.css";
import WaveTop from "components/layout/WaveTop";

export default function Footer({ title, description, contentClassName }) {
  return (
    <footer className={classnames(gridStyles.section, styles.footer, contentClassName)}>
      <WaveTop className={styles.topShape} />
      <div className={styles.body}>
        <Grid id="newsletter" className={gridStyles.container}>
          <Column type="h2" start={1} className={styles.heading}>
            {title ? title : "Newsletter"}
          </Column>
          <Column start={1} end={6} lgEnd={12} className={styles.text}>
            {description ? (
              description
            ) : (
              <p>
                Emails are rare but mighty. I send out tips and resources UX designers can use on
                the job.
              </p>
            )}
          </Column>
          <Column start={8} lgStart={1}>
            <NewsletterForm />
          </Column>
          <Column type="p" start={1} end={12} className={styles.authoring}>
            This site is commited to being{" "}
            <Link href="/accessibility" unstyled={true}>
              accessible
            </Link>{" "}
            to everyone. It’s built with ReactJS and deployed with Netlify. The{" "}
            <Link href="https://github.com/samanta/samanta.me" unstyled={true} target="_blank">
              source code
            </Link>{" "}
            is hosted on Github.
          </Column>
        </Grid>
      </div>
    </footer>
  );
}
