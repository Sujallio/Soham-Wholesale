'use client';

import { Suspense, useMemo, useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search } from 'lucide-react';
import ProductCard from '@/components/site/product-card';
import Reveal from '@/components/site/reveal';
import { CATEGORIES, getProductsByCategory } from '@/lib/data/products';
import { cn } from '@/lib/utils';

const PILLS = [{ slug: 'all', name: 'All' }, ...CATEGORIES.map((c) => ({ slug: c.slug, name: c.name }))];

function ProductsView() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';
  const [query, setQuery] = useState('');
  const [debounced, setDebounced] = useState('');

  useEffect(() => {
    const t = setTimeout(() => setDebounced(query.trim().toLowerCase()), 200);
    return () => clearTimeout(t);
  }, [query]);

  const products = useMemo(() => {
    let list = getProductsByCategory(activeCategory);
    if (debounced) {
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(debounced) ||
          p.code.toLowerCase().includes(debounced) ||
          p.colors.some((c) => c.toLowerCase().includes(debounced))
      );
    }
    return list;
  }, [activeCategory, debounced]);

  const setCategory = (slug) => {
    const params = new URLSearchParams(searchParams.toString());
    if (slug === 'all') params.delete('category');
    else params.set('category', slug);
    const qs = params.toString();
    router.push(qs ? `/products?${qs}` : '/products', { scroll: false });
  };

  return (
    <>
      {/* Sticky filter bar */}
      <div className="sticky top-16 z-30 border-y border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 lg:top-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 py-3 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {PILLS.map((pill) => (
                <button
                  key={pill.slug}
                  onClick={() => setCategory(pill.slug)}
                  className={cn(
                    'shrink-0 rounded-none px-4 py-2 text-[11px] font-medium uppercase tracking-widest transition-colors',
                    activeCategory === pill.slug
                      ? 'bg-foreground text-background'
                      : 'border border-border text-muted-foreground hover:text-foreground'
                  )}
                >
                  {pill.name}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-72">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, codes, colours…"
                className="h-10 w-full rounded-none border border-border bg-card pl-10 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{products.length}</span>{' '}
          product{products.length === 1 ? '' : 's'}
          {activeCategory !== 'all' && (
            <>
              {' '}in{' '}
              <span className="font-medium text-foreground">
                {PILLS.find((p) => p.slug === activeCategory)?.name}
              </span>
            </>
          )}
        </p>

        {products.length === 0 ? (
          <div className="mt-16 flex flex-col items-center justify-center border border-dashed border-border py-24 text-center">
            <p className="font-serif text-2xl text-foreground">No products found</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Try a different category or search term.
            </p>
            <button
              onClick={() => {
                setQuery('');
                setCategory('all');
              }}
              className="mt-6 border border-border px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
            {products.map((product, i) => (
              <Reveal key={product.id} delay={(i % 4) * 60}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default function ProductsPage() {
  return (
    <>
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Catalogue
            </p>
            <h1 className="mt-3 font-serif text-4xl font-medium text-foreground sm:text-6xl">
              Our Products
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Browse our focused range of jeans, formal pants and formal shirts —
              filter by category or search by name, code or colour.
            </p>
          </Reveal>
        </div>
      </section>

      <Suspense
        fallback={
          <div className="mx-auto max-w-7xl px-4 py-20 text-center text-sm text-muted-foreground">
            Loading products…
          </div>
        }
      >
        <ProductsView />
      </Suspense>
    </>
  );
}
