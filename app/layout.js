import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NDC | NEAR Digital Collective',
  description: 'The NDC is a Grassroots Movement, led by the NEAR Community to create Decentralized Web 3.0 Governance on NEAR.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
