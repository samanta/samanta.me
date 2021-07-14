import classnames from "classnames";

import { Grid, Column } from "components/layout/Grid";
import { Helmet } from "react-helmet";
import { InstagramIcon, TwitterIcon, LinkedInIcon } from "components/icons/Icons";
import Button, { ButtonVariant } from "components/buttons/Button";
import gridStyles from "components/layout/Grid.module.css";
import Link from "components/buttons/Link";
import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home - Samanta.me</title>
      </Helmet>

      <Header />

      <main id="main" className={classnames(gridStyles.main, styles.main)}>
        {/* Hero */}
        <section className={classnames(gridStyles.section, styles.section, styles.hero)}>
          <Grid className={gridStyles.container}>
            <Column type="picture" start={1} end={5} smEnd={12} className={styles.image}>
              <img
                src="https://imgix.cosmicjs.com/2b48d5c0-42cb-11eb-b5f1-77009cd6d567-GR9EgqeT400x400.jpg"
                alt="Me"
                width="464"
                height="464"
              />
            </Column>
            <Column start={7} smStart={1}>
              <h1>Hey, my name’s Samanta</h1>
              <p>
                I'm a senior product designer based in Stockholm. Passionate about web accessibility
                and helping other designers feel supported.
              </p>
            </Column>
          </Grid>
        </section>

        {/* Work */}
        <section className={classnames(gridStyles.section, styles.section, styles.work)}>
          <Grid className={gridStyles.container}>
            <Column start={1} end={9} smEnd={12} className={styles.workSection}>
              <h2>Work</h2>
              <p>
                Currently designing things at{" "}
                <Link unstyled={true} href="https://www.getdreams.com/" target="_blank">
                  Dreams
                </Link>
                . 📣 Recruiters! I'm not seeking new opportunities at this time, but you're welcome
                to take a look at my skills on LinkedIn.
              </p>
              <Button href="https://www.linkedin.com/in/samantaaquino/" target="_blank">
                LinkedIn profile
              </Button>
            </Column>
          </Grid>
        </section>

        {/* Mentoring */}
        <section className={classnames(gridStyles.section, styles.section, styles.mentoring)}>
          <Grid className={gridStyles.container}>
            <Column type="section" start={4} mdStart={2}>
              <h2>Mentoring</h2>
              <p>
                Are you stuck with a hard problem, at a career crossroad, or wishing you had ongoing
                feedback and support at work? You need a chat with an experienced designer.
              </p>
              <Button variant={ButtonVariant.quaternary} href="/mentoring">
                Get UX mentoring
              </Button>
            </Column>
          </Grid>
        </section>

        {/* UX Content */}
        <section className={classnames(gridStyles.section, styles.section, styles.ux)}>
          <Grid className={gridStyles.container}>
            <Column row={1} start={1} end={12} className={styles.titleColumn}>
              <h1 className={styles.title}>UX Content</h1>
            </Column>
            <Column
              row={1}
              mdRow={2}
              type="picture"
              start={1}
              end={5}
              mdEnd={6}
              className={styles.image}
            >
              <Link
                unstyled={true}
                href="https://www.instagram.com/samanta.ux/"
                target="_blank"
                aria-label="Instagram"
              >
                <img
                  src="/ux-content--ig.png"
                  alt="Screenshot of @Samanta.UX on Instagram"
                  width="367"
                  height="655"
                />
              </Link>
            </Column>
            <Column row={1} mdRow={2} start={7} className={styles.content}>
              <h1 className={styles.title}>UX Content</h1>
              <p>
                I share lessons I've learned about UX, web accessibility, and being a designer in
                tech on Instagram and other social media.
              </p>
              <UXLinks />
            </Column>
            <Column start={1} className={styles.linksColumn}>
              <UXLinks />
            </Column>
          </Grid>
        </section>

        {/* Writing */}
        {/* <section className={classnames(gridStyles.section, styles.section, styles.writing)}>
          <Grid className={gridStyles.container}>
            <Column>
              <h2>Writing</h2>
              <ul className={styles.posts}>
                <li>
                  <h3>
                    <Link href="/">3 keys to building successful relationships in any team</Link>
                  </h3>
                  <p>
                    Receive great product design career tips and how-to’s, plus subscribers get 10%
                    off ther first mentoring call and some more stuff.
                  </p>
                  <time dateTime="2021-07-30">Jun 30</time>
                </li>
              </ul>
              <Button>See all posts</Button>
            </Column>
          </Grid>
        </section> */}
      </main>

      <Footer contentClassName={styles.footerContent} />
    </>
  );
}

function UXLinks({ className }) {
  return (
    <ul className={classnames(styles.links, className)}>
      {uxLinks.map((link) => (
        <li key={link.url}>
          <Button className={styles.link} href={link.url} target="_blank" aria-label={link.text}>
            <link.icon width={32} className={link.className} alt="" />
          </Button>
        </li>
      ))}
    </ul>
  );
}

const uxLinks = [
  {
    url: "https://www.instagram.com/samanta.ux/",
    icon: InstagramIcon,
    className: styles.uxLinkIcon,
    text: "Instagram",
  },
  {
    url:
      "https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fpublish.twitter.com%2F&ref_src=twsrc%5Etfw&region=follow_link&screen_name=samanta&tw_p=followbutton",
    icon: TwitterIcon,
    className: styles.uxLinkIcon,
    text: "Twitter",
  },
  {
    url: "https://www.linkedin.com/in/samantaaquino/",
    icon: LinkedInIcon,
    className: styles.linkedInIcon,
    text: "LinkedIn",
  },
];
