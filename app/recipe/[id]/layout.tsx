export default function RecipeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Cooking Bay - {"page id"}</title>
      </head>

      <body className="font-serif overflow-hidden">
        <div className="container">
          <div className="columns-1">
            <div className="flex flex-col gap-8 items-stretch justify-start">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
