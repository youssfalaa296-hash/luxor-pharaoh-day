import Link from 'next/link';
import ExperienceCard from '@/components/ExperienceCard';
import SoundtrackControl from '@/components/SoundtrackControl';

export default function Home(){
  return <main className="wrap">
    <section className="hero">
      <div>
        <div className="eyebrow">A DAY IN LUXOR WITH THE PHARAOHS</div>
        <h1>اعرف.<br/><span>اتأكد.</span><br/>اتحرك.</h1>
        <p className="lead">منصة مستقلة تساعدك على فهم الأقصر، التحقق من المعلومات، بناء يومك، والوصول للدعم العملي عند الحاجة — بالعربي والإنجليزي.</p>
        <div className="actions">
          <Link className="btn" href="/what-can-i-do-now">ماذا أفعل الآن؟ / What Can I Do Now?</Link>
          <Link className="btn alt" href="/experiences">استكشف المعالم / Explore</Link>
        </div>
        <div className="trust"><b>✓ مصادر واضحة</b><b>✓ عربي + English</b><b>✓ بدون تسجيل إجباري</b></div>
      </div>
      <div className="seal">
        <img src="/logo.svg" alt="LUXOR PHARAOH DAY logo" width="220" height="220"/>
        <h2>ثقة قبل القرار</h2>
        <p>Verified · Estimated · Needs Review</p>
        <p>كل معلومة مهمة لها مصدر وتاريخ مراجعة.</p>
      </div>
    </section>

    <section className="section">
      <h2>احتياجك له طريق</h2>
      <p className="sub">من التخطيط قبل الوصول إلى الدعم أثناء الرحلة، نبدأ بالمعلومة الموثقة ثم نحدد الخطوة التالية.</p>
      <div className="grid">
        <ExperienceCard title="What Can I Do Now?" ar="ماذا أفعل الآن؟" desc="اختَر وقتك واهتماماتك وميزانيتك للحصول على نقطة بداية عملية." href="/what-can-i-do-now"/>
        <ExperienceCard title="Price Check" ar="تحقق من الأسعار" desc="راجع السعر المنشور ومصدره وتاريخ المراجعة قبل أن تعتمد عليه." href="/price-check"/>
        <ExperienceCard title="Before You Buy" ar="قبل ما تشتري" desc="قائمة تحقق قبل أي اتفاق أو دفع، مع توضيح ما هو مؤكد وما يحتاج مراجعة." href="/before-you-buy"/>
      </div>
    </section>

    <section className="section">
      <h2>دعم الرحلة بالكامل</h2>
      <p className="sub">يمكن طلب مساعدة في المعلومات، التخطيط، التواصل، اكتشاف الخيارات، الإبلاغ عن مشكلة، أو إيجاد الخطوة المناسبة. أي خدمة مدفوعة أو منظمة تُفعّل فقط بعد التحقق من إمكانية تقديمها قانونيًا وتشغيليًا وبشكل واضح للمستخدم.</p>
      <div className="grid">
        <div className="card"><span className="tag">PLAN</span><h3>خطتك</h3><p>ابنِ خطة يوم واحفظها على جهازك بدون إنشاء حساب إجباري.</p><Link className="btn alt" href="/plan">My Plan</Link></div>
        <div className="card"><span className="tag">HELP</span><h3>مساعدة مباشرة</h3><p>للاستفسارات أو الدعم العملي، تواصل عبر القنوات المنشورة رسميًا.</p><Link className="btn alt" href="/contact">تواصل / Contact</Link></div>
        <div className="card"><span className="tag">TRUST</span><h3>ثقة وشفافية</h3><p>لا نعرض جهة حكومية أو ترخيصًا أو سعرًا مضمونًا بدون دليل مناسب.</p><Link className="btn alt" href="/trust">Trust & Transparency</Link></div>
      </div>
    </section>

    <section className="section">
      <h2>خط سير الزائر</h2>
      <div className="grid">
        <div className="card"><span className="tag">01 · KNOW</span><h3>اعرف</h3><p>ماذا يوجد؟ وماذا يناسب وقتك واهتماماتك؟</p></div>
        <div className="card"><span className="tag">02 · CHECK</span><h3>اتأكد</h3><p>المصدر، تاريخ المراجعة، نوع السعر، وحالة التحقق.</p></div>
        <div className="card"><span className="tag">03 · GO</span><h3>اتحرك</h3><p>خذ الخطوة التالية بوضوح، بدون وعود غير مؤكدة.</p></div>
      </div>
    </section>
    <SoundtrackControl/>
  </main>
}
