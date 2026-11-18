import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Page Not Found — Soham Garment',
};

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
      <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
        404
      </p>
      <h1 className="mt-4 font-serif text-4xl font-medium text-foreground sm:text-5xl">
        Page Not Found
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 bg-foreground px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-background transition-opacity hover:opacity-90"
      >
        Back to Home
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
