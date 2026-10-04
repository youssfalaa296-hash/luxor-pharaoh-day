 # LUXOR PHARAOH DAY 🏺👑

**أبرز تجربة اليوم الفرعوني في الأقصر**

**اعرف • اتأكد • اتحرك / KNOW • CHECK • GO**

منصة رقمية مستقلة ثنائية اللغة لمعلومات زائر الأقصر، مبنية للسرعة على الهاتف، وتركّز على المصدر، تاريخ المراجعة، وحالة المعلومة قبل اتخاذ القرار.

## الإنتاج الفعلي

المسار المعتمد:

`GitHub → Node 24.21.0 → npm 11.19.0 → package-lock.json → npm ci → Preflight → Build → Vercel → Production QA`

لا يوجد `package-lock.json` اصطناعي داخل الحزمة. يجب أن يُنشأ بواسطة npm 11.19.0 على Node 24.21.0 ثم يُحفظ في جذر المستودع.

## أوامر التشغيل

```bash
npm ci
npm run preflight
npm run verify
npm run build
npm start
```

## البيانات

الأسعار وساعات الزيارة الحالية في `lib/data.ts` مرتبطة بصفحات منشورة على موقع وزارة السياحة والآثار المصرية، وتحتوي على تاريخ مراجعة ورابط المصدر. المعلومات قابلة للتغيير ولا تُعامل كضمان دائم.

## الحالة

**Production Candidate — verification required**

لا تتحول الحالة إلى Production-Verified إلا بعد نجاح CI وVercel وQA على نفس الـcommit.

## الملفات المرجعية

- `docs/TECHNICAL-MASTER-REPORT.md`
- `docs/DATA-VERIFICATION-REPORT.md`
- `docs/DEPLOYMENT-RUNBOOK.md`
- `docs/QA-REPORT.md`
- `docs/SECURITY-CONTROL-REPORT.md`
- `docs/LOCKFILE-BOOTSTRAP-REPORT.md`
- `RELEASE-CHECKLIST.md`
LUXOR PHARAOH DAY 🏺👑

Master Production Specification — النسخة الموحدة المعتمدة

1. هوية المنتج

اسم المشروع: LUXOR PHARAOH DAY 🏺👑

المفهوم:
منتج سياحي رقمي حقيقي يساعد الزائر على قضاء يوم عملي في الأقصر بأسلوب واضح وسريع، من اكتشاف الأماكن إلى التحقق من المعلومات ثم تنفيذ الخطة.

الوصف:
منتج سياحي ثنائي اللغة من البداية، سريع، واضح، Mobile-First، ويحل مشاكل السائح بدل أن يضيف إليه خطوات وتعقيدًا.

العبارة الأساسية:

أبرز تجربة اليوم الفرعوني في الأقصر

المفهوم:
A Day in Luxor with the Pharaohs

ممنوع استخدام:
Kemet / كمت

---

2. الفلسفة الأساسية

KNOW → CHECK → GO

اعرف → اتأكد → اتحرك

- KNOW / اعرف: اكتشف ماذا يمكنك أن تفعل.
- CHECK / اتأكد: تحقق من السعر والمعلومة والمصدر وتاريخ المراجعة.
- GO / اتحرك: اعرف كيف تصل وما الخطوة التالية.

---

3. تجربة المستخدم الأساسية

المسار الموحد:

Discover / اكتشف
↓
Select / حدد
↓
Filter / صفِّ
↓
Check / تحقق
↓
Build My Day / ابنِ يومي
↓
Go / اتحرك
↓
Save / احفظ
↓
Help / مساعدة

---

4. الثنائية اللغوية

التطبيق ثنائي اللغة من البداية.

العناصر الأساسية تظهر بالعربية والإنجليزية معًا، وليس الاعتماد فقط على زر تغيير اللغة.

أمثلة:

تحديد المعالم الرئيسية
Select Main Landmarks

تصفية المعالم
Filter Landmarks

اكتشف اليوم
Discover Today

أنشئ خطتك
Build Your Plan

تحقق من المعلومات
Check Information

ابدأ رحلتك
Start Your Journey

---

5. الميزة الرئيسية — ماذا أفعل الآن؟

ماذا أفعل الآن؟

What Can I Do Now?

السائح يحدد:

- الوقت المتاح:
  - ساعتان
  - نصف يوم
  - يوم كامل
