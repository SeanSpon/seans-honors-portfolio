import Nav from '../components/Nav';

const years = [
  ['2026–27', 'First Year', 'To be added after my first year at UC.'],
  ['2027–28', 'Second Year', '—'],
  ['2028–29', 'Third Year', '—'],
  ['2029–30', 'Fourth Year', '—']
];

export default function YearInReviewPage() {
  return (
    <main>
      <Nav />
      <section className="contentPage pageWrap narrowPage">
        <p className="eyebrow">YEAR IN REVIEW</p>
        <h1 className="pageTitle">Year in Review</h1>
        <div className="yearList">
          {years.map(([year, label, text]) => (
            <article key={year}>
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
