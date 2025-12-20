'use client';

import Link from 'next/link';

import type { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'Error',
  description: 'Something went wrong!',
};

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: 'string' };
  reset: () => void;
}) => {
  return (
    <section>
      <div className="py-8 px-4 mx-auto lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-8">Error</h1>
          <p className="mb-5">{error.message || 'Something went wrong!'}</p>
          <button onClick={() => reset()} className="btn-primary mb-4">
            Try Again
          </button>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            <Link href="/">Go to home page.</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Error;