- موقعه أو نقطة البداية.
- الميزانية.
- الاهتمامات:
  - آثار
  - تاريخ
  - تصوير
  - النيل
  - تجربة محلية
- مستوى المجهود.
- هل معه أطفال؟
- هل يريد مكانًا قريبًا؟
- هل يريد تجنب الزحام؟
- هل يحتاج وسيلة انتقال؟

ثم يحصل على خطة يوم عملية بدل عرض عشرات النتائج المربكة.

---

6. اكتشاف وتصفية المعالم

البحث والتصفية حسب ما يتوفر له مصدر موثوق:

- الفئة.
- الموقع.
- الوقت.
- الميزانية.
- الاهتمامات.
- المسافة.
- مناسب للعائلات.
- إمكانية الوصول عند توفر معلومات موثقة.
- حالة المكان الحالية عند توفر بيانات موثوقة.
- وسيلة الانتقال.
- الوقت المتبقي.

---

7. طبقة الثقة والتحقق

كل معلومة قابلة للتحقق يجب أن تكون واضحة الحالة:

Verified / موثّق

المعلومة تم التحقق منها وفق مصدر محدد.

Estimated / تقديري

المعلومة تقديرية وليست قيمة مؤكدة.

Needs Review / بحاجة إلى مراجعة

المعلومة تحتاج إلى تحديث أو تحقق جديد.

ويظهر قدر الإمكان:

- Source / المصدر
- Last Reviewed / آخر مراجعة
- Price Status / حالة السعر
- Verification Status / حالة التحقق
- Visitor Report / بلاغ الزائر

ممنوع اختراع الأسعار أو أرقام الاتصال أو بيانات التشغيل.

---

8. Visitor Help — مساعدة الزائر

النظام يعالج المشاكل العملية التي قد تواجه السائح:

- لا أعرف إلى أين أذهب.
- لا أعرف ماذا أفعل خلال الوقت المتبقي.
- لا أعرف هل السعر ما زال صحيحًا.
- لا أعرف كيف أصل.
- ضاع مني ترتيب اليوم.
- أريد تغيير الخطة.
- المكان مغلق أو تغيرت المعلومة.
- أحتاج وسيلة انتقال.
- أريد حفظ الخطة بدون إنشاء حساب.
- الإنترنت ضعيف.

---

9. My Plan / خطتي

السائح يستطيع:

- إنشاء خطة.
- إعادة ترتيب الخطة.
- حذف وإضافة أماكن.
- حفظ الخطة.
- تعديل الخطة.
- الاحتفاظ بها محليًا على الجهاز قدر الإمكان.
- استخدام المعلومات الأساسية عند ضعف الإنترنت.
- مشاركة الخطة عند توفر الإمكانية.

لا يتم إجبار السائح على إنشاء حساب لحفظ الخطة الأساسية.

---

10. Offline / العمل دون اتصال

يتم توفير:

Your plan works offline
خطتك تعمل دون اتصال

قدر الإمكان من خلال:

- Local Storage / Local Persistence.
- PWA Cache.
- حفظ الخطة محليًا.
- توفير المعلومات الأساسية المخزنة مسبقًا.
- تصميم مناسب للاتصال الضعيف.

مع عدم الادعاء بأن البيانات الديناميكية محدثة أثناء انقطاع الإنترنت.

---

11. التصميم

التصميم:

- Mobile-First.
- App-Like.
- سريع.
- واضح.
- حديث.
- احترافي.
- غير معتمد على صفحة طويلة تشبه Facebook Feed.

العناصر البصرية

- Hero بصري متحرك.
- Animated Scene.
- Interactive Landmark Cards.
- Micro-interactions.
- Smooth Transitions.
- Skeleton Loading.
- Loading States.
- Empty States.
- Error States.
- Responsive Layout.
- صور محسنة.
- Lazy Loading عند الحاجة.
- تحسين الأداء.

الحركة جزء من هوية المنتج وليست مؤثرات عشوائية.

---

12. Accessibility & Performance

يجب دعم:

"prefers-reduced-motion"

بحيث يستطيع المستخدم تقليل أو إيقاف الحركة.

كما يجب تجنب:

- الحركات الضخمة.
- الصور الثقيلة غير الضرورية.
- التأثيرات التي تؤخر تحميل الصفحة.
- أي Animation يؤثر على الأداء أو الاستخدام.

---

