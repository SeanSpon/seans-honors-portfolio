import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function AboutPage() {
  return <main><Nav /><section className="contentPage pageWrap">
    <div className="pageIntro"><p className="eyebrow">01 / The person behind the portfolio</p><h1 className="pageTitle">About Me</h1><p className="pageLead">A little about where I’ve been, what I care about, and where I hope to go.</p></div>
    <div className="aboutGrid">
      <div><div className="portraitBox"><img src="/sean-portrait.png" alt="Sean McCulloch in a navy suit" /></div></div>
      <div className="prose">
        <p>Hi, I’m Sean McCulloch. I grew up in Louisville, Kentucky, and came to the University of Cincinnati after graduating from Trinity High School. I’m studying Information Technology with a focus in Software Application Development, and I’m excited to be part of the University Honors Program.</p>
        <p>I’ve always liked figuring out how things work and then making something useful from what I learn. That interest led me to co-found SeeZee Studio, where I work with a teammate to build websites and digital tools for clients. Working on real projects has shown me that good technology takes more than code: it takes listening, clear communication, and a willingness to keep improving.</p>
        <p>Hockey has also shaped me. Playing on a team taught me to stay accountable, handle setbacks, and contribute to a shared goal. In high school, I explored leadership through FBLA, National Honor Society, Beta Club, and KYA/KUNA. Outside of class, I enjoy lifting, spending time with friends, and learning new technical skills.</p>
        <p>At UC, I want to grow as a developer and as a person. I hope to explore the social impact of technology, collaborate with people who see problems differently, and take on experiences that push me beyond what I already know. I’ll use this portfolio to reflect honestly on that growth and keep track of the work and relationships that matter most.</p>
        <div className="factStrip"><span>Louisville → Cincinnati</span><span>IT / Software Development</span><span>Hockey + lifting</span></div>
      </div>
    </div>
  </section><Footer /></main>;
}
