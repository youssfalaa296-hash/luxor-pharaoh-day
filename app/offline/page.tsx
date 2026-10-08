'use client';

import Link from 'next/link';
import {useEffect,useState} from 'react';

export default function Offline(){
  const [required,setRequired]=useState(false);
  const [target,setTarget]=useState('');

  useEffect(()=>{
    const params=new URLSearchParams(window.location.search);
    setRequired(params.get('required')==='1');
    setTarget(params.get('target')||'');
  },[]);

  return <main className="wrap page offline-page">
    <div className="offline-hero">
      <div className="offline-symbol" aria-hidden="true">⌁</div>
      <span className="eyebrow">{required?'INTERNET REQUIRED / يحتاج اتصالًا':'OFFLINE / بدون اتصال'}</span>
      <h1>{required?'هذه الوظيفة تحتاج الإنترنت':'أنت تعمل بدون إنترنت'}</h1>
      <p className="lead">{required
        ?'الصفحة التي طلبتها تعتمد على اتصال بالشبكة الآن. شغّل بيانات الهاتف أو Wi‑Fi ثم أعد المحاولة.'
        :'LUXOR PHARAOH DAY ما زال يعمل بالأدوات المحفوظة على جهازك. أي معلومة حساسة للوقت يجب إعادة التحقق منها عند عودة الاتصال.'
      }</p>
      {target && <p className="offline-target">الطلب: <code>{target}</code></p>}
      <div className="hero-actions">
        <button className="btn" type="button" onClick={()=>window.location.reload()}>حاول مرة أخرى<br/><small>Try again</small></button>
        <Link className="btn alt" href="/tourist-pocket">جيب السائح<br/><small>Tourist Pocket</small></Link>
      </div>
    </div>

    <section className="offline-tools">
      <div><span className="tag">WORKS OFFLINE</span><h2>المتاح بدون إنترنت</h2><p>هذه الأدوات تعتمد على بيانات محفوظة محليًا، مع تنبيه واضح عندما تصبح المعلومة بحاجة إلى إعادة تحقق.</p></div>
      <div className="offline-tool-grid">
        <Link href="/plan"><strong>خطتي</strong><small>My Plan · حفظ محلي</small></Link>
        <Link href="/tourist-pocket"><strong>جيب السائح</strong><small>Tourist Pocket · الأساسيات</small></Link>
        <Link href="/smart-day"><strong>يومي الذكي</strong><small>Smart Day · تخطيط محلي</small></Link>
        <Link href="/experiences"><strong>استكشف</strong><small>Explore · المحتوى المحفوظ</small></Link>
        <Link href="/family-mode"><strong>وضع العائلة</strong><small>Family Mode</small></Link>
        <Link href="/rescue"><strong>إنقاذ الرحلة</strong><small>Rescue · خطوات بديلة</small></Link>
      </div>
    </section>
  </main>;
}