13. أقسام المنتج

الهيكل الأساسي:

1. Home
2. Explore
3. Price Check
4. What Can I Do Now?
5. Transport
6. Before You Buy
7. My Luxor Quest
8. Help
9. Trust & Transparency
10. Report an Issue
11. FAQ
12. Privacy
13. Terms
14. Advanced

---

14. البنية التقنية المطلوبة

المشروع الحقيقي يجب أن يحتوي على بنية إنتاجية واضحة، بما يشمل:

luxor-pharaoh-day/
├── package.json
├── package-lock.json
├── README.md
├── app/
├── components/
├── lib/
├── public/
├── scripts/
├── .github/
│   └── workflows/
├── docs/
└── vercel.json

---

15. بيئة التشغيل المعتمدة

Node.js

"24.21.0"

npm

"11.19.0"

Package Manager

npm

التثبيت الإنتاجي

npm ci

ولا يتم اعتبار Lockfile حقيقيًا إلا إذا تم إنشاؤه والتحقق منه بالبيئة المعتمدة.

---

16. package-lock.json

يجب إنشاء:

"package-lock.json"

حقيقي ومتوافق مع:

- "package.json"
- Node.js 24.21.0
- npm 11.19.0

ثم اختباره باستخدام:

npm ci

ولا يتم استخدام Lockfile وهمي أو يدوي غير ناتج عن Dependency Resolution حقيقي.

---

17. بوابة التحقق

المسار:

npm ci
↓
npm run preflight
↓
npm run verify
↓
npm run typecheck
↓
npm run lint
↓
npm run build

ويجب معالجة أي:

- TypeScript Error
- ESLint Error
- Next.js Error
- Dependency Error
- Build Error
- Runtime Error

قبل الانتقال للمرحلة التالية.

---

18. GitHub

المستودع المعتمد:

"youssfalaa296-hash/luxor-pharaoh-day"

الفرع الأساسي:

"main"

ويجب أن يحتوي المستودع النهائي على:

- Source Code الحقيقي.
- package.json.
- package-lock.json.
- CI/CD.
- Documentation.
- Release Documentation.
- Security Documentation.
- Verification Scripts.

---

19. GitHub Actions

يجب أن يتحقق CI من:

- Node 24.21.0.
- npm 11.19.0.
- npm ci.
- Preflight.
- Verify.
- TypeScript.
- ESLint.
- Production Build.

وأي فشل في Critical/High Gate يمنع الإطلاق.

---

20. Vercel

المشروع:

"luxor-pharaoh-day"

الإطلاق يكون من خلال Vercel بعد نجاح مراحل التحقق.

المسار:

GitHub → Vercel Preview → QA → Production

ولا يكفي أن يكون Deployment في حالة "READY" وحدها لإثبات أن الإصدار "VERIFIED".

---

21. Environment Variables

يتم تقسيمها إلى:

Public

مثل:

NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_WHATSAPP_NUMBER
NEXT_PUBLIC_CONTACT_EMAIL
NEXT_PUBLIC_INSTAGRAM_URL
NEXT_PUBLIC_TIKTOK_URL
NEXT_PUBLIC_YOUTUBE_URL
NEXT_PUBLIC_X_URL

Secret

عند الحاجة الفعلية فقط:

DATABASE_URL
API_SECRET
AUTH_SECRET
ADMIN_SECRET
GOOGLE_MAPS_API_KEY
SENTRY_AUTH_TOKEN
SENTRY_DSN

لا يتم وضع قيم وهمية.

القيم الحقيقية الخاصة بالحسابات أو الخدمات يتم إدخالها بواسطة المالك أو المسؤول المخول.

---

22. Security

يجب تنفيذ:

- Secret Scan.
- فحص Git History عند الحاجة.
- مراجعة ".env.example".
- عدم وضع Secrets داخل Source Code.
- عدم طباعة Secrets في Logs.
- فصل Preview عن Production.
- مراجعة Public vs Secret.
- تدوير أي Secret مكشوف.
- توثيق المخاطر والإجراءات.

---

23. QA

Preview QA

يتم اختبار:

- الصفحة الرئيسية.
- Navigation.
- الأزرار.
- الروابط.
- الهاتف.
- Desktop.
- العربية.
- الإنجليزية.
- الصور.
- الحركة.
- Reduced Motion.
- Loading.
- Empty States.
- Error States.
- KNOW → CHECK → GO.
- Discover.
- Filters.
- What Can I Do Now?
- Build My Day.
- Save.
- Help.

