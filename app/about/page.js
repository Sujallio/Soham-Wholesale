import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { whatsappUrl } from '@/lib/whatsapp';
import Reveal from '@/components/site/reveal';

export const metadata = {
  title: 'About — Soham Garment',
  description:
    'Soham Garment is a garment manufacturer and wholesale supplier based in Ahmedabad, Gujarat — supplying quality apparel to retailers, clothing stores and fashion businesses.',
};

const ABOUT_HERO =
  'https://images.unsplash.com/photo-1572797988761-19ef379d5091?auto=format&fit=crop&w=1600&q=70';
const WHO_IMG =
  'https://images.unsplash.com/photo-1560796952-f1c9b838544c?auto=format&fit=crop&w=1000&q=70';

const SERVE = [
  'Retailers',
  'Clothing Stores',
  'Wholesale Buyers',
  'Fashion Businesses',
  'Multi-Brand Stores',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[64vh] items-center overflow-hidden grain">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={ABOUT_HERO}
          alt="Apparel wholesale"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-black/45" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl border-l-2 border-white/70 pl-5 slide-up sm:pl-8">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-white/50" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white">
                About Soham Garment
              </p>
            </div>
            <h1 className="mt-6 font-serif text-4xl font-medium leading-[1.08] text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.7)] sm:text-5xl lg:text-7xl">
              Manufacturing Quality.{' '}
              <span className="italic text-white/90">Supplying Confidence.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Who We Are
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium text-foreground sm:text-4xl">
                A garment manufacturer built for wholesale
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Soham Garment is a garment manufacturing and wholesale supply
                  company based in Ahmedabad, Gujarat. We produce a focused
                  catalogue of jeans, formal pants and formal shirts under one
                  roof.
                </p>
                <p>
                  Our focus is wholesale. We work directly with retailers,
                  clothing stores and fashion businesses, supplying garments in
                  bulk with a structured quality process behind every batch —
                  so our partners can stock with confidence.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-none bg-secondary">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={WHO_IMG}
                  alt="Sewing factory floor"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do + Who We Serve */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                What We Do
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium text-foreground sm:text-4xl">
                Manufacture and supply quality garments in bulk
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                From fabric selection to final packaging, every step is handled
                in-house at our Ahmedabad unit. This allows us to maintain
                consistent quality across batches and keep repeat availability
                for our wholesale partners throughout the season.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We supply across categories — so retailers can source a
                coordinated range from a single, dependable supplier.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Who We Serve
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium text-foreground sm:text-4xl">
                Built for businesses that stock garments
              </h2>
              <ul className="mt-8 space-y-5">
                {SERVE.map((item, idx) => (
                  <li key={item} className="group flex items-baseline gap-5 border-b border-border pb-5 transition-colors hover:border-foreground/40">
                    <span className="font-serif text-xl font-medium text-muted-foreground">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="font-serif text-2xl font-medium text-foreground">
                      {item}
                    </span>
                    <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-28">
          <Reveal>
            <h2 className="mx-auto max-w-2xl font-serif text-3xl font-medium text-foreground sm:text-5xl lg:text-6xl">
              Let&apos;s supply your store
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Browse the catalogue or reach out on WhatsApp to discuss wholesale
              pricing, availability and category mix for your business.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/products"
                className="group inline-flex items-center justify-center gap-2 bg-foreground px-8 py-4 text-xs font-semibold uppercase tracking-widest text-background transition-all hover:gap-3"
              >
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={whatsappUrl('Hello Soham Garment, I would like to discuss wholesale supply for my store.')}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 border border-foreground px-8 py-4 text-xs font-semibold uppercase tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                Contact on WhatsApp
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
