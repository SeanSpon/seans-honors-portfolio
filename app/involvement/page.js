import Nav from '../components/Nav';

const items = [
  ['Technology', 'I enjoy computers, software development, web development, and learning new technology by actually using it.'],
  ['Hockey', 'Hockey has been a big part of my life and taught me a lot about teamwork, competition, and staying consistent.'],
  ['Fitness', 'I spend a lot of time lifting and setting goals in the gym. It is one of the main ways I challenge myself outside of school.'],
  ['Leadership & Involvement', 'In high school I was involved in groups including FBLA, Beta Club, NHS, KYA/KUNA, and other student activities. At UC, I want to keep finding new ways to get involved.'],
  ['SeeZee Studio', 'I co-founded SeeZee Studio and have worked on real web and technology projects. It gives me a chance to combine technology with business and communication.']
];

export default function InvolvementPage() {
  return (
    <main>
      <Nav />
      <section className="contentPage pageWrap">
        <p className="eyebrow">INVOLVEMENT & INTERESTS</p>
        <h1 className="pageTitle">Things I’m into.</h1>
        <div className="simpleList">
          {items.map(([title, text]) => (
            <article key={title}>
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
