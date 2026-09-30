import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function GatewayPage() {
  return (
    <main>
      <Nav />
      <article className="pageWrap readingPage">
        <p className="kicker">Gateway to University Honors</p>
        <h1>Prior Experience Showcase</h1>
        <p className="entryDate">Fall 2026 · SeeZee Studio</p>

        <section className="entry">
          <h2>Building SeeZee Studio</h2>
          <p>Over the past year, one of the most meaningful experiences I had was probably building SeeZee Studio with my friend Zach. We started working on what we thought were just technology projects as part of an FBLA club we were in. But then we realized we were able to build much bigger things. We created a larger portfolio with different websites and started reaching out to actual customers. I remember reaching out to a few clients through Instagram messages and realizing that the work we were doing wasn't just practice anymore. We actually had something to offer. We had to communicate professionally and make something another person would actually want to use and benefit from.</p>

          <p>I think my biggest takeaway was figuring out that coding was not everything there was to the world of technology. There was so much more to it. Zach and I had to talk through ideas, split up work, fix problems, and make choices together. We also had to learn a lot of things on our own when we ran into things that neither of us had come across before. This made me a lot more confident in my ability to learn as I go instead of feeling like I need to already know everything.</p>

          <p>Going into my first year at UC, I can use these lessons in group projects, internships, and any future work I have. I want to keep improving technically while also becoming better at communicating and working with different people. This experience has also shaped my definition of a Global Citizen Scholar. I see it as someone who keeps learning, works well with others, and uses what they know and have experienced to help solve real problems for new people.</p>
        </section>

        <section className="entry">
          <h2>Artifact</h2>
          <p>SeeZee Studio and the projects Zach and I built together are an artifact of this experience. The finished work represents the point where our ideas became real projects for other people, rather than just practice.</p>
          <p><a href="https://see-zee.com" target="_blank" rel="noreferrer">View SeeZee Studio</a></p>
        </section>
      </article>
      <Footer />
    </main>
  );
}
