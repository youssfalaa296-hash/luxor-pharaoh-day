'use client';

import {useEffect,useState} from 'react';

export default function AtmosphereLayer(){
  const [active,setActive]=useState(true);
  useEffect(()=>{setActive(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)},[]);
  return <>
    <div className={active?'atmosphere active':'atmosphere'} aria-hidden="true">
      <span className="atmosphere-orb orb-1"/>
      <span className="atmosphere-orb orb-2"/>
      <span className="atmosphere-dust dust-1"/>
      <span className="atmosphere-dust dust-2"/>
      <span className="atmosphere-dust dust-3"/>
    </div>
    <button className="atmosphere-toggle" type="button" onClick={()=>setActive(v=>!v)} aria-label={active?'إيقاف الحركة':'تشغيل الحركة'} aria-pressed={active}>{active?'✦':'○'}</button>
  </>;
}