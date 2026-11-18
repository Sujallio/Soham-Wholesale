'use client';

import Link from 'next/link';

export default function Error({ reset }) {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
        Something went wrong
      </p>
      <h1 className="mt-4 font-serif text-4xl font-medium text-foreground">
        We could not load this page
      </h1>
      <div className="mt-8 flex gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="bg-foreground px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-background"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="border border-foreground px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-foreground"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
