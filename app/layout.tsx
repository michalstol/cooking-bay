import "../styles/dist.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Cooking Bay</title>
      </head>

      <body className="font-serif overflow-hidden text-black dark:bg-black dark:text-white">
        {children}
      </body>
    </html>
  );
}
