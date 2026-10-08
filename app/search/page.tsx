'use client';

import Link from 'next/link';
import {useSearchParams} from 'next/navigation';
import {findSearchItems} from '@/lib/search-index';
import {trackEvent} from '@/lib/analytics';

export default function SearchPage(){
  const params=useSearchParams();
  const query=params.get('q')||'';
  const results=findSearchItems(query);
  return <main className="wrap page">
    <div className="eyebrow">SEARCH / بحث</div>
    <h1>نتائج البحث</h1>
    <p className="sub">{query?<>نتائج لـ <b>«{query}»</b>. النص نفسه لا يتم إرساله كبيانات تحليلية.</>:'ابدأ بكتابة ما تحتاجه.'}</p>
    <div className="list">
      {results.length?results.map(item=><article key={item.href} className="card">
        <span className="tag">{item.title}</span>
        <h2>{item.arabic}</h2>
        <p>{item.description}</p>
        <Link className="btn alt" href={item.href} onClick={()=>trackEvent('search_result_opened',{intent:item.intent})}>فتح المسار →</Link>
      </article>):<div className="notice">لم نجد نتيجة واضحة. جرّب: سعر، معالم، خطة، نقل، مشكلة، أو مساعدة.</div>}
    </div>
    <div className="actions"><Link className="btn alt" href="/">العودة للرئيسية</Link><Link className="btn alt" href="/what-can-i-do-now">ابدأ من احتياجك الآن</Link></div>
  </main>;
}
