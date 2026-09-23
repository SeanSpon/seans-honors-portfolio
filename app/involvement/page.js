import Nav from '../components/Nav';
import Footer from '../components/Footer';

const interests = [
  ['01','Building with SeeZee','I co-founded SeeZee Studio and work on websites and digital tools for clients. It gives me a chance to turn technical ideas into useful, real-world work.'],
  ['02','Hockey and fitness','Hockey taught me how to contribute to a team and keep going when progress is hard. Lifting helps me set measurable goals and stay consistent.'],
  ['03','Leadership and service','At Trinity, I was involved in FBLA, National Honor Society, Beta Club, and KYA/KUNA. I want to carry those habits of initiative and service into college.'],
  ['04','Technology and people','I’m curious about software that makes everyday life easier. I want to keep learning how to design for the people who actually use what I build.'],
];

export default function InvolvementPage() {
  return <main><Nav /><section className="contentPage pageWrap">
    <div className="pageIntro"><p className="eyebrow">02 / Outside the classroom</p><h1 className="pageTitle">Involvement &amp; interests</h1><p className="pageLead">The teams, projects, and ideas that have shaped me so far—and the ways I hope to get involved at UC.</p></div>
    <div className="interestGrid">{interests.map(([number,title,description])=><article className="interestCard" key={title}><span className="smallIndex">{number} / INTEREST</span><h2>{title}</h2><p>{description}</p></article>)}</div>
    <div className="goalPanel"><h2>What I want to explore next</h2><p>At UC, I want to join technology and service opportunities, meet people outside my major, and find projects where I can practice collaborating across different perspectives. I’ll update this page as those experiences take shape.</p></div>
  </section><Footer /></main>;
}
