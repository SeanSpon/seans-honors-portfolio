import Nav from '../components/Nav';
import Footer from '../components/Footer';

const years = [
  ['01','2026–27','First year','My first reflection will connect what I learn in class, in honors, and through the people and projects I meet at UC.'],
  ['02','2027–28','Second year','Space for the next chapter and the goals that grow out of year one.'],
  ['03','2028–29','Third year','A future reflection on new challenges, growth, and direction.'],
  ['04','2029–30','Fourth year','A look back at the whole journey and what comes next.'],
];

export default function YearInReviewPage() {
  return <main><Nav /><section className="contentPage pageWrap">
    <div className="pageIntro"><p className="eyebrow">03 / Reflection over time</p><h1 className="pageTitle">Year in Review</h1><p className="pageLead">Each year, I’ll connect the experiences that changed my thinking, reflect on my goals, and decide what I want to work toward next.</p></div>
    <div className="yearList">{years.map(([number,year,label,description])=><article className="yearRow" key={year}><span className="yearIndex">{number} / {year}</span><h2>{label}</h2><p>{description}</p></article>)}</div>
    <div className="guideNote"><h2>First reflection: after the 2026–27 academic year</h2><p>UC’s <a href="https://www.uc.edu/campus-life/honors/resources/portfolios/year-in-review.html" target="_blank" rel="noopener noreferrer">Year-in-Review guide</a> asks students to reflect across experiences and set goals for the coming year. I’ll add my first completed reflection here after my first year.</p></div>
  </section><Footer /></main>;
}
