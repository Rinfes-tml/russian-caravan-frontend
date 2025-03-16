'use client';

import Navigation from './Navigation';
import BookingButton from './BookingButton';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      {children}
      <BookingButton />
    </>
  );
} 