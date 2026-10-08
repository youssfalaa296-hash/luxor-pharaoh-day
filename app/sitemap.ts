import type {MetadataRoute} from 'next';
export default function sitemap():MetadataRoute.Sitemap{
  const base=process.env.NEXT_PUBLIC_SITE_URL||'https://luxor-pharaoh-day-q3rd.vercel.app';
  const paths=['/','/visitor-center','/rescue','/vib','/live-now','/smart-day','/fair-deal','/family-mode','/photo-mode','/night-plan','/tourist-pocket','/soundtrack','/visitor-guide','/emergency','/experiences','/price-check','/what-can-i-do-now','/transport','/before-you-buy','/plan','/help','/trust','/report-issue','/faq','/privacy','/terms','/advanced','/contact'];
  return paths.map(path=>({url:base+path,lastModified:new Date('2026-10-08'),changeFrequency:'weekly',priority:path==='/'?1:path==='/visitor-center'?0.95:.7}));
}