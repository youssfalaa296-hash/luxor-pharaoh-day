import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: 'LUXOR PHARAOH DAY 🏺👑',
  description: 'أبرز تجربة اليوم الفرعوني في الأقصر - A Day in Luxor with the Pharaohs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
