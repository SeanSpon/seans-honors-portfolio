import Link from 'next/link';
import Nav from './components/Nav';
import Footer from './components/Footer';

const sections = [
  ['01', 'About Me', 'My background, what drives me, and what I hope to learn at UC.', '/about'],
  ['02', 'Involvement', 'Hockey, leadership, building software, and the communities I want to join.', '/involvement'],
  ['03', 'Year in Review', 'A place to reflect on each academic year and set new goals.', '/year-in-review'],
];

export default function Home() {
  return <main>
    <Nav />
    <section className="homeHero"><div className="pageWrap heroGrid">
      <div>
        <p className="eyebrow">University of Cincinnati / University Honors Program</p>
        <h1 className="heroTitle">Learning by <em>building.</em><br />Growing by reflecting.</h1>
        <p className="heroIntro">I’m Sean McCulloch, an Information Technology student focused on software application development. This is where I’ll document the experiences, people, and questions shaping my time at UC.</p>
        <div className="heroActions"><Link className="button" href="/about">Get to know me <span aria-hidden="true">↗</span></Link><Link className="button secondary" href="/honors">Honors experiences</Link></div>
      </div>
      <div className="heroArt heroPhoto"><img src="/sean-portrait.png" alt="Sean McCulloch" /><div className="artCaption"><strong>Curiosity.<br />Community.<br />Progress.</strong><span>UC Honors<br />2026—</span></div></div>
    </div></section>
    <section className="section darkSection"><div className="pageWrap">
      <div className="sectionTop"><div><p className="eyebrow">Explore the portfolio</p><h2>More than a résumé.</h2></div><p className="sectionLead">A record of what I try, what I learn, and how my goals change along the way.</p></div>
      <div className="cards">{sections.map(([number,title,description,href])=><Link className="card" href={href} key={href}><span className="cardNumber">{number} / PORTFOLIO</span><div><h3>{title}</h3><p>{description}</p></div><span className="arrow" aria-hidden="true">↗</span></Link>)}</div>
    </div></section>
    <section className="section"><div className="pageWrap splitStatement"><div><p className="eyebrow">The idea behind this space</p><h2>Where experience becomes insight.</h2></div><div><p>I’m interested in the way technology can solve real problems for real people. Through classes, honors experiences, leadership, and the projects I build, I want to become a stronger collaborator and a more thoughtful developer.</p><Link className="textLink" href="/involvement">What I’m involved in <span className="arrow" aria-hidden="true">↗</span></Link></div></div></section>
    <Footer />
  </main>;
}
