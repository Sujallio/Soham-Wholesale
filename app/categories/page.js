import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES, getCategoryProductCount } from '@/lib/data/products';
import Reveal from '@/components/site/reveal';

export const metadata = {
  title: 'Categories — Soham Garment',
  description:
    'Browse the focused garment catalogue from Soham Garment — jeans, formal pants and formal shirts.',
};

export default function CategoriesPage() {
  return (
    <>
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Range
            </p>
            <h1 className="mt-3 font-serif text-4xl font-medium text-foreground sm:text-6xl">
              Product Categories
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Our focused catalogue covers three dependable garment categories,
              each manufactured in our Ahmedabad unit and supplied wholesale to
              retailers and fashion businesses.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.slug} delay={(i % 3) * 80}>
              <Link
                href={`/products?category=${cat.slug}`}
                className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-none bg-secondary"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="img-zoom absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="relative p-6">
                  <p className="text-[10px] font-medium uppercase tracking-widest text-white/60">
                    {getCategoryProductCount(cat.slug)} products
                  </p>
                  <h2 className="mt-1.5 font-serif text-2xl font-medium text-white">
                    {cat.name}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    {cat.description}
                  </p>
                  <p className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white">
                    View Collection
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
