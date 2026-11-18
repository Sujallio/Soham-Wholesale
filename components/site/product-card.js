'use client';

import Link from 'next/link';
import { Plus, Check, ArrowUpRight } from 'lucide-react';
import { toast } from 'sonner';
import { useEnquiry } from '@/lib/enquiry-context';
import { getCategoryName } from '@/lib/data/products';
import { cn } from '@/lib/utils';

export default function ProductCard({ product }) {
  const { addItem, hasItem, hydrated } = useEnquiry();
  const inList = hydrated && hasItem(product.id);

  const handleEnquiry = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (inList) return;
    addItem(product, 10);
    toast.success('Added to Enquiry', {
      description: `${product.name} · qty 10 pcs`,
    });
  };

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-none border border-border bg-card transition-all duration-500 hover:border-foreground/30 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)]">
      <Link
        href={`/products/${product.id}`}
        className="relative block aspect-[3/4] overflow-hidden bg-secondary"
        aria-label={product.name}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="img-zoom h-full w-full object-cover"
        />
        <span className="absolute left-3 top-3 bg-background/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-foreground backdrop-blur">
          {getCategoryName(product.category)}
        </span>
        <div className="absolute right-3 top-3 flex h-8 w-8 translate-y-1 items-center justify-center bg-background/90 text-foreground opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-serif text-lg font-medium leading-snug text-foreground">
          <Link href={`/products/${product.id}`} className="transition-colors hover:opacity-60">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
          {product.code}
        </p>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          {product.colors.join(' · ')}
        </p>

        <div className="mt-4 flex items-center gap-2 pt-1">
          <Link
            href={`/products/${product.id}`}
            className="flex-1 border border-border bg-card px-3 py-2.5 text-center text-[11px] font-medium uppercase tracking-widest text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
          >
            View Details
          </Link>
          <button
            onClick={handleEnquiry}
            disabled={inList}
            className={cn(
              'flex flex-1 items-center justify-center gap-1.5 px-3 py-2.5 text-[11px] font-medium uppercase tracking-widest transition-all',
              inList
                ? 'bg-secondary text-muted-foreground'
                : 'bg-foreground text-background hover:gap-2'
            )}
          >
            {inList ? (
              <><Check className="h-3.5 w-3.5" /> Added</>
            ) : (
              <><Plus className="h-3.5 w-3.5" /> Enquiry</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