ثم:

Production QA

يتم تكرار الاختبارات على الإنتاج الحقيقي.

---

24. Deployment Commit Matching

يجب أن تكون المطابقة:

Reviewed SHA
=
GitHub SHA
=
Vercel Preview SHA
=
Vercel Production SHA

أي تغيير في الكود بعد QA يعني أن الاختبارات يجب أن تعاد على الـCommit الجديد.

---

25. من يعتمد المطابقة؟

Development

ينفذ ويحدد الـCommit المرشح.

QA

يتحقق من الاختبارات والـPreview.

Vercel/GitHub

يوفران الأدلة التقنية.

Owner

يعتمد الأمور التجارية والمحتوى والبيانات الخاصة بالمشروع.

Release Reviewer

يعتمد المطابقة النهائية للـCommit بعد مراجعة الأدلة.

ولا يتم إغلاق المطابقة بدون:

- GitHub SHA.
- Preview Deployment ID/SHA.
- Production Deployment ID/SHA.
- Build Evidence.
- QA Evidence.
- Reviewer Confirmation.

---

26. Release Gates

يجب اجتياز:

1. Repository
2. Dependencies & Lockfile
3. Security & Environment
4. Preflight
5. Verify
6. TypeScript
7. ESLint
8. Production Build
9. GitHub Actions
10. Vercel Preview
11. Browser QA
12. Production Deployment
13. Production QA
14. Release Acceptance

أي Critical/High:

"FAIL" أو "BLOCKED"

يمنع الانتقال إلى "VERIFIED".

---

27. حالات الإصدار المعتمدة

NOT_VERIFIED
READY_FOR_RELEASE
RELEASED
VERIFIED
ROLLED_BACK
BLOCKED
REJECTED

ولا نستخدم تسميات غير معتمدة مثل:

"PRODUCTION-CANDIDATE"

كحالة نهائية.

---

28. حالات نتائج المراجعة

PASS
FAIL
BLOCKED
FIXED
VERIFIED
NOT APPLICABLE

كل بند يجب أن يحتوي على:

- Requirement
- Action
- Expected Result
- Actual Result
- Evidence
- Responsible
- Commit SHA
- Status
- Reviewer
- Verification Evidence

---

29. مستندات المشروع

يجب تجهيز:

REVIEW-REPORT.md
ACTION-ITEMS.md
SECURITY-REVIEW.md
ENVIRONMENT-MATRIX.md
QA-REPORT.md
RELEASE-CHECKLIST.md

ومستندات تقنية وتشغيلية إضافية حسب الحاجة:

TECHNICAL-MASTER-REPORT.md
DATA-VERIFICATION-REPORT.md
DEPLOYMENT-RUNBOOK.md
SECURITY-CONTROL-REPORT.md
LOCKFILE-BOOTSTRAP-REPORT.md

---

30. Action Items

كل مشكلة تسجل بهذا الشكل:

ID: LPD-XXX
Owner: المسؤول
Severity: Critical / High / Medium / Low
Status: Open / In Progress / Fixed / Verified / Blocked
Finding: المشكلة
Evidence: الدليل
Required Action: الإجراء المطلوب
Expected Output: المخرج المتوقع
Validation: طريقة التحقق
Commit: SHA
Verified By: المراجع
Verification Evidence: دليل الإغلاق

---

31. استعادة المصدر الحالية

الوضع الحالي الذي يجب التعامل معه:

- "main" ما زال يحتوي على الإصدار "5.2.1".
- مصدر التطبيق الأساسي موجود داخل Production Candidate ZIP.
- المصدر ليس مستعادًا بالكامل مباشرة في جذر "main".
- "package-lock.json" الحقيقي غير موجود في المسار المطلوب.
- لذلك لا يتم اعتبار المشروع "VERIFIED".

الإجراء:

Source Restoration → Validation → Commit → CI → Preview → QA

---

32. قاعدة عدم الادعاء

لا يتم اعتبار أي شيء منفذًا لمجرد وجود:

- Documentation.
- Checklist.
- README.
- Issue.
- PR.
- Deployment READY.

يجب وجود دليل تنفيذي حقيقي.

ولا يتم الادعاء بوجود:

