const Nav = () => (
  <nav className="navShell">
    <a href="#home" className="brand" aria-label="Back to top">
      <span className="ucMark">UC</span>
      <span className="brandCopy"><strong>Sean McCulloch</strong><small>Honors Portfolio</small></span>
    </a>
    <div className="navLinks">
      <a href="#about">About</a>
      <a href="#involvement">Interests</a>
      <a href="#review">Year in Review</a>
      <a href="#honors">Honors</a>
      <a href="#contact">Links</a>
    </div>
  </nav>
);

const years = [
  {year:"2026–27",label:"First Year",active:true,text:"My first Year-in-Review will be added after the Spring 2027 semester. I’ll reflect on the experiences that shaped my first year, the progress I made toward my goals, and what I want to pursue next."},
  {year:"2027–28",label:"Second Year",text:"Annual reflection will be added here after my second year."},
  {year:"2028–29",label:"Third Year",text:"Annual reflection will be added here after my third year."},
  {year:"2029–30",label:"Fourth Year",text:"Final undergraduate Year-in-Review will be added here."}
];

const interests = [
  {num:"01",title:"Technology & Software",text:"Software development, web development, AI, cybersecurity, and learning new tools by building with them."},
  {num:"02",title:"SeeZee Studio",text:"Co-founder of a technology studio where I get hands-on experience building real digital products and solving practical problems.",link:"https://seezeestudios.com",linkText:"Visit SeeZee ↗"},
  {num:"03",title:"Fitness & Hockey",text:"Lifting and hockey have taught me consistency, competition, teamwork, and how to keep working toward measurable goals."},
  {num:"04",title:"UC Involvement",text:"I want to explore Honors opportunities, student organizations, professional experiences, co-ops, and new communities at UC."}
];

export default function Page(){return <main>
  <Nav/>

  <section id="home" className="hero">
    <div className="heroGlow"/>
    <div className="heroCopy">
      <div className="kicker"><span/>University of Cincinnati · University Honors Program</div>
      <h1>Building useful things.<br/><em>Learning along the way.</em></h1>
      <p>I’m Sean McCulloch, an Information Technology student studying Software Application Development at the University of Cincinnati.</p>
      <div className="heroActions">
        <a className="primaryButton" href="#about">Explore portfolio</a>
        <a className="secondaryButton" href="https://github.com/SeanSpon" target="_blank" rel="noreferrer">GitHub ↗</a>
      </div>
    </div>
    <aside className="heroPanel">
      <div className="panelLabel">CURRENTLY</div>
      <div className="stat"><span>Program</span><strong>Information Technology</strong></div>
      <div className="stat"><span>Track</span><strong>Software Application Development</strong></div>
      <div className="stat"><span>Community</span><strong>University Honors Program</strong></div>
      <div className="stat"><span>Focus</span><strong>Build · Learn · Improve</strong></div>
    </aside>
  </section>

  <section id="about" className="lightSection">
    <div className="sectionHeader"><span className="sectionNumber">01</span><div><p className="sectionEyebrow">ABOUT ME</p><h2>More than a class assignment.</h2></div></div>
    <div className="aboutGrid">
      <div className="aboutRail">
        <div className="photoCard">
          <div className="photoPlaceholder"><span>ADD PHOTO</span><small>Professional or personality photo</small></div>
        </div>
        <div className="miniFacts">
          <div><span>FROM</span><strong>Louisville, Kentucky</strong></div>
          <div><span>AT UC</span><strong>Information Technology</strong></div>
          <div><span>INTERESTS</span><strong>Software · AI · Cybersecurity</strong></div>
        </div>
      </div>
      <div className="aboutCopy">
        <p className="introText">I’m Sean McCulloch, an Information Technology student at the University of Cincinnati studying Software Application Development and a member of the University Honors Program. I’m originally from Louisville, Kentucky, where I attended Trinity High School.</p>
        <p>I’ve always been drawn to computers, problem solving, and figuring out how technology works. That interest grew into building websites and software projects of my own. I co-founded SeeZee Studio, where I work on real technology projects and continue learning about development, systems, business, communication, and turning ideas into useful products.</p>
        <p>At UC, I want to keep expanding beyond what I already know. I’m interested in software development, artificial intelligence, cybersecurity, entrepreneurship, and the ways technology can solve real problems. Through the Honors Program, I hope to challenge myself outside the classroom, meet people with different interests and perspectives, and become a stronger student and leader.</p>
        <p>Outside of technology, I enjoy lifting, hockey, spending time with friends, and setting new goals for myself. By graduation, I want strong technical experience, meaningful co-op and internship work, a network of people I’ve learned from, and a portfolio that shows how much I’ve grown.</p>
      </div>
    </div>
  </section>

  <section id="involvement" className="darkSection">
    <div className="sectionHeader darkHeader"><span className="sectionNumber">02</span><div><p className="sectionEyebrow">INVOLVEMENT & INTERESTS</p><h2>What I care about now.</h2></div></div>
    <div className="interestGrid">
      {interests.map(item => <article className="interestCard" key={item.num}>
        <span className="cardNum">{item.num}</span>
        <div><h3>{item.title}</h3><p>{item.text}</p>{item.link&&<a href={item.link} target="_blank" rel="noreferrer">{item.linkText}</a>}</div>
      </article>)}
    </div>
  </section>

  <section id="review" className="lightSection">
    <div className="sectionHeader"><span className="sectionNumber">03</span><div><p className="sectionEyebrow">YEAR IN REVIEW</p><h2>A record of growth.</h2><p className="headerNote">Each academic year will get its own reflection as this portfolio grows with me.</p></div></div>
    <div className="yearGrid">
      {years.map(item => <article className={item.active?"yearCard active":"yearCard"} key={item.year}>
        <div className="yearTop"><span>{item.label}</span>{item.active&&<b>UPCOMING</b>}</div>
        <h3>{item.year}</h3>
        <p>{item.text}</p>
        {item.active&&<small>First reflection due after the 2026–27 academic year.</small>}
      </article>)}
    </div>
  </section>

  <section id="honors" className="darkSection">
    <div className="sectionHeader darkHeader"><span className="sectionNumber">04</span><div><p className="sectionEyebrow">HONORS EXPERIENCES</p><h2>Experience showcases.</h2><p className="headerNote">As I complete Honors experiences, each will have its own reflection and artifact showing what I learned.</p></div></div>
    <div className="honorsEmpty">
      <div className="honorsIndex">01</div>
      <div><span className="statusDot"><i/>READY FOR THE FIRST EXPERIENCE</span><h3>Nothing to fake here.</h3><p>I have not completed an Honors Experience yet. This space is intentionally ready for my first showcase once I have something meaningful to add.</p></div>
    </div>
  </section>

  <section id="contact" className="contactSection">
    <div>
      <p className="sectionEyebrow">CONTACT & LINKS</p>
      <h2>This portfolio is<br/><em>just getting started.</em></h2>
    </div>
    <div className="linkStack">
      <a href="https://github.com/SeanSpon" target="_blank" rel="noreferrer"><span>GitHub</span><b>↗</b></a>
      <a href="https://seezeestudios.com" target="_blank" rel="noreferrer"><span>SeeZee Studio</span><b>↗</b></a>
    </div>
  </section>

  <footer><div><strong>UC</strong><span>Sean McCulloch · Honors Portfolio</span></div><span>Information Technology · Software Application Development</span><span>© 2026</span></footer>
</main>}
