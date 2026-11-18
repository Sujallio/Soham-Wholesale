import Link from 'next/link';
import { MapPin, Phone, MessageCircle, Mail, Clock, ArrowUpRight } from 'lucide-react';
import {
  PHONE_NUMBER,
  EMAIL,
  WHATSAPP_NUMBER,
  whatsappUrl,
} from '@/lib/whatsapp';
import { CATEGORIES } from '@/lib/data/products';

const EXPLORE_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/categories', label: 'Categories' },
  { href: '/about', label: 'About Us' },
  { href: '/manufacturing', label: 'Manufacturing' },
  { href: '/contact', label: 'Contact' },
  { href: '/enquiry', label: 'Wholesale Enquiry' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:pr-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center bg-background text-foreground">
                <span className="font-serif text-xl font-semibold">S</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-lg font-semibold text-background">
                  Soham Garment
                </span>
                <span className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.22em] text-background/50">
                  Manufacturing &amp; Wholesale
                </span>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-background/60">
              Garment manufacturer and wholesale supplier based in Ahmedabad,
              Gujarat — delivering quality apparel to retailers, clothing stores
              and fashion businesses across India.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-background/80">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-background/60 transition-colors hover:text-background"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-background/80">
              Categories
            </h3>
            <ul className="mt-5 space-y-3">
              {CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/products?category=${cat.slug}`}
                    className="group inline-flex items-center gap-1 text-sm text-background/60 transition-colors hover:text-background"
                  >
                    {cat.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-background/80">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-background/60">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-background/80" strokeWidth={1.5} />
                <span>Ahmedabad, Gujarat, India</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-background/80" strokeWidth={1.5} />
                <a
                  href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                  className="transition-colors hover:text-background"
                >
                  {PHONE_NUMBER}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-background/80" strokeWidth={1.5} />
                <a
                  href={whatsappUrl('Hello Soham Garment, I would like to enquire about your wholesale garments.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-left transition-colors hover:text-background"
                >
                  WhatsApp: +{WHATSAPP_NUMBER}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-background/80" strokeWidth={1.5} />
                <a
                  href={`mailto:${EMAIL}`}
                  className="transition-colors hover:text-background"
                >
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-background/80" strokeWidth={1.5} />
                <span>Mon – Sat, 9:30 AM – 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-background/15 pt-6">
          <p className="text-center text-xs uppercase tracking-widest text-background/40">
            &copy; 2026 Soham Garment. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
