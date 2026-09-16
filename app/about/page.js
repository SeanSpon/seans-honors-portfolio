import Nav from '../components/Nav';

export default function AboutPage() {
  return (
    <main>
      <Nav />
      <section className="contentPage pageWrap">
        <p className="eyebrow">ABOUT ME</p>
        <h1 className="pageTitle">Hi, I’m Sean.</h1>
        <div className="aboutLayout">
          <div className="photoPlaceholder simplePhoto">
            <span>PHOTO</span>
            <small>Add a photo of me here</small>
          </div>
          <div className="prose">
            <p>I’m from Louisville, Kentucky, and I graduated from Trinity High School before coming to the University of Cincinnati. I’m studying Information Technology with a focus in Software Application Development and I’m also part of the University Honors Program.</p>
            <p>I’ve always liked computers, problem solving, and learning how things work. Outside of school, some of the biggest parts of my life are hockey, lifting, spending time with friends, and working on projects like SeeZee Studio.</p>
            <p>At UC, I want to meet new people, try things outside of what I already know, get involved on campus, and build experience that helps me grow personally and professionally. By graduation, I want to be able to look back at this portfolio and see how much I changed from my first year.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
