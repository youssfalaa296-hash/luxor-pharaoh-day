import type {Metadata} from 'next';
import {SpeedInsights} from '@vercel/speed-insights/next';
import {Analytics} from '@vercel/analytics/next';
import SiteNav from '@/components/SiteNav';
import './globals.css';

const siteUrl=process.env.NEXT_PUBLIC_SITE_URL||'https://luxor-pharaoh-day-q3rd.vercel.app';

export const metadata:Metadata={
  metadataBase:new URL(siteUrl),
  title:{default:'LUXOR PHARAOH DAY 🏺👑',template:'%s · LUXOR PHARAOH DAY'},
  description:'A Day in Luxor with the Pharaohs — منصة مستقلة ثنائية اللغة تساعد زوار الأقصر على أن يعرفوا، يتأكدوا، ثم يتحركوا بثقة.',
  applicationName:'LUXOR PHARAOH DAY',
  keywords:['Luxor','Luxor tourism','Luxor Temple','Karnak','Egypt travel','الأقصر','سياحة الأقصر'],
  alternates:{canonical:siteUrl},
  openGraph:{type:'website',url:siteUrl,title:'LUXOR PHARAOH DAY 🏺👑',description:'اعرف • اتأكد • اتحرك — A Day in Luxor with the Pharaohs',siteName:'LUXOR PHARAOH DAY'},
  twitter:{card:'summary_large_image',title:'LUXOR PHARAOH DAY 🏺👑',description:'اعرف • اتأكد • اتحرك — A Day in Luxor with the Pharaohs'},
  robots:{index:true,follow:true},
  icons:{icon:'/icon.svg',apple:'/icon.svg'}
};

const structuredData={
  '@context':'https://schema.org',
  '@type':'WebSite',
  name:'LUXOR PHARAOH DAY',
  url:siteUrl,
  description:'Independent bilingual visitor information and local planning platform for Luxor.',
  inLanguage:['ar','en']
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="ar" dir="rtl"><body>
    <SiteNav/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}} />
    <div id="main-content">{children}</div>
    <footer className="footer"><div className="wrap">LUXOR PHARAOH DAY 🏺👑 · KNOW • CHECK • GO<br/>منصة مستقلة للمعلومات والتخطيط — لا تمثل جهة حكومية.</div></footer>
    <SpeedInsights/><Analytics/>
  </body></html>;
}
