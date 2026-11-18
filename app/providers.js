'use client';

import { EnquiryProvider } from '@/lib/enquiry-context';
import { Toaster } from '@/components/ui/sonner';

export default function Providers({ children }) {
  return (
    <EnquiryProvider>
      {children}
      <Toaster position="bottom-right" richColors={false} />
    </EnquiryProvider>
  );
}
