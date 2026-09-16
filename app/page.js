const Nav = () => (
  <nav className="navShell">
    <a href="#home" className="brand" aria-label="Back to top">
      <span className="ucMark">UC</span>
      <span className="brandCopy"><strong>Sean McCulloch</strong><small>Honors Learning Portfolio</small></span>
    </a>
    <div className="navLinks">
      <a href="#about">About Me</a>
      <a href="#involvement">Involvement</a>
      <a href="#review">Year in Review</a>
      <a href="#honors">Honors</a>
      <a href="#looking-ahead">Looking Ahead</a>
    </div>
  </nav>
);

const years = [
  {year:"2026–27",label:"First Year",active:true,text:"My first Year-in-Review will be added after the Spring 2027 semester. I’ll reflect on the people I met, what challenged me, what I learned about myself, and the experiences that shaped my first year at UC."},
  {year:"2027–28",label:"Second Year",text:"My second-year reflection will be added here as my UC experience continues."},
  {year:"2028–29",label:"Third Year",text:"My third-year reflection will focus on how my goals, interests, and experiences have changed."},
  {year:"2029–30",label:"Fourth Year",text:"My final undergraduate reflection will look back on my growth across all four years at UC."}
];

const interests = [
  {num:"01",title:"Hockey & Fitness",text:"Hockey has been a big part of my life, and lifting is one of the main ways I challenge myself now. Both have taught me consistency, teamwork, competition, and how much progress can come from sticking with something."},
  {num:"02",title:"Technology & Creativity",text:"I’ve always liked computers, problem solving, and figuring out how things work. Coding and building projects gives me a way to turn ideas into something real, but technology is only one part of what I want to explore in college."},
  {num:"03",title:"Leadership & Involvement",text:"In high school I was involved in organizations such as FBLA, National Honor Society, Beta Club, KYA/KUNA, and other student groups. At UC, I want to keep finding communities where I can contribute, meet people, and grow as a leader."},
  {num:"04",title:"Friends, Experiences & UC",text:"A major goal for college is to make the most of the experience outside the classroom too — meeting new people, trying things I would not have done before, exploring Cincinnati, and building friendships and memories along the way."}
];

