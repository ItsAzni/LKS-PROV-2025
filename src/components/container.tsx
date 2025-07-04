export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="container mx-auto px-5 max-w-7xl">{children}</div>;
}
