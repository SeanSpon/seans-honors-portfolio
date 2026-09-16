import Nav from '../components/Nav';

export default function AboutPage() {
  return (
    <main>
      <Nav />
      <section className="contentPage pageWrap narrowPage">
        <p className="eyebrow">ABOUT ME</p>
        <h1 className="pageTitle">About Me</h1>
        <div className="prose">
          <p>I’m Sean McCulloch. I’m from Louisville, Kentucky, and graduated from Trinity High School before coming to the University of Cincinnati.</p>
          <p>I’m studying Information Technology with a focus in Software Application Development and I’m part of the University Honors Program. Outside of school, I’m into hockey, lifting, technology, and spending time with friends.</p>
          <p>This portfolio will grow as I do more at UC.</p>
        </div>
      </section>
    </main>
  );
}
