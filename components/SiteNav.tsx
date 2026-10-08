'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';

const links=[
  ['/experiences','اكتشف / Explore'],['/what-can-i-do-now','الآن / Now'],['/price-check','الأسعار / Prices'],['/transport','النقل / Transport'],['/plan','خطتي / My Plan'],['/trust','الثقة / Trust']
] as const;

export default function SiteNav(){
  const pathname=usePathname();
  return <>
    <a className="skip" href="#main-content">تخطي إلى المحتوى / Skip to content</a>
    <header className="nav">
      <div className="wrap navin">
        <Link className="brand" href="/" aria-label="LUXOR PHARAOH DAY home">LUXOR PHARAOH DAY 🏺👑</Link>
        <nav className="links" aria-label="Primary navigation">
          {links.map(([href,label])=><Link key={href} href={href} aria-current={pathname===href?'page':undefined}>{label}</Link>)}
        </nav>
      </div>
    </header>
  </>;
}
