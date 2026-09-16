import Nav from './components/Nav';

export default function Home() {
  return (
    <main>
      <Nav />
      <section className="homeBare pageWrap">
        <img className="homePhoto" src="/sean-profile.jpg" alt="Sean McCulloch" />
        <div>
          <p className="eyebrow">UNIVERSITY OF CINCINNATI · UNIVERSITY HONORS PROGRAM</p>
          <h1>Sean McCulloch</h1>
          <p className="homeLine">Information Technology · Software Application Development</p>
        </div>
      </section>
    </main>
  );
}
