import {Provider} from '@/components/ui/provider';

export default function RootLayout({children}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="icon" href="/logo.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>Comanda VIP</title>
        <meta
          name="description"
          content="Sistema de gerenciamento de comandas para estabelecimentos comerciais. Controle eficiente de pedidos, produtos e vendas."
        />
      </head>

      <body suppressHydrationWarning={true}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
