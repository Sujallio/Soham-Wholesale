import './globals.css';
import Providers from './providers';
import Navbar from '@/components/site/navbar';
import Footer from '@/components/site/footer';
import FloatingWhatsApp from '@/components/site/floating-whatsapp';

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  ),
  title: 'Soham Garment — Garment Manufacturing & Wholesale, Ahmedabad',
  description:
    'Soham Garment is a garment manufacturer and wholesale supplier based in Ahmedabad, Gujarat, India — supplying quality jeans, formal pants and formal shirts to retailers and fashion businesses.',
  keywords: [
    'garment manufacturer Ahmedabad',
    'wholesale clothing supplier Gujarat',
    'jeans manufacturer India',
    'wholesale shirts',
    'formal shirt wholesale',
    'Soham Garment',
  ],
  openGraph: {
    title: 'Soham Garment — Garment Manufacturing & Wholesale, Ahmedabad',
    description:
      'Manufacturer and wholesale supplier of quality garments based in Ahmedabad, Gujarat, India.',
    type: 'website',
  },
};

export const viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Providers>
          <Navbar />
          <main className="min-h-[60vh]">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </Providers>
      </body>
    </html>
  );
}
