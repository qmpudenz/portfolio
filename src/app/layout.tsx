export const metadata = {
  title: 'Professional Portfolio - Full-Stack Web Developer',
  description: 'Portfolio showcasing web development expertise in React, Next.js, Node.js, and modern web technologies. Available for freelance projects.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-full">{children}</body>
    </html>
  )
}
