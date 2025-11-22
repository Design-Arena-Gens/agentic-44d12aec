import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Manuel de Veille Médiatique Audiovisuelle',
  description: 'Guide complet pour la gestion d\'un service de veille médiatique audiovisuelle',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
