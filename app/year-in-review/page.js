import Nav from '../components/Nav';

const years = [
  ['2026–27', 'First Year', 'My first Year-in-Review will be added after my first year at UC.'],
  ['2027–28', 'Second Year', 'Reflection will be added here after my second year.'],
  ['2028–29', 'Third Year', 'Reflection will be added here after my third year.'],
  ['2029–30', 'Fourth Year', 'Reflection will be added here after my fourth year.']
];

export default function YearInReviewPage() {
  return (
    <main>
      <Nav />
      <section className="contentPage pageWrap">
        <p className="eyebrow">YEAR IN REVIEW</p>
        <h1 className="pageTitle">My years at UC.</h1>
        <p className="pageIntro">Each year, I’ll add a reflection on the experiences, changes, and moments that mattered most.</p>
        <div className="yearList">
          {years.map(([year, label, text], index) => (
            <article className={index === 0 ? 'currentYear' : ''} key={year}>
              <span>{label}</span>
              <h2>{year}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
