import { Fragment } from 'react';
import Layout from '../app/components/layout';
import Section from '../app/components/common/section';
import { styles } from '../app/constants';
import CTAButton from '../app/components/common/ctaButton';
import Link from '../app/components/common/link';

const SpeakAtJSHeroes = () => (
  <Layout>
    <div className="cover" />

    <Section className="content">
      <Fragment>
        <h2>Call for Papers is OPEN!</h2>
        <p>
          Our <strong>Call for Papers</strong> process is open until <strong>December 1st!</strong>{' '}
          We encourage people of all ages, races, genders and religions, to submit proposals and we
          would like to ensure everyone that our process of selecting the talks will be{' '}
          <strong>fair</strong> and <strong>transparent</strong>, as the entire concept behind
          JSHeroes.
        </p>

        <CTAButton url="https://jsheroes-form.typeform.com/to/IHohur">
          Submit Your Proposal Now
        </CTAButton>

        <h3>
          <span role="img" aria-label="what">
            ✍
          </span>{' '}
          What we are looking for
        </h3>
        <p>
          JSHeroes is a <strong>single track 2-day conference</strong> dedicated to the entire JS
          ecosystem. We are looking for a multitude of topics and perspectives, but most of all we
          value:
        </p>
        <ul>
          <li>
            <strong>Original</strong> topics, presented for the first time.
          </li>
          <li>
            <strong>Practical</strong> ideas that attendees can apply at work the next day.
          </li>
          <li>
            Trends and hot topics which are relevant in <strong>2019</strong> and beyond.
          </li>
          <li>
            Fresh <strong>perspectives</strong> on the JS ecosystem.
          </li>
          <li>
            The <strong>human</strong> side of software engineering.
          </li>
        </ul>
        <p>
          We will do our best to build an <strong>agenda</strong> that covers{' '}
          <strong>diverse</strong> topics which can be of interest for the majority of attendees
          interested in the current landscape of the JavaScript world. We do not wish to limit your
          perspectives, but we did propose a couple of <strong>broad topics</strong> in the CFP
          form, in which your proposal may fall. However, do not consider them restrictive, but
          rather see them as a guideline to classify and structure all the proposals we receive.
        </p>
        <h3>
          <span role="img" aria-label="how">
            📈
          </span>{' '}
          How the selection will happen
        </h3>
        <p>
          We are expecting to receive close to <strong>300 proposals</strong> for JSHeroes 2019.
          With this in mind, we created a team of world wide subject matter experts that will go
          through the proposals and will decide what to include in the conference agenda. This is a
          rough estimation of our schedule and process:
        </p>
        <ul>
          <li>
            All the proposals are to be received until <strong>December 1st</strong>.
          </li>
          <li>
            Each member of the commitee will go through the proposals and will create their own{' '}
            <strong>shortlist</strong>.
          </li>
          <li>
            Based on the recurrence of a proposal on multiple shortlists we will proceed to place it
            on the <strong>accepted</strong> list.
          </li>
          <li>
            The <strong>debate</strong> and <strong>selection</strong> process for the remaining
            proposals will end around <strong>mid January</strong>.
          </li>
          <li>
            All the speakers will get a <strong>response</strong>, positive or negative, until the{' '}
            <strong>end of January</strong>, at most until mid February.
          </li>
          <li>
            At the end of the process we will publish the exact <strong>criteria</strong> on which
            we based our selection.
          </li>
        </ul>
        <h3>
          <span role="img" aria-label="perks">
            🏆
          </span>{' '}
          The perks we offer
        </h3>
        <p>
          If your proposal gets selected and you accept to join <strong>JSHeroes 2019</strong> as a
          speaker, we will make sure you have the best possible <strong>experience</strong> for your
          entire stay in Cluj. Here are some of the benefits we offer to speakers:
        </p>
        <ul>
          <li>Full payment for your travel to and from the event</li>
          <li>4 nights at a 5 star hotel, right on top of the venue</li>
          <li>Free entrance at the conference and at any workshop on Day 0</li>
          <li>Extra ticket + double room, in case somebody is joining you</li>
          <li>Hiking trip with the team on Saturday</li>
          <li>Speaker dinners and other activities around the event</li>
        </ul>
        <h3>
          <span role="img" aria-label="perks">
            ✋
          </span>{' '}
          Help and support along the way
        </h3>
        <p>
          We are committed to fulfilling our <strong>mission</strong> as an open source event. We
          are all community people and we want to be as close to you as possible. We will try to be{' '}
          <strong>supportive and helpful</strong> and we will do our best to get back to you with
          valuable feedback from the CFP process. In case you wish to talk with someone from the
          team, do not hesitate to write an email at{' '}
          <Link theme={Link.THEME_DARK} href="mailto:welcome@jsheroes.io">
            welcome@jsheroes.io
          </Link>
          . Good luck!
        </p>

        <CTAButton url="https://jsheroes-form.typeform.com/to/IHohur">
          Submit Your Proposal Now
        </CTAButton>
      </Fragment>
    </Section>

    <style jsx>
      {`
        .cover {
          background-image: url(static/img/conference-photo.jpg);
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          height: 50vh;
        }

        p {
          text-align: left;
          margin-bottom: 10px;
        }

        h2 {
          margin-top: 50px;
          text-align: center;
          color: ${styles.mainColor6};
        }

        h3 {
          margin-top: 40px;
        }

        ul {
          text-align: left;
          margin: 10px 20px;
        }
      `}
    </style>
  </Layout>
);

export default SpeakAtJSHeroes;
