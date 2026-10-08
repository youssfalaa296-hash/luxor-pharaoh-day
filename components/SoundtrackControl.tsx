'use client';

import {useRef,useState} from 'react';

export default function SoundtrackControl(){
  const [on,setOn]=useState(false);
  const ctx=useRef<AudioContext|null>(null);
  const nodes=useRef<OscillatorNode[]>([]);
  const toggle=()=>{
    if(on){nodes.current.forEach(n=>n.stop());nodes.current=[];ctx.current?.close();ctx.current=null;setOn(false);return;}
    const AudioCtx=window.AudioContext||((window as unknown as {webkitAudioContext:typeof AudioContext}).webkitAudioContext);
    const ac=new AudioCtx(); ctx.current=ac;
    const master=ac.createGain(); master.gain.value=.025; master.connect(ac.destination);
    [110,164.81,220].forEach((freq,i)=>{const o=ac.createOscillator();o.type='sine';o.frequency.value=freq;o.detune.value=i*3;o.connect(master);o.start();nodes.current.push(o);});
    setOn(true);
  };
  return <button type="button" className="sound-control" onClick={toggle} aria-pressed={on} aria-label="تشغيل أو إيقاف أجواء صوتية فرعونية">{on?'◼ إيقاف الأجواء':'♫ تشغيل الأجواء'}</button>;
}
