import Link from 'next/link';
import {
  Layers,
  Scissors,
  Shirt,
  Package,
  ShieldCheck,
  Truck,
  ArrowRight,
} from 'lucide-react';
import { whatsappUrl } from '@/lib/whatsapp';
import Reveal from '@/components/site/reveal';

export const metadata = {
  title: 'Manufacturing — Soham Garment',
  description:
    'Our six-step garment manufacturing process — fabric selection, cutting, stitching, finishing, quality check and packaging — at our Ahmedabad unit.',
};

const STEPS = [
  {
    icon: Layers,
    title: 'Fabric Selection',
    desc: 'We source and inspect fabric lots for hand feel, colour consistency and weight before they enter production.',
  },
  {
    icon: Scissors,
    title: 'Cutting',
    desc: 'Patterns are laid and cut in batches to keep sizing consistent across the run and minimise fabric waste.',
  },
  {
    icon: Shirt,
    title: 'Stitching',
    desc: 'Garments are stitched on dedicated lines, with seam strength and alignment checked at each station.',
  },
  {
    icon: Package,
    title: 'Finishing',
    desc: 'Threads are trimmed, garments are pressed and any finishing details are completed before inspection.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Check',
    desc: 'Every piece is inspected for defects, sizing and finish — only passing pieces move to packaging.',
  },
  {
    icon: Truck,
    title: 'Packaging',
    desc: 'Approved pieces are folded, packed and labelled per order, ready for reliable wholesale dispatch.',
  },
];

const FACTORY_IMG =
  'https://images.unsplash.com/photo-1560796952-f1c9b838544c?auto=format&fit=crop&w=1200&q=70';

export default function ManufacturingPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Process
            </p>
            <h1 className="mt-3 font-serif text-4xl font-medium text-foreground sm:text-5xl lg:text-7xl">
              Our Manufacturing
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Every garment moves through a structured six-step process in our
              Ahmedabad unit — from fabric selection to final packaging — so
              quality stays consistent across wholesale batches.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Steps grid */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((step, idx) => (
              <Reveal key={step.title} delay={(idx % 3) * 70} className="group bg-card p-8 transition-colors duration-500 hover:bg-foreground hover:text-background lg:p-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground transition-colors group-hover:text-background/60">
                  Step {String(idx + 1).padStart(2, '0')}
                </p>
                <step.icon
                  className="mt-6 h-8 w-8 text-foreground transition-colors group-hover:text-background"
                  strokeWidth={1.5}
                />
                <h2 className="mt-5 font-serif text-2xl font-medium text-foreground transition-colors group-hover:text-background">
                  {step.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-background/70">
                  {step.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Consistent Wholesale Supply */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-none bg-secondary">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={FACTORY_IMG}
                alt="Garment sewing unit"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Wholesale Ready
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium text-foreground sm:text-4xl">
                Built for Consistent Wholesale Supply
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Because every step sits inside our unit, we can hold quality
                steady across repeat orders and keep availability consistent
                through the season — the dependability retail buyers expect
                from a manufacturing partner.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center bg-foreground px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-background transition-opacity hover:opacity-90"
                >
                  Explore Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <a
                  href={whatsappUrl(
                    'Hello Soham Garment, I would like to discuss wholesale supply and availability.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-foreground px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  Contact on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
