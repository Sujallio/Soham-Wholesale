'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check, Plus, MessageCircle, ArrowRight, ChevronRight } from 'lucide-react';
import { toast } from 'sonner';
import ProductCard from '@/components/site/product-card';
import {
  getProductById,
  getRelatedProducts,
  getCategoryName,
} from '@/lib/data/products';
import { useEnquiry } from '@/lib/enquiry-context';
import { buildQuickEnquiry, openWhatsApp } from '@/lib/whatsapp';
import { cn } from '@/lib/utils';

export default function ProductDetailPage({ params }) {
  const { slug } = use(params);
  const product = getProductById(slug);
  if (!product) notFound();

  const [activeImage, setActiveImage] = useState(0);
  const [activeSize, setActiveSize] = useState(null);
  const [activeColor, setActiveColor] = useState(null);
  const { addItem, hasItem, hydrated } = useEnquiry();
  const inList = hydrated && hasItem(product.id);
  const related = getRelatedProducts(product, 4);

  const handleEnquiry = () => {
    if (inList) return;
    addItem(product, 10);
    toast.success('Added to Enquiry', {
      description: `${product.name} added with quantity 10 pcs.`,
    });
  };

  return (
    <>
      {/* Breadcrumbs */}
      <div className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <nav
            className="flex flex-wrap items-center gap-1.5 text-[11px] font-medium uppercase tracking-widest text-muted-foreground"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/products" className="hover:text-foreground">Products</Link>
            <ChevronRight className="h-3 w-3" />
            <Link
              href={`/products?category=${product.category}`}
              className="hover:text-foreground"
            >
              {getCategoryName(product.category)}
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-none bg-secondary">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.images[activeImage]}
                alt={`${product.name} — view ${activeImage + 1}`}
                className="h-full w-full object-cover fade-in"
                key={activeImage}
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={cn(
                      'relative aspect-square overflow-hidden rounded-none bg-secondary transition',
                      activeImage === idx
                        ? 'ring-1 ring-foreground ring-offset-2 ring-offset-background'
                        : 'opacity-70 hover:opacity-100'
                    )}
                    aria-label={`View image ${idx + 1}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img}
                      alt={`${product.name} thumbnail ${idx + 1}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
              {getCategoryName(product.category)}
            </p>
            <h1 className="mt-3 font-serif text-3xl font-medium text-foreground sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
              Code: {product.code}
            </p>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            {/* Sizes */}
            <div className="mt-8">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground">
                Available Sizes
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setActiveSize(size)}
                    className={cn(
                      'min-w-[44px] rounded-none border px-3 py-2 text-xs font-medium uppercase tracking-widest transition-colors',
                      activeSize === size
                        ? 'border-foreground bg-foreground text-background'
                        : 'border-border text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Colours */}
            <div className="mt-6">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground">
                Available Colours
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setActiveColor(color)}
                    className={cn(
                      'rounded-none border px-3 py-2 text-xs font-medium uppercase tracking-widest transition-colors',
                      activeColor === color
                        ? 'border-foreground bg-foreground text-background'
                        : 'border-border text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Fabric + Fit */}
            <div className="mt-8 grid grid-cols-2 gap-6 border-y border-border py-6">
              <div>
                <h4 className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Fabric
                </h4>
                <p className="mt-1.5 text-sm text-foreground">{product.fabric}</p>
              </div>
              <div>
                <h4 className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Fit
                </h4>
                <p className="mt-1.5 text-sm text-foreground">{product.fit}</p>
              </div>
            </div>

            <div className="mt-6 border border-border bg-secondary/40 p-5">
              <p className="font-serif text-lg text-foreground">
                Wholesale — Contact us for wholesale pricing
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Pricing is supplied on enquiry based on order quantity and
                category mix.
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={handleEnquiry}
                disabled={inList}
                className={cn(
                  'inline-flex flex-1 items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-widest transition-colors',
                  inList
                    ? 'bg-secondary text-muted-foreground'
                    : 'bg-foreground text-background hover:opacity-90'
                )}
              >
                {inList ? (
                  <>
                    <Check className="h-4 w-4" /> Added to Enquiry
                  </>
                ) : (
                  <>
                    <Plus className="h-4 w-4" /> Add to Enquiry
                  </>
                )}
              </button>
              <button
                onClick={() => openWhatsApp(buildQuickEnquiry(product))}
                className="inline-flex flex-1 items-center justify-center gap-2 border border-foreground px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Enquiry
              </button>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-20 border-t border-border pt-16">
            <div className="flex items-end justify-between">
              <h2 className="font-serif text-3xl font-medium text-foreground sm:text-4xl">
                You May Also Like
              </h2>
              <Link
                href={`/products?category=${product.category}`}
                className="group hidden items-center gap-2 text-xs font-semibold uppercase tracking-widest text-foreground sm:inline-flex"
              >
                More in {getCategoryName(product.category)}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
              {related.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
