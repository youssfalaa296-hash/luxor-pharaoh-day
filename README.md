 داخل الـ ZIP يوجد 50 ملفًا تشمل:
واجهة Next.js حديثة Mobile-First.
Arabic RTL + English LTR.
الهوية البصرية LUXOR PHARAOH DAY.
KNOW • CHECK • GO.
Price Check.
What Can I Do Now?
Planner / My Day foundation.
Transport.
Before You Buy.
WhatsApp + Vodafone Cash manual-review flow.
PWA + Low-Connection foundation.
SEO / Sitemap / Robots.
Security Headers.
Error / 404.
CI/CD workflow.
Vercel configuration.
Data Model.
Trust & Verification system.
ملفات Privacy وTerms.
بنية قابلة للتوسع للـ AI Planner وSmart Route وPrice Truth Engine وAdmin وغيرها.
📚 والأهم: أضفت دليل التنفيذ الكامل
داخل:
docs/TECHNICAL_MASTER_RUNBOOK-v4.1.md
وفيه المسار من الصفر:
Development → GitHub → CI → Vercel Preview → QA → Production → Custom Domain → التشغيل الفعلي
وكذلك:
أوامر التثبيت والبناء.
متطلبات Node/npm.
Environment Variables.
Git workflow.
GitHub workflow.
Vercel settings.
Domain/DNS.
Security.
Privacy.
Data verification.
Payment boundaries.
QA Matrix.
Release Gates.
Rollback.
Definition of Done.
وأضفت أيضًا:
docs/ARCHITECTURE-v4.1.md
للهندسة والتوسع المستقبلي.
docs/GITHUB-VERCEL-EXECUTION-CHECKLIST-v4.1.md
كقائمة تنفيذ خطوة بخطوة من GitHub حتى Production.
docs/PROJECT-STATUS-v4.1.md
لتوضيح ما تم تجهيزه فعليًا وما لم يتم ادعاء إتمامه.
⚠️ نقطة مهمة جدًا
أنا لم أضع package-lock.json وهميًا ولم أكتب أن الـ Production Build ناجح بدون تشغيله فعليًا في بيئة Node 24+/npm 11+ مناسبة. لذلك النسخة جاهزة للمسار الحقيقي، لكن خطوة الـ lockfile والـ build verification ما زالت Gate فعلية وليست ادعاءً.
fix(ci): repair production build and deployment workflow