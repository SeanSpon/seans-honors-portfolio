import Nav from '../components/Nav';

const items = [
  ['Hockey', 'A big part of my life through high school.'],
  ['Fitness', 'Lifting and working toward personal goals.'],
  ['Technology', 'Computers, software, and building things.'],
  ['Leadership', 'FBLA, NHS, Beta Club, KYA/KUNA, and other student involvement.'],
  ['SeeZee Studio', 'A small technology business I co-founded.']
];

export default function InvolvementPage() {
  return (
    <main>
      <Nav />
      <section className="contentPage pageWrap narrowPage">
        <p className="eyebrow">INVOLVEMENT & INTERESTS</p>
        <h1 className="pageTitle">Involvement</h1>
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
