import type { Metadata } from 'next';
import HolyLoader from 'holy-loader';
import { Toaster } from '@/components/ui/toaster';
import QueryProvider from '@/context/QueryProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Essent Locadora',
  description: "We're here to Increase your Productivity"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`bg-white dark:bg-black`}>
        <QueryProvider>
          <HolyLoader
            color='#19253C'
            height='8px'
            speed={250}
            easing='linear'
            showSpinner={false}
          />
          {children}
        </QueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
