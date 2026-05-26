import './globals.css'

export const metadata = {
  title: 'Diary Pro',
  description: 'Private Diary'
}

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  )
}
