import Nav from '../components/Nav';

export default function HonorsPage() {
  return (
    <main>
      <Nav />
      <section className="contentPage pageWrap">
        <p className="eyebrow">HONORS EXPERIENCES</p>
        <h1 className="pageTitle">Honors Experiences</h1>
        <div className="emptyState">
          <h2>No completed experiences yet.</h2>
          <p>As I complete University Honors experiences, I’ll add each one here with a short reflection and something that represents what I learned.</p>
        </div>
      </section>
    </main>
  );
}
