'use client';

import { useState } from 'react';
import { MapPin, Phone, MessageCircle, Mail, Clock } from 'lucide-react';
import {
  PHONE_NUMBER,
  EMAIL,
  WHATSAPP_NUMBER,
  openWhatsApp,
} from '@/lib/whatsapp';
import Reveal from '@/components/site/reveal';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    business: '',
    phone: '',
    email: '',
    message: '',
  });

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const buildMessage = () =>
    `Hello Soham Garment,

I would like to get in touch.

Name: ${form.name}
Business: ${form.business}
Phone: ${form.phone}
Email: ${form.email}

Message: ${form.message}

Thank you.`;

  const handleWhatsApp = (e) => {
    e.preventDefault();
    openWhatsApp(buildMessage());
  };

  return (
    <>
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Get in touch
            </p>
            <h1 className="mt-3 font-serif text-4xl font-medium text-foreground sm:text-6xl">
              Contact Us
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Reach out for wholesale enquiries, product availability or any
              questions about supply — we typically respond during business hours.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: info + map */}
          <div>
            <h2 className="font-serif text-2xl font-medium text-foreground">
              Soham Garment
            </h2>
            <ul className="mt-6 space-y-5 text-sm">
              <li className="flex items-start gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-foreground" strokeWidth={1.5} />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Address
                  </p>
                  <p className="mt-1 text-foreground">Ahmedabad, Gujarat, India</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-foreground" strokeWidth={1.5} />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Phone
                  </p>
                  <a
                    href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                    className="mt-1 block text-foreground transition-colors hover:opacity-70"
                  >
                    {PHONE_NUMBER}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-foreground" strokeWidth={1.5} />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    WhatsApp
                  </p>
                  <button
                    onClick={() =>
                      openWhatsApp('Hello Soham Garment, I would like to enquire about your wholesale garments.')
                    }
                    className="mt-1 block text-left text-foreground transition-colors hover:opacity-70"
                  >
                    +{WHATSAPP_NUMBER}
                  </button>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-foreground" strokeWidth={1.5} />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Email
                  </p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="mt-1 block text-foreground transition-colors hover:opacity-70"
                  >
                    {EMAIL}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-foreground" strokeWidth={1.5} />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Business Hours
                  </p>
                  <p className="mt-1 text-foreground">Monday – Saturday, 9:30 AM – 7:00 PM</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 aspect-[4/3] overflow-hidden rounded-none border border-border">
              <iframe
                title="Soham Garment location — Ahmedabad"
                src="https://www.google.com/maps?q=Ahmedabad,Gujarat,India&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="border border-border bg-card p-6 sm:p-8">
              <h2 className="font-serif text-2xl font-medium text-foreground">
                Send a Message
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill in your details and send the enquiry straight to our
                WhatsApp.
              </p>
              <form className="mt-6 space-y-4" onSubmit={handleWhatsApp}>
                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    Name *
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={update('name')}
                    className="mt-1.5 h-11 w-full rounded-none border border-border bg-background px-3 text-sm focus:border-foreground focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    Business Name
                  </label>
                  <input
                    value={form.business}
                    onChange={update('business')}
                    className="mt-1.5 h-11 w-full rounded-none border border-border bg-background px-3 text-sm focus:border-foreground focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    Phone *
                  </label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={update('phone')}
                    className="mt-1.5 h-11 w-full rounded-none border border-border bg-background px-3 text-sm focus:border-foreground focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    className="mt-1.5 h-11 w-full rounded-none border border-border bg-background px-3 text-sm focus:border-foreground focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={update('message')}
                    className="mt-1.5 w-full rounded-none border border-border bg-background px-3 py-2.5 text-sm focus:border-foreground focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 bg-[#25D366] px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-white transition-opacity hover:opacity-90"
                >
                  <MessageCircle className="h-4 w-4" />
                  Send on WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
