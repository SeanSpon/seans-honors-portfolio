import Link from 'next/link';
import Nav from './components/Nav';

export default function Home() {
  return (
    <main>
      <Nav />
      <section className="homePage pageWrap">
        <div className="homeIntro">
          <p className="eyebrow">UNIVERSITY OF CINCINNATI · UNIVERSITY HONORS PROGRAM</p>
          <h1>Sean McCulloch</h1>
          <p className="homeLead">Information Technology student studying Software Application Development.</p>
          <p className="homeBlurb">This portfolio is a place for me to keep track of my experiences, interests, and growth throughout college.</p>
          <div className="homeButtons">
            <Link href="/about" className="primaryLink">About Me</Link>
            <Link href="/year-in-review" className="secondaryLink">Year in Review</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
