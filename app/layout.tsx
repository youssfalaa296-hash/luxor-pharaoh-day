import type {Metadata} from 'next';
import {SpeedInsights} from '@vercel/speed-insights/next';
import {Analytics} from '@vercel/analytics/next';
import SiteNav from '@/components/SiteNav';
import './globals.css';

const siteUrl=process.env.NEXT_PUBLIC_SITE_URL||'https://luxor-pharaoh-day-q3rd.vercel.app';
const whatsapp='201012801568';
const email='youssfalaa296@gmail.com';
const instagram='https://www.instagram.com/luxor_quest/';
const enableVercelTelemetry=process.env.VERCEL_ENV==='production';

export const metadata:Metadata={
  metadataBase:new URL(siteUrl),
  title:{default:'LUXOR PHARAOH DAY 🏺👑',template:'%s · LUXOR PHARAOH DAY'},
  description:'A Day in Luxor with the Pharaohs — منصة مستقلة ثنائية اللغة تساعد زوار الأقصر على المعرفة والتحقق والتخطيط والدعم العملي.',
  applicationName:'LUXOR PHARAOH DAY',
  keywords:['Luxor','Luxor tourism','Luxor Temple','Karnak','Egypt travel','الأقصر','سياحة الأقصر'],
  alternates:{canonical:siteUrl},
  openGraph:{type:'website',url:siteUrl,title:'LUXOR PHARAOH DAY 🏺👑',description:'اعرف • اتأكد • اتحرك — A Day in Luxor with the Pharaohs',siteName:'LUXOR PHARAOH DAY'},
  twitter:{card:'summary_large_image',title:'LUXOR PHARAOH DAY 🏺👑',description:'اعرف • اتأكد • اتحرك — A Day in Luxor with the Pharaohs'},
  robots:{index:process.env.VERCEL_ENV==='production',follow:true},
  icons:{icon:'/icon.svg',apple:'/icon.svg'}
};

const structuredData={
  '@context':'https://schema.org',
  '@type':'WebSite',
  name:'LUXOR PHARAOH DAY',
  url:siteUrl,
  description:'Independent bilingual visitor information and local planning platform for Luxor.',
  inLanguage:['ar','en'],
  contactPoint:[
    { '@type':'ContactPoint',contactType:'customer support',telephone:'+20-101-280-1568',email }
  ],
  sameAs:[instagram]
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="ar" dir="rtl"><body>
    <SiteNav/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}} />
    <div id="main-content">{children}</div>
    <footer className="footer">
      <div className="wrap">
        <strong>LUXOR PHARAOH DAY 🏺👑</strong> · KNOW • CHECK • GO<br/>
        منصة مستقلة للمعلومات والتخطيط والدعم العملي — لا تمثل جهة حكومية ولا تدّعي ترخيص شركة سياحة.
        <div className="footer-contact">
          <a href={`https://wa.me/${whatsapp}`}>WhatsApp / واتساب</a> ·
          <a href={`mailto:${email}`}>Email / البريد</a> ·
          <a href={instagram} rel="noreferrer">Instagram</a> ·
          <a href="/contact">Contact / تواصل</a>
        </div>
      </div>
    </footer>
    {enableVercelTelemetry && <><SpeedInsights/><Analytics/></>}
  </body></html>
}
