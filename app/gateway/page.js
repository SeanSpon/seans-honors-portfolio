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
          <p>One of the most meaningful experiences I had this past year was building SeeZee Studio with my friend Zach. What started as us working together on technology projects became something much more real as we built a larger portfolio, deployed websites, and started reaching out to potential clients. I remember reaching out to a client through Instagram and realizing that the work we were doing was no longer just practice. We had to actually explain what we could offer, communicate professionally, and make something another person would want to use.</p>

          <p>My biggest takeaway was that knowing how to code is only one part of working in technology. Zach and I had to talk through ideas, split up work, fix problems, and make decisions together. I also had to learn things on my own when we ran into something neither of us had done before. It made me more confident in my ability to learn as I go instead of needing to already know every answer.</p>

          <p>Going into my first year at UC, I can use those lessons in group projects, internships, and future work. I want to keep improving technically, but I also want to become better at communicating and working with different people. This experience shaped my definition of a Global Citizen Scholar because I see it as someone who keeps learning, works well with others, and uses what they know to solve real problems for people.</p>
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