export default function Page(){return <main>
  <Nav/>

  <section id="home" className="hero">
    <div className="heroGlow"/>
    <div className="heroCopy">
      <div className="kicker"><span/>University of Cincinnati · University Honors Program</div>
      <h1>Sean<br/><em>McCulloch.</em></h1>
      <p>This is my learning portfolio — a place to keep track of who I am, what I care about, the experiences I have at UC, and how I grow throughout college.</p>
      <div className="heroActions">
        <a className="primaryButton" href="#about">Get to know me</a>
        <a className="secondaryButton" href="#review">My UC journey ↓</a>
      </div>
    </div>
    <aside className="heroPanel">
      <div className="panelLabel">AT A GLANCE</div>
      <div className="stat"><span>From</span><strong>Louisville, Kentucky</strong></div>
      <div className="stat"><span>School</span><strong>University of Cincinnati</strong></div>
      <div className="stat"><span>Major</span><strong>Information Technology</strong></div>
      <div className="stat"><span>Outside Class</span><strong>Hockey · Lifting · Friends · Projects</strong></div>
    </aside>
  </section>

  <section id="about" className="lightSection">
    <div className="sectionHeader"><span className="sectionNumber">01</span><div><p className="sectionEyebrow">ABOUT ME</p><h2>Who I am.</h2></div></div>
    <div className="aboutGrid">
      <div className="aboutRail">
        <div className="photoCard">
          <div className="photoPlaceholder"><span>ADD PHOTO</span><small>Professional or personality photo</small></div>
        </div>
        <div className="miniFacts">
          <div><span>HOMETOWN</span><strong>Louisville, Kentucky</strong></div>
          <div><span>HIGH SCHOOL</span><strong>Trinity High School</strong></div>
          <div><span>AT UC</span><strong>IT · Software Application Development</strong></div>
          <div><span>INTERESTS</span><strong>Hockey · Fitness · Technology · People</strong></div>
        </div>
      </div>
      <div className="aboutCopy">
        <p className="introText">I’m Sean McCulloch, a first-year student at the University of Cincinnati studying Information Technology with a focus in Software Application Development. I’m also part of the University Honors Program. I grew up in Louisville, Kentucky and attended Trinity High School before moving to Cincinnati for college.</p>
        <p>I’ve always been someone who likes having goals to work toward. A lot of my interests come from that. Hockey taught me how to compete and work as part of a team, lifting gives me something measurable to improve at every week, and technology gives me a way to solve problems and create things from scratch. I also co-founded SeeZee Studio, which has given me experience working on real projects and learning how ideas turn into something other people can use.</p>
        <p>College is also a chance for me to grow outside of the things I already know. During my time at UC, I want to meet new people, get involved, explore Cincinnati, take on experiences that push me out of my comfort zone, and figure out what kind of career and life I want after graduation. Through Honors, I want this portfolio to show that growth over time — not just what I accomplished, but how my interests, goals, and perspective changed along the way.</p>
      </div>
    </div>
  </section>

  <section id="involvement" className="darkSection">
    <div className="sectionHeader darkHeader"><span className="sectionNumber">02</span><div><p className="sectionEyebrow">INVOLVEMENT & INTERESTS</p><h2>The things that make me, me.</h2><p className="headerNote">Some are things I already care about. Others are areas I want to explore more while I am at UC.</p></div></div>
    <div className="interestGrid">
      {interests.map(item => <article className="interestCard" key={item.num}>
        <span className="cardNum">{item.num}</span>
        <div><h3>{item.title}</h3><p>{item.text}</p></div>
      </article>)}
    </div>
  </section>

  <section id="review" className="lightSection">
    <div className="sectionHeader"><span className="sectionNumber">03</span><div><p className="sectionEyebrow">YEAR IN REVIEW</p><h2>My UC journey, year by year.</h2><p className="headerNote">At the end of each academic year, I’ll use this section to look back at what happened, what changed, and what I learned about myself.</p></div></div>
    <div className="yearGrid">
      {years.map(item => <article className={item.active?"yearCard active":"yearCard"} key={item.year}>
        <div className="yearTop"><span>{item.label}</span>{item.active&&<b>CURRENT YEAR</b>}</div>
        <h3>{item.year}</h3>
        <p>{item.text}</p>
        {item.active&&<small>First reflection will be completed after the 2026–27 academic year.</small>}
      </article>)}
    </div>
  </section>

  <section id="honors" className="darkSection">
    <div className="sectionHeader darkHeader"><span className="sectionNumber">04</span><div><p className="sectionEyebrow">HONORS EXPERIENCES</p><h2>Experiences worth remembering.</h2><p className="headerNote">As I complete University Honors experiences, I’ll add a reflection and something that represents what I did or learned.</p></div></div>
    <div className="honorsEmpty">
      <div className="honorsIndex">01</div>
      <div><span className="statusDot"><i/>FIRST EXPERIENCE COMING LATER</span><h3>Just getting started.</h3><p>I have not completed an Honors Experience yet. Once I do, this will become the first showcase in the portfolio.</p></div>
    </div>
  </section>

  <section id="looking-ahead" className="contactSection">
    <div>
      <p className="sectionEyebrow">LOOKING AHEAD</p>
      <h2>What I want from<br/><em>my time at UC.</em></h2>
    </div>
    <div className="futureGoals">
      <p>Build strong friendships and become part of communities on campus.</p>
      <p>Challenge myself through Honors experiences and opportunities outside my normal interests.</p>
      <p>Gain real professional experience through co-ops, internships, and projects.</p>
      <p>Keep improving physically, academically, socially, and professionally.</p>
      <p>Graduate with experiences and relationships that matter just as much as the degree itself.</p>
      <div className="smallLinks"><a href="https://github.com/SeanSpon" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://seezeestudios.com" target="_blank" rel="noreferrer">SeeZee Studio ↗</a></div>
    </div>
  </section>

  <footer><div><strong>UC</strong><span>Sean McCulloch · Honors Learning Portfolio</span></div><span>University of Cincinnati · Class of 2030</span><span>© 2026</span></footer>
</main>}
