'use client';

export default function GlobalError({ reset }) {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
          <h1 className="text-3xl font-medium">We could not load the application</h1>
          <button
            type="button"
            onClick={() => reset()}
            className="mt-6 border border-black px-6 py-3 text-xs font-semibold uppercase tracking-widest"
          >
            Try Again
          </button>
        </main>
      </body>
    </html>
  );
}
