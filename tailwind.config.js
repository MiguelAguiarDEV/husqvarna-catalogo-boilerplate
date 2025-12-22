/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    // Common padding/margin classes (standard Tailwind)
    { pattern: /^p-\d+$/ },
    { pattern: /^p[xytblr]-\d+$/ },
    { pattern: /^m-\d+$/ },
    { pattern: /^m[xytblr]-\d+$/ },
    { pattern: /^gap-\d+$/ },
    // Arbitrary pixel values for padding (p-[Xpx])
    { pattern: /^p-\[\d+px\]$/ },
    { pattern: /^p[xytblr]-\[\d+px\]$/ },
    // Arbitrary pixel values for margin
    { pattern: /^m-\[\d+px\]$/ },
    { pattern: /^m[xytblr]-\[\d+px\]$/ },
    // Arbitrary gap values
    { pattern: /^gap-\[\d+px\]$/ },
  ],
  plugins: [],
}
