export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  return (
    <html suppressHydrationWarning lang={locale || "pt-br"}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://peccigabriel.com" />
      </head>
      <body
        suppressHydrationWarning
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          fontSize: "1.25rem",
        }}
      >
        {children}
      </body>
    </html>
  );
}