- Secret.
- API Key.
- Domain.
- Legal Registration.
- License.
- Store Account.
- Payment Account.
- Contract.
- Owner Approval

ما لم يتم توفيره أو إثباته فعليًا.

---

33. البيانات السياحية

مصدر البيانات يجب أن يكون موثقًا.

لكل معلومة مهمة:

Source
Last Reviewed
Verification Status
Price Status

وعند عدم توفر تحقق حديث:

Needs Review / بحاجة إلى مراجعة

بدل تقديمها كحقيقة مؤكدة.

---

34. التواصل

يتم دعم قنوات الاتصال الرسمية التي يملكها المشروع فقط، مثل:

- WhatsApp
- Instagram
- TikTok
- YouTube
- X
- Email

ولا يتم اختراع حسابات أو روابط غير موجودة.

---

35. QR / Deep Links / Sharing

عند توفر البنية المناسبة:

- QR Codes.
- Deep Links.
- Shareable Plans.
- مشاركة الخطة.
- روابط مباشرة للأماكن أو الخطط.

---

36. Mobile App — المرحلة التالية

بعد استقرار Web Production:

Android

Android Build
↓
Google Play Console
↓
Internal Testing
↓
Closed Testing
↓
Production

iOS

iOS Build
↓
App Store Connect
↓
TestFlight
↓
App Store Review
↓
Production

ولا يعتبر نشر تطبيق الهاتف منتهيًا بمجرد بناء الكود.

يتطلب:

- حساب المتجر.
- بيانات المالك.
- بيانات التطبيق.
- Privacy Policy.
- Contact Information.
- Store Assets.
- متطلبات التحقق.
- موافقات المنصة.
- أي متطلبات اختبار تفرضها المنصة.

---

37. مسؤوليات المالك

المالك مسؤول عن المعلومات التي لا يجوز اختراعها:

- البيانات القانونية.
- بيانات النشاط التجاري.
- التراخيص.
- الحسابات.
- بيانات الاتصال الرسمية.
- Secrets.
- Domain ownership.
- Store accounts.
- المحتوى النهائي.
- العقود.
- موافقات النشر.

---

38. Release Acceptance

قبل "VERIFIED" يجب أن يقوم Release Reviewer بمراجعة:

- Source Restoration.
- Dependencies.
- Lockfile.
- Security.
- Environment.
- CI.
- Build.
- Preview.
- Browser QA.
- Production Deployment.
- Production QA.
- Commit Matching.
- Open/Blocked Issues.

ثم يتم تسجيل:

Reviewed Commit SHA
Production Deployment ID
Production URL
QA Result
Security Result
Release Acceptance
Reviewer
Date
Final RELEASE_STATUS

---

39. معيار VERIFIED النهائي

لا تصبح النسخة:

VERIFIED

إلا إذا تحقق الآتي بالكامل:

Real Source
+
Real package-lock.json
+
npm ci
+
Preflight PASS
+
Verify PASS
+
TypeScript PASS
+
ESLint PASS
+
Production Build PASS
+
GitHub Actions PASS
+
Vercel Preview PASS
+
Browser QA PASS
+
Production Deployment PASS
+
Production QA PASS
+
Commit Matching CONFIRMED
+
Security Review PASS
+
Release Acceptance APPROVED

والقاعدة النهائية:

«VERIFIED = التنفيذ الحقيقي + الاختبار الحقيقي + النشر الحقيقي + Production QA + مطابقة الـCommit + أدلة قابلة للتدقيق.»

---

40. المسار النهائي الكامل

LUXOR PHARAOH DAY 🏺👑
        ↓
Source Restoration
        ↓
GitHub / main
        ↓
Node.js 24.21.0
        ↓
npm 11.19.0
        ↓
Real package-lock.json
        ↓
npm ci
        ↓
Preflight
        ↓
Verify
        ↓
TypeScript
        ↓
ESLint
        ↓
Production Build
        ↓
GitHub Actions
        ↓
Vercel Preview
        ↓
Browser QA
        ↓
Production Deployment
        ↓
Production QA
        ↓
Deployment Commit Matching
        ↓
Release Acceptance
        ↓
Release Reviewer Approval
        ↓
VERIFIED
        ↓
Android / iOS Release Track

هذه هي القائمة الموحدة المرجعية للمشروع، وأي تنفيذ لاحق سنقيسه عليها بدل إنشاء مسارات أو مواصفات منفصلة.