// app/fonts.js
import { Fredoka, Nunito, Quicksand, Open_Sans, Caveat } from 'next/font/google'

// Headline font - Chunky, rounded, playful (Primary choice: Fredoka)
// Alternatives: Nunito or Quicksand (commented out)
export const headline = Fredoka({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-headline',
  display: 'swap',
})

// export const headline = Nunito({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700', '800'],
//   variable: '--font-headline',
//   display: 'swap',
// })

// export const headline = Quicksand({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
//   variable: '--font-headline',
//   display: 'swap',
// })

// Body text font - Clean, highly legible
export const body = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

// Accent/Handwritten font - For short, playful phrases (use sparingly)
export const accent = Caveat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-accent',
  display: 'swap',
})
