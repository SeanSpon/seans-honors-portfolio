import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function HonorsPage() {
  return <main><Nav /><section className="contentPage pageWrap">
    <div className="pageIntro"><p className="eyebrow">04 / Learning in action</p><h1 className="pageTitle">Honors Experiences</h1><p className="pageLead">A home for the experiences that challenge how I think, connect me with others, and help me grow as a global citizen scholar.</p></div>
    <article className="featurePanel"><div><p className="eyebrow">Starting point / Fall 2026</p><h2>The journey starts here.</h2><p>I’m beginning my first year in the University Honors Program. As I complete honors experiences, I’ll add a showcase for each one with the story, what I learned, and a piece of work or image that represents that learning.</p></div><div className="featureSymbol" aria-hidden="true">01</div></article>
    <h2 className="subheading">What each showcase will include</h2>
    <div className="steps"><div className="step"><strong>01 / The experience</strong><span>A concise description of what I did and why I chose it.</span></div><div className="step"><strong>02 / The learning</strong><span>How it changed my perspective and my understanding of a global citizen scholar.</span></div><div className="step"><strong>03 / An artifact</strong><span>A photo, project, paper, or other visual with a short explanation of why it matters.</span></div></div>
    <div className="guideNote"><h2>More to come</h2><p>UC’s <a href="https://www.uc.edu/campus-life/honors/resources/portfolios/showcase.html" target="_blank" rel="noopener noreferrer">Showcase Guide</a> recommends posting a showcase within one month of finishing each honors experience. I’ll add the first one once I have completed an experience.</p></div>
  </section><Footer /></main>;
}
