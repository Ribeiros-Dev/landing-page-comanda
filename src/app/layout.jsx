import {Provider} from '@/components/ui/provider';

export default function RootLayout({children}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <head />
      <body suppressHydrationWarning={true}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
