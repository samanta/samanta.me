import classnames from "classnames";

import { Grid, Column } from "components/layout/Grid";
import Button from "components/buttons/Button";
import gridStyles from "components/layout/Grid.module.css";
import Link from "components/buttons/Link";
import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import SkipToMainButton from "components/buttons/SkipToMainButton";
import styles from "./Work.module.css";

export default function Work() {
  return (
    <>
      <Header />

      <main id="main" className={gridStyles.main}>
        <section className={classnames(gridStyles.section, styles.work)}>
          <Grid className={gridStyles.container}>
            <Column row={1} start={1} end={6} lgEnd={12}>
              <h1>Work</h1>
              <p>
                I'm a generalist digital product designer with over 10 years of experience. Skills
                include: design facilitation, user research, UI design, accessibility and coding.
              </p>
              <div>
                <Button href="https://www.linkedin.com/in/samantaaquino/" target="_blank">
                  See work experience on LinkedIn
                </Button>
              </div>
            </Column>
          </Grid>
        </section>
        <section className={classnames(gridStyles.section, styles.portfolio)}>
          <Grid className={gridStyles.container}>
            <Column start={1} end={12} className={styles.caseStudies}>
              {portfolio.map((work, i) => (
                <section className={styles.caseStudy} key={i}>
                  <Link className={styles.caseLink} unstyled={true} href={`/work/${i}`}>
                    <Grid>
                      <Column start={1} end={5} lgEnd={12} className={styles.caseTitle}>
                        <time>{work.date}</time>
                        <h2 className={styles.title}>{work.title}</h2>
                      </Column>
                      <Column start={6} lgStart={1} className={styles.caseImage}>
                        <img src={work.image} alt={work.title} />
                      </Column>
                    </Grid>
                  </Link>
                </section>
              ))}
            </Column>
          </Grid>
        </section>
      </main>

      <Footer />
    </>
  );
}

const portfolio = [
  {
    date: 2021,
    title: "Auditing accessibility of an existing product",
    image:
      "https://www.uxportfolioformula.com/wp-content/uploads/2019/07/Screenshot-2019-07-30-23.51.51.png",
  },
  {
    date: 2021,
    title: "Mentoring designers has increased my productivity",
    image: "https://miro.medium.com/max/2000/1*ZprbS7q0tV8RX-fnKgmvoA.jpeg",
  },
];
