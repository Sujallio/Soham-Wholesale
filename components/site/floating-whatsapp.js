'use client';

import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { whatsappUrl } from '@/lib/whatsapp';

export default function FloatingWhatsApp() {
  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 flex items-center transition-all duration-500 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <a
        href={whatsappUrl('Hello Soham Garment, I would like to enquire about your wholesale garments.')}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-transform duration-300 hover:scale-105"
        aria-label="Chat with us on WhatsApp"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" style={{ animationDuration: '2.5s' }} />
        <MessageCircle className="relative h-6 w-6" fill="currentColor" />
      </a>
      {hover && (
        <span className="mr-3 whitespace-nowrap rounded-none bg-foreground px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-background fade-in">
          Chat with us
        </span>
      )}
    </div>
  );
}
