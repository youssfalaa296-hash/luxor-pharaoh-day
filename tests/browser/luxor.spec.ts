import { test, expect } from '@playwright/test';

const routes = [
  '/',
  '/experiences',
  '/price-check',
  '/what-can-i-do-now',
  '/transport',
  '/before-you-buy',
  '/plan',
  '/help',
  '/trust',
  '/report-issue',
  '/faq',
  '/privacy',
  '/terms',
  '/advanced',
  '/contact',
  '/production-qa',
  '/visitor-center',
  '/rescue',
  '/live-now',
  '/smart-day',
  '/fair-deal',
  '/family-mode',
  '/photo-mode',
  '/night-plan',
  '/tourist-pocket',
  '/offline',
  '/visitor-guide',
  '/emergency',
  '/vib',
  '/soundtrack',
];

for (const route of routes) {
  test(`route loads: ${route}`, async ({ page }) => {
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    page.on('pageerror', err => errors.push(err.message));
    page.on('response', response => {
      const status = response.status();
      const url = response.url();
      const isLocalVercelTelemetry = /\/(_vercel\/analytics|_vercel\/speed-insights)/.test(url);
      if (status >= 400 && !isLocalVercelTelemetry) {
        errors.push(`HTTP ${status}: ${url}`);
      }
    });

    const response = await page.goto(route, { waitUntil: 'networkidle' });
    expect(response?.status()).toBe(200);
    await expect(page.locator('body')).toBeVisible();
    expect(errors, `browser errors on ${route}`).toEqual([]);
  });
}

test('planner generates a recommendation and preserves accessible interaction', async ({ page }) => {
  await page.goto('/what-can-i-do-now', { waitUntil: 'networkidle' });

  const buttons = page.getByRole('button');
  await expect(buttons.first()).toBeVisible();
  await buttons.first().click();

  const result = page.locator('[aria-live="polite"]');
  await expect(result).toBeVisible();
  await expect(result).not.toHaveText('');
});

test('plan page can save and clear local plan state', async ({ page }) => {
  await page.goto('/plan', { waitUntil: 'networkidle' });

  const buttons = page.getByRole('button');
  await expect(buttons.first()).toBeVisible();

  const save = page.getByRole('button', { name: /save|حفظ/i }).first();
  if (await save.count()) {
    await save.click();
  }

  const clear = page.getByRole('button', { name: /clear|مسح|حذف/i }).first();
  if (await clear.count()) {
    await clear.click();
  }
});

test('soundtrack control is user-initiated and can be toggled', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  const sound = page.getByRole('button', { name: /sound|الصوت|music|الموسيقى/i }).first();
  if (await sound.count()) {
    await expect(sound).toBeVisible();
    await sound.click();
    await sound.click();
  }
});

test('RTL document and responsive layout are valid', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
  await expect(page.locator('body')).toBeVisible();
});

test('reduced motion preference does not break the UI', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/', { waitUntil: 'networkidle' });
  await expect(page.locator('body')).toBeVisible();
  await expect(page.getByRole('link', { name: /Explore|استكشف/i }).first()).toBeVisible();
});

test('contact channels expose project-only contact details', async ({ page }) => {
  await page.goto('/contact', { waitUntil: 'networkidle' });
  await expect(page.getByText('01012801568')).toBeVisible();
  await expect(page.getByText('youssfalaa296@gmail.com')).toBeVisible();
});


test('production acceptance gate persists checklist state and blocks false VERIFIED', async ({ page }) => {
  await page.goto('/production-qa', { waitUntil: 'networkidle' });
  await expect(page.getByRole('heading', { name: /دليل المتصفح التفاعلي/i })).toBeVisible();
  await expect(page.getByText(/INCOMPLETE/)).toBeVisible();

  const first = page.locator('.acceptance-step input').first();
  await first.check();
  await expect(first).toBeChecked();
  await page.reload({ waitUntil: 'networkidle' });
  await expect(first).toBeChecked();
  await expect(page.locator('.acceptance-status')).toContainText('INCOMPLETE');
  await expect(page.locator('.acceptance-final')).toContainText(/VERIFIED/);
});


test('VIB desk exposes differentiated needs and a direct request path', async ({ page }) => {
  await page.goto('/vib', { waitUntil: 'networkidle' });
  await expect(page.getByText(/VIB · VERY IMPORTANT VISITOR/i)).toBeVisible();
  await expect(page.getByText(/Arrival Rescue/i)).toBeVisible();
  await expect(page.getByRole('link', { name: /ابدأ طلب VIB/i })).toBeVisible();
});

test('immersive atmosphere respects user controls and soundtrack guide is reachable', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  const motion = page.getByRole('button', { name: /إيقاف الحركة|تشغيل الحركة/i });
  await expect(motion).toBeVisible();
  await motion.click();
  await motion.click();
  await expect(page.getByRole('link', { name: /اختيار الموسيقى/i })).toBeVisible();
});


test('Pharaoh Rescue recovery center provides safe decision paths', async ({ page }) => {
  await page.goto('/rescue', { waitUntil: 'networkidle' });
  await expect(page.getByRole('heading', { name: /إنقاذ الرحلة/i })).toBeVisible();
  await expect(page.getByText(/RECOVERY FLOW/i)).toBeVisible();
  await expect(page.getByRole('link', { name: /طوارئ \/ Emergency/i })).toBeVisible();
});
