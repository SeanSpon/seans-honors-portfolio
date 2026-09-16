import Link from 'next/link';

export default function Nav() {
  return (
    <header className="siteHeader">
      <div className="navInner">
        <Link href="/" className="siteName">
          <strong>Sean McCulloch</strong>
          <span>Honors Portfolio</span>
        </Link>
        <nav className="pageNav" aria-label="Portfolio navigation">
          <Link href="/">Home</Link>
          <Link href="/about">About Me</Link>
          <Link href="/involvement">Involvement</Link>
          <Link href="/year-in-review">Year in Review</Link>
          <Link href="/honors">Honors Experiences</Link>
        </nav>
      </div>
    </header>
  );
}
