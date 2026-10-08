'use client';
import Link from 'next/link';
import {useMemo,useState} from 'react';

const options=[['2h','ساعتان'],['half','نصف يوم'],['full','يوم كامل']] as const;
const descriptions={ '2h':'ركز على معلم واحد قريب مع هامش للانتقال.','half':'معلم رئيسي + نشاط خفيف + وقت مرن.','full':'مسار متوازن مع فواصل للانتقال والراحة.' };
const interests=['آثار وتاريخ','تصوير','النيل','تجربة محلية'];

export default function Now(){
  const [time,setTime]=useState('half');
  const [interest,setInterest]=useState('آثار وتاريخ');
  const [budget,setBudget]=useState('مرن');
  const recommendation=useMemo(()=>{
    const label=options.find(x=>x[0]===time)?.[1]??'نصف يوم';
    return 'ابدأ بـ'+label+'، وركّز على '+interest+'. الميزانية: '+budget+'. اترك هامشًا للانتقال والازدحام، ثم راجع المصدر قبل أي قرار مالي.';
  },[time,interest,budget]);
  return <main className="wrap page">
    <div className="eyebrow">DISCOVER NOW / اكتشف الآن</div>
    <h1>ماذا أفعل الآن؟</h1>
    <p className="sub">ابنِ نقطة بداية في ثوانٍ. الأداة تخطيطية ولا تضمن التوافر أو السعر النهائي.</p>
    <div className="panel planner">
      <div className="field"><label>قد إيه وقتك؟ / Time</label><div className="choice-row">{options.map(([id,label])=><button type="button" key={id} className={time===id?'choice active':'choice'} onClick={()=>setTime(id)}>{label}<small>{descriptions[id]}</small></button>)}</div></div>
      <div className="field"><label>إيه اللي يهمك؟ / Interest</label><div className="choice-row">{interests.map(x=><button type="button" key={x} className={interest===x?'choice active':'choice'} onClick={()=>setInterest(x)}>{x}</button>)}</div></div>
      <div className="field"><label htmlFor="budget">الميزانية / Budget</label><select id="budget" value={budget} onChange={e=>setBudget(e.target.value)}><option>مرن</option><option>اقتصادي</option><option>متوسط</option><option>أريد أقل تكلفة ممكنة</option></select></div>
      <div className="result" aria-live="polite"><strong>اقتراح البداية</strong><p>{recommendation}</p></div>
      <div className="actions"><Link className="btn" href="/experiences">تحقق من المعالم / Check</Link><Link className="btn alt" href="/plan">احفظ خطتي / Save Plan</Link></div>
    </div>
  </main>;
}
