'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Trash2,
  Minus,
  Plus,
  MessageCircle,
  Check,
  ArrowRight,
  ShoppingBag,
} from 'lucide-react';
import { toast } from 'sonner';
import { useEnquiry } from '@/lib/enquiry-context';
import { getCategoryName } from '@/lib/data/products';
import { buildEnquiryMessage, openWhatsApp } from '@/lib/whatsapp';
import { cn } from '@/lib/utils';

const EMPTY_FORM = {
  name: '',
  business: '',
  mobile: '',
  whatsapp: '',
  city: '',
  state: '',
  message: '',
};

export default function EnquiryPage() {
  const { items, removeItem, updateQuantity, clear, count, hydrated } = useEnquiry();
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Please enter your name';
    if (!form.mobile.trim()) errs.mobile = 'Please enter your mobile number';
    else if (!/^[+\d\s-]{8,}$/.test(form.mobile.trim()))
      errs.mobile = 'Please enter a valid mobile number';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error('Please fill in the required fields');
      return;
    }
    if (items.length === 0) {
      toast.error('Add at least one product to your enquiry');
      return;
    }
    openWhatsApp(buildEnquiryMessage({ items, form }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error('Please fill in the required fields');
      return;
    }
    if (items.length === 0) {
      toast.error('Add at least one product to your enquiry');
      return;
    }
    setSubmitted(true);
  };

  const handleDone = () => {
    clear();
    setForm(EMPTY_FORM);
    setErrors({});
    setSubmitted(false);
  };

  // Success state
  if (submitted) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
        <div className="fade-in flex h-20 w-20 items-center justify-center rounded-full border border-foreground">
          <Check className="h-9 w-9 text-foreground" strokeWidth={1.5} />
        </div>
        <h1 className="slide-up mt-8 font-serif text-4xl font-medium text-foreground sm:text-5xl">
          Enquiry Received
        </h1>
        <p className="slide-up mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
          Thank you for your interest in Soham Garment. Our team will get back
          to you shortly with wholesale pricing and availability for the
          products you selected.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/products"
            onClick={handleDone}
            className="inline-flex items-center justify-center bg-foreground px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-background transition-opacity hover:opacity-90"
          >
            Continue Browsing
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/"
            onClick={handleDone}
            className="inline-flex items-center justify-center border border-foreground px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const showEmpty = hydrated && items.length === 0;

  return (
    <>
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Wholesale Enquiry
            </p>
            <h1 className="mt-3 font-serif text-4xl font-medium text-foreground sm:text-6xl">
              Let&apos;s plan your collection
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Review your selected products, tell us where to reach you, and
              we&apos;ll respond with wholesale pricing and availability.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
          {/* Left: list */}
          <div>
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                  Step 01
                </p>
                <h2 className="mt-1 font-serif text-3xl font-medium text-foreground">
                  Selected products
                </h2>
              </div>
              {hydrated && items.length > 0 && (
                <span className="shrink-0 border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground">
                  {items.length} {items.length === 1 ? 'item' : 'items'}
                </span>
              )}
            </div>
            {showEmpty ? (
              <div className="flex flex-col items-center justify-center border border-dashed border-border bg-card py-24 text-center shadow-sm">
                <ShoppingBag className="h-10 w-10 text-muted-foreground" strokeWidth={1.2} />
                <p className="mt-6 font-serif text-2xl text-foreground">
                  Your enquiry list is empty
                </p>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Browse our catalogue and add products to build a wholesale
                  enquiry.
                </p>
                <Link
                  href="/products"
                  className="mt-8 inline-flex items-center gap-2 bg-foreground px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-background transition-opacity hover:opacity-90"
                >
                  Browse Products
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ) : (
              <>
                <div className="divide-y divide-border border border-border bg-card shadow-sm">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 p-4 sm:p-5">
                      <Link
                        href={`/products/${item.id}`}
                        className="relative h-24 w-20 shrink-0 overflow-hidden rounded-none bg-secondary sm:h-28 sm:w-24"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </Link>
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <Link
                              href={`/products/${item.id}`}
                              className="font-serif text-lg font-medium text-foreground transition-opacity hover:opacity-70"
                            >
                              {item.name}
                            </Link>
                            <p className="mt-0.5 text-xs uppercase tracking-widest text-muted-foreground">
                              {item.code} · {getCategoryName(item.category)}
                            </p>
                          </div>
                          <button
                            onClick={() => {
                              removeItem(item.id);
                              toast('Removed from enquiry', { description: item.name });
                            }}
                            className="flex h-8 w-8 items-center justify-center text-muted-foreground transition-colors hover:text-destructive"
                            aria-label={`Remove ${item.name}`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="mt-auto flex items-center gap-3 pt-3">
                          <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                            Qty
                          </span>
                          <div className="flex items-center border border-border">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="flex h-9 w-9 items-center justify-center text-foreground transition-colors hover:bg-secondary"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) =>
                                updateQuantity(
                                  item.id,
                                  Math.max(1, parseInt(e.target.value) || 1)
                                )
                              }
                              className="h-9 w-14 border-x border-border bg-background text-center text-sm focus:outline-none"
                            />
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="flex h-9 w-9 items-center justify-center text-foreground transition-colors hover:bg-secondary"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <span className="text-xs text-muted-foreground">pcs</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <button
                    onClick={() => {
                      clear();
                      toast('Enquiry list cleared');
                    }}
                    className="text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-destructive"
                  >
                    Clear all
                  </button>
                  <p className="text-sm text-muted-foreground">
                    Total quantity:{' '}
                    <span className="font-medium text-foreground">{count}</span> pcs
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Right: form */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="border border-foreground/15 bg-card p-6 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.45)] sm:p-8">
              <div className="flex items-start gap-4 border-b border-border pb-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-foreground text-background">
                  <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                    Step 02
                  </p>
                  <h2 className="mt-1 font-serif text-3xl font-medium text-foreground">
                    Your details
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Share your business details so we can respond with pricing.
                  </p>
                </div>
              </div>
              <p className="mt-5 text-xs text-muted-foreground">
                Fields marked <span className="font-semibold text-destructive">*</span> are required.
              </p>
              <form className="mt-5 space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-4 border-b border-border pb-5 sm:grid-cols-2">
                  <Field
                    label="Full Name"
                    required
                    value={form.name}
                    onChange={update('name')}
                    error={errors.name}
                  />
                  <Field
                    label="Business / Shop Name"
                    value={form.business}
                    onChange={update('business')}
                  />
                </div>
                <div className="grid gap-4 border-b border-border pb-5 sm:grid-cols-2">
                  <Field
                    label="Mobile"
                    required
                    type="tel"
                    value={form.mobile}
                    onChange={update('mobile')}
                    error={errors.mobile}
                  />
                  <Field
                    label="WhatsApp"
                    type="tel"
                    value={form.whatsapp}
                    onChange={update('whatsapp')}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 border-b border-border pb-5">
                  <Field
                    label="City"
                    value={form.city}
                    onChange={update('city')}
                  />
                  <Field
                    label="State"
                    value={form.state}
                    onChange={update('state')}
                  />
                </div>
                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-widest text-foreground">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={update('message')}
                    className="mt-1.5 w-full rounded-none border border-border bg-background px-3 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-foreground focus:ring-2 focus:ring-foreground/10"
                    placeholder="Any specific requirements, target price range, delivery location…"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="flex w-full items-center justify-center gap-2 bg-[#25D366] px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-white transition-opacity hover:opacity-90"
                >
                  <MessageCircle className="h-4 w-4" />
                  Send on WhatsApp
                </button>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 border border-foreground px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Field({ label, required, type = 'text', value, onChange, error }) {
  return (
    <div>
      <label className="text-[10px] font-semibold uppercase tracking-widest text-foreground">
        {label}{required && <span className="ml-1 text-destructive">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        className={cn(
          'mt-1.5 h-11 w-full rounded-none border border-border bg-background px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-foreground focus:ring-2 focus:ring-foreground/10',
          error && 'border-destructive focus:border-destructive focus:ring-destructive/10'
        )}
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
