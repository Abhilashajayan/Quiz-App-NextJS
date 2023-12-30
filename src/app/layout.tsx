import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Quiz-App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="https://media.istockphoto.com/id/1312747110/photo/quiz.jpg?s=612x612&w=0&k=20&c=4_npPVIbviJHwpd42CTUNsdNymNbGtgsCTZW_c3zldc=" />
      </head>
      <body >{children}</body>
    </html>
  )
}
