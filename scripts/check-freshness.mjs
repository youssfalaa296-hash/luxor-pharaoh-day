import fs from 'node:fs';

const sites = JSON.parse(fs.readFileSync('data/official-sites.json', 'utf8'));
const maxAgeDays = 14;
const now = Date.now();
const stale = sites.filter((s) => {
  const t = Date.parse(s.lastReviewed);
  return !Number.isFinite(t) || ((now - t) / 86400000) > maxAgeDays;
});

console.log(JSON.stringify({
  total: sites.length,
  stale: stale.map((s) => ({ id: s.id, lastReviewed: s.lastReviewed })),
  maxAgeDays,
}, null, 2));

if (stale.length) process.exitCode = 1;
