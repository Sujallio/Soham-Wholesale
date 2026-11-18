import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Factory, Package, ShieldCheck, Layers } from 'lucide-react';
import ProductCard from '@/components/site/product-card';
import Reveal from '@/components/site/reveal';
import {
  CATEGORIES,
  getFeaturedProducts,
  getCategoryProductCount,
} from '@/lib/data/products';
import { whatsappUrl } from '@/lib/whatsapp';

const HERO_IMG =
  'https://images.pexels.com/photos/6717035/pexels-photo-6717035.jpeg?auto=compress&cs=tinysrgb&w=1600';
const WHOLESALE_IMG =
  'https://images.pexels.com/photos/18699670/pexels-photo-18699670.jpeg?auto=compress&cs=tinysrgb&w=1200';

const TRUST = [
  { icon: Factory, title: 'Manufacturer Direct', desc: 'Sourced straight from our manufacturing unit — no middlemen, consistent quality.' },
  { icon: Package, title: 'Wholesale Supply', desc: 'Bulk supply built for retailers and stores, with reliable repeat availability.' },
  { icon: ShieldCheck, title: 'Quality Focused', desc: 'Every batch passes a structured quality check before it leaves our facility.' },
  { icon: Layers, title: 'Focused Collection', desc: 'A dependable core range of jeans, formal pants and formal shirts.' },
];

const MARQUEE = ['Jeans', 'Formal Pants', 'Formal Shirts'];

export default function HomePage() {
  const featured = getFeaturedProducts(8);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden grain">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_IMG}
          alt="Garment manufacturing unit"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/35" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28">
          <div className="max-w-3xl slide-up">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-white/50" />
              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-white/70">
                Ahmedabad · Gujarat · India
              </p>
            </div>
            <h1 className="mt-7 font-serif text-[2.75rem] font-medium leading-[1.05] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)] sm:text-6xl lg:text-7xl">
              Quality Garments.{' '}
              <span className="italic text-white/90">Built for Wholesale.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              We manufacture and supply a focused catalogue of jeans, formal pants
              and formal shirts to retailers, clothing stores and fashion businesses
              across India.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/products"
                className="group inline-flex items-center justify-center gap-2 bg-white px-8 py-4 text-xs font-semibold uppercase tracking-widest text-black transition-all hover:gap-3"
              >
                Explore Collection
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/enquiry"
                className="inline-flex items-center justify-center border border-white/30 bg-transparent px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-black"
              >
                Wholesale Enquiry
              </Link>
            </div>
          </div>
        </div>
        {/* Hero meta strip */}
        <div className="absolute inset-x-0 bottom-0 hidden border-t border-white/10 bg-black/20 py-4 backdrop-blur-sm md:block">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-8 text-[11px] uppercase tracking-widest text-white/60">
            <span>Manufacturer &amp; Wholesale Supplier</span>
            <span>9 Products · 3 Categories</span>
            <span>Est. Ahmedabad</span>
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <section className="overflow-hidden border-y border-border bg-foreground py-4">
        <div className="flex whitespace-nowrap">
          <div className="marquee flex shrink-0 items-center gap-8 pr-8">
            {[...MARQUEE, ...MARQUEE].map((item, i) => (
              <span key={i} className="flex items-center gap-8 text-sm font-medium uppercase tracking-[0.25em] text-background/80">
                {item}
                <span className="text-background/30">/</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST.map((item, i) => (
              <Reveal key={item.title} delay={i * 80} className="flex flex-col items-start">
                <div className="flex h-12 w-12 items-center justify-center border border-border bg-card">
                  <item.icon className="h-5 w-5 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 font-serif text-xl font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Collection */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Catalogue
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium text-foreground sm:text-5xl">
                Explore Our Collection
              </h2>
            </div>
            <Link
              href="/categories"
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-foreground"
            >
              All Categories
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
            {CATEGORIES.map((cat, i) => (
              <Reveal key={cat.slug} delay={(i % 4) * 70}>
                <Link
                  href={`/products?category=${cat.slug}`}
                  className="group relative block aspect-[4/5] overflow-hidden rounded-none bg-secondary"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                    className="img-zoom h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <p className="text-[10px] font-medium uppercase tracking-widest text-white/60">
                      {getCategoryProductCount(cat.slug)} products
                    </p>
                    <h3 className="mt-1 font-serif text-xl font-medium text-white sm:text-2xl">
                      {cat.name}
                    </h3>
                    <p className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-white">
                      View Collection
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="bg-secondary/50 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Selected
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium text-foreground sm:text-5xl">
                Featured Collection
              </h2>
            </div>
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-foreground"
            >
              View All Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {featured.map((product, i) => (
              <Reveal key={product.id} delay={(i % 4) * 70}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Wholesale CTA — asymmetric */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
            <Reveal className="relative min-h-[320px] overflow-hidden rounded-none bg-secondary lg:col-span-7 lg:min-h-[520px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={WHOLESALE_IMG}
                alt="Wholesale garment rack"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </Reveal>
            <Reveal delay={120} className="flex flex-col justify-center py-4 lg:col-span-5 lg:py-12">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Wholesale
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
                Looking for a Reliable Garment Supplier?
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
                We work with retailers, clothing stores and fashion businesses to
                supply quality garments in bulk — with consistent availability and
                a structured quality process behind every batch.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products"
                  className="group inline-flex items-center justify-center gap-2 bg-foreground px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-background transition-all hover:gap-3"
                >
                  Explore Products
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={whatsappUrl('Hello Soham Garment, I would like to discuss wholesale supply for my store.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 border border-foreground px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  Contact on WhatsApp
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
