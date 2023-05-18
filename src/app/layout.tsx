import './globals.css'

export const metadata = {
  title: 'Word Counter',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="h-full" lang="en">
      <body>{children}</body>
    </html>
  )
}
