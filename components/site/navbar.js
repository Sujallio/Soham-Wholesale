'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ShoppingBag, MessageCircle, ArrowRight } from 'lucide-react';
import { useEnquiry } from '@/lib/enquiry-context';
import { openWhatsApp } from '@/lib/whatsapp';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/categories', label: 'Categories' },
  { href: '/about', label: 'About' },
  { href: '/manufacturing', label: 'Manufacturing' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { count, hydrated } = useEnquiry();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'border-b border-border/60 bg-background/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-background'
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" aria-label="Soham Garment home">
          <div className="flex h-9 w-9 items-center justify-center bg-foreground text-background transition-transform duration-300 hover:scale-105 lg:h-11 lg:w-11">
            <span className="font-serif text-xl font-semibold lg:text-2xl">S</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif text-lg font-semibold tracking-tight text-foreground lg:text-xl">
              Soham Garment
            </span>
            <span className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.22em] text-muted-foreground lg:text-[10px]">
              Manufacturing &amp; Wholesale
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'relative px-3 py-2 text-[13px] font-medium uppercase tracking-wider transition-colors',
                isActive(link.href) ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute inset-x-3 -bottom-px h-px bg-foreground" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/enquiry"
            className="relative hidden items-center gap-1.5 px-2 py-2 text-[13px] font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground sm:flex"
            aria-label="View enquiry list"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>Enquiry</span>
            {hydrated && count > 0 && (
              <span className="ml-0.5 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-foreground px-1.5 text-[10px] font-semibold text-background">
                {count}
              </span>
            )}
          </Link>

          <Link
            href="/enquiry"
            className="group hidden items-center gap-2 uppercase tracking-widest text-xs font-medium bg-foreground text-background px-5 py-2.5 transition-all hover:gap-3 lg:inline-flex"
          >
            Wholesale Enquiry
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>

          {/* Mobile WhatsApp */}
          <button
            onClick={() => openWhatsApp('Hello Soham Garment, I would like to know more about your wholesale garments.')}
            className="flex h-9 w-9 items-center justify-center text-foreground transition-opacity hover:opacity-60 lg:hidden"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center text-foreground lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 top-16 z-40 bg-background fade-in lg:hidden">
          <nav className="flex flex-col gap-1 px-6 py-8" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'flex items-center justify-between border-b border-border py-5 font-serif text-3xl transition-colors',
                  isActive(link.href) ? 'text-foreground' : 'text-muted-foreground'
                )}
              >
                {link.label}
                <ArrowRight className="h-5 w-5 opacity-30" />
              </Link>
            ))}
            <Link
              href="/enquiry"
              className="mt-8 flex items-center justify-between bg-foreground px-6 py-4 text-sm font-medium uppercase tracking-widest text-background"
            >
              <span>Wholesale Enquiry</span>
              {hydrated && count > 0 && (
                <span className="flex h-6 min-w-[24px] items-center justify-center rounded-full bg-background px-2 text-xs font-semibold text-foreground">
                  {count}
                </span>
              )}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
