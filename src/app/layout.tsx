export const metadata = {
  title: 'Quinn Pudenz - Freelance Web Developer',
  description: 'Portfolio of Quinn Pudenz, a freelance web developer based in Kansas City, MO.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
