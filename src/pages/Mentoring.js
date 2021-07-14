import classnames from "classnames";

import { Grid, Column } from "components/layout/Grid";
import { Helmet } from "react-helmet";
import Button, { ButtonVariant } from "components/buttons/Button";
import Footer from "components/layout/Footer";
import gridStyles from "components/layout/Grid.module.css";
import Header from "components/layout/Header";
import Link from "components/buttons/Link";
import styles from "./Mentoring.module.css";

const preventDefault = (e) => e.preventDefault();

export default function Mentoring() {
  return (
    <>
      <Helmet>
        <title>Mentoring - Samanta.me</title>
      </Helmet>

      <Header active="mentoring" />

      <main id="main" className={classnames(gridStyles.main, styles.main)}>
        <section className={gridStyles.section}>
          {/* Hero */}
          <Grid className={classnames(gridStyles.container, styles.hero)}>
            <Column start={1} end={6} mdEnd={12} row={1}>
              <h1>Mentoring for UX and product designers</h1>
              <p>
                Do you feel stuck with a hard problem? Lack confidence in your design process? Wish
                you had ongoing feedback at work?
              </p>
              <p>You need help from an experienced designer.</p>
              <Button
                variant={ButtonVariant.tertiary}
                href="https://superpeer.com/samanta"
                target="_blank"
              >
                Book a call via SuperPeer
              </Button>
            </Column>
            <Column
              className={styles.imageContainer}
              row={1}
              start={7}
              end={4}
              mdRow={2}
              mdStart={3}
              mdEnd={4}
              smStart={1}
            >
              <img
                src="/mentoring--conference-1.png"
                className={styles.image}
                width={322}
                height={400}
                alt="Meetup #1"
                onContextMenu={preventDefault}
              />
            </Column>
            <Column
              className={styles.imageContainer}
              row={1}
              start={9}
              end={4}
              mdRow={2}
              mdStart={6}
              mdEnd={4}
              smStart={5}
            >
              <img
                src="/mentoring--conference-2.png"
                className={styles.image}
                width={322}
                height={400}
                alt="Meetup #2"
                onContextMenu={preventDefault}
              />
            </Column>
          </Grid>
        </section>

        {/* Reviews */}
        <section className={classnames(gridStyles.section, styles.section)}>
          <Grid className={gridStyles.container}>
            <Column>
              <h2>Reviews</h2>
              <ul className={styles.reviews}>
                {reviews.map((review, i) => (
                  <li key={i}>
                    <article
                      className={styles.review}
                      itemScope
                      itemType="http://schema.org/Review"
                    >
                      <section className={styles.bodyContainer}>
                        <span className={styles.body} itemProp="reviewBody">
                          {review.text}
                        </span>
                      </section>
                      <div
                        className={styles.author}
                        itemProp="author"
                        itemScope
                        itemType="http://schema.org/Person"
                      >
                        <h3 className={styles.name} itemProp="name">
                          {review.author}
                        </h3>
                        <span className={styles.bio} itemProp="jobTitle">
                          {review.bio}
                        </span>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            </Column>
          </Grid>
        </section>

        {/* Candidates */}
        <section className={classnames(gridStyles.section, styles.section)}>
          <Grid className={gridStyles.container}>
            <Column start={1} end={12}>
              <h2>Who can I help?</h2>
              <ul className={styles.candidates}>
                <li className={styles.candidate}>
                  <div className={classnames(styles.imageContainer, styles.workingDesigner)}>
                    <img
                      src="/mentoring--conference-1.png"
                      className={styles.image}
                      width={88}
                      height={88}
                      alt="Meetup #1"
                      onContextMenu={preventDefault}
                    />
                  </div>
                  <h3>Working designers</h3>
                  <p>
                    Designers who feel stuck or unheard at their jobs and are looking for guidance.
                  </p>
                </li>
                <li className={styles.candidate}>
                  <div className={classnames(styles.imageContainer, styles.solo)}>
                    <div className={styles.triangle}>
                      <div className={styles.empty} />
                    </div>
                    <img
                      src="/mentoring--conference-2.png"
                      className={styles.image}
                      width={88}
                      height={88}
                      alt="Meetup #1"
                      onContextMenu={preventDefault}
                    />
                  </div>
                  <h3>Solo designers</h3>
                  <p>Designers who feel alone and lack design community and leadership work.</p>
                </li>
                <li className={styles.candidate}>
                  <div className={classnames(styles.imageContainer, styles.graduates)}>
                    <img
                      src="/mentoring--conference-1.png"
                      className={styles.image}
                      width={88}
                      height={88}
                      alt="Meetup #1"
                      onContextMenu={preventDefault}
                    />
                  </div>
                  <h3>Recent graduates</h3>
                  <p>
                    Designers who feel hesitant about their design process in their first design
                    jobs.
                  </p>
                </li>
              </ul>
            </Column>
          </Grid>
        </section>

        {/* Quote */}
        <section className={classnames(gridStyles.section, styles.section, styles.quote)}>
          <Grid className={gridStyles.container}>
            <Column type="figure" start={1} end={12}>
              <blockquote>
                “Pursuing mentorships early and often in your career can help you accelerate your
                growth in tech.”
              </blockquote>
              <figcaption>Samanta Aquino</figcaption>
            </Column>
          </Grid>
        </section>

        {/* Expectations */}
        <section className={classnames(gridStyles.section, styles.section, styles.expectations)}>
          <Grid className={classnames(gridStyles.container, styles.container)}>
            <Column start={1}>
              <h2>What to expect from our chat</h2>
              <ul>
                <li>Career development tips.</li>
                <li>Design process advice.</li>
                <li>Detailed and actionable design critique of portfolios or other work.</li>
                <li>A list of recommended resources tailered to your needs.</li>
                <li>Thorough session notes sent out after our chat.</li>
              </ul>
              <Button
                variant={ButtonVariant.tertiary}
                href="https://superpeer.com/samanta"
                target="_blank"
              >
                Book a call via SuperPeer
              </Button>
              <div className={styles.hidden}>{new Array(200).fill("1").join(" ")}</div>
            </Column>
          </Grid>
        </section>
      </main>

      <Footer
        contentClassName={styles.footerContent}
        title="Get notified of free mentoring"
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

const reviews = [
  {
    text: (
      <>
        Talking with Samanta not only gave me the confidence to <strong>ask for a raise</strong>,
        but also very practical tools and strategies I could use to back up my request. Talking
        about money is always hard, but I felt so much more equipped to have the conversation once I
        implemented Samanta’s suggestions.
      </>
    ),
    author: "Kayli B.",
    bio: "Product designer",
  },
  {
    text: (
      <>
        After talking with Samanta I gained <strong>more confidence</strong> in the design process
        and could take on more <strong>leadership in my role</strong>. This is the biggest thing my
        colleagues said I have improved on, taking on leadership.
      </>
    ),
    author: "Joel W.",
    bio: "UI/UX designer",
  },
  {
    text: (
      <>
        Samanta helped me a great lot when <strong>designing my portfolio</strong> and showcasing my
        work by explaining how portfolios are reviewed by the different stakeholders in a hiring
        process and how I could optimise the design and writing for it. In just an hour I got enough
        feedback and guidance to take my portfolio to the next level!
      </>
    ),
    author: "Fred A.",
    bio: "Product designer",
  },
  {
    text: (
      <>
        ...She inspired me to create <strong>actionable steps</strong> in order for me to solve my
        problems and to see more clearly which direction I should take in my future development. Her
        honest stories of her experiences have been of great help and inspiration and made me feel{" "}
        <strong>less lonely</strong> as a young designer in this field.
      </>
    ),
    author: "Betty",
    bio: "UI/UX designer",
  },
  {
    text: (
      <>
        I truly enjoyed speaking with Samanta because her insights and recommendations come from a
        genuine place acquired after years of hard work and diligence. Her{" "}
        <strong>advice was practical</strong> and straight to the point with lots of takeaways.
      </>
    ),
    author: "Amina K.",
    bio: "Service designer",
  },
  {
    text: (
      <>
        After talking with Samanta I felt so energized. She gave me strategies and ideas to
        implement immediately to solve the problems I was feeling in my role as a{" "}
        <strong>design team of one</strong>. I’m very thankful to have found Samanta and I will be
        coming back for more mentorship.
      </>
    ),
    author: "Kayli B.",
    bio: "Product designer",
  },
];
