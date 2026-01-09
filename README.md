# G2M Church Website

A modern, minimalist church website built with Next.js 14, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 14 (App Router) with TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Custom components inspired by Shadcn/UI
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles & Tailwind config
│   ├── layout.tsx           # Root layout with fonts
│   └── page.tsx             # Main page (scrollytelling)
├── components/
│   ├── animations/
│   │   └── fade-in.tsx      # Reusable scroll animations
│   ├── sections/
│   │   ├── hero.tsx         # Hero section
│   │   ├── about.tsx        # About/DNA section
│   │   ├── sermons.tsx      # Sermons & Podcasts
│   │   ├── visit.tsx        # Plan Your Visit + FAQ
│   │   └── footer.tsx       # Footer
│   ├── ui/
│   │   ├── accordion.tsx    # Accordion component
│   │   ├── button.tsx       # Button component
│   │   └── card.tsx         # Card component
│   └── navigation.tsx       # Navbar with mobile menu
├── lib/
│   └── utils.ts             # Utility functions (cn)
└── public/                  # Static assets
```

## Design System

### Colors

- **Background:** `#FFFFFF` (White), `#FAFAFA` (Off-white for sections)
- **Foreground:** `#1A1A1A` (Near black), `#525252` (Muted gray)
- **Accent:** `#D9463E` (Terracotta/Clay)
- **Border:** `#E5E5E5` (Subtle gray)

### Typography

- Large, bold headings with `tracking-tight`
- Clean, legible body text with generous line-height
- Font: Inter (sans-serif)

### Border Radius

- Standard: `0.5rem` (rounded-lg)

## Features

- ✅ Responsive mobile-first design
- ✅ Smooth scroll animations with Framer Motion
- ✅ Glassmorphism navigation bar
- ✅ Mobile slide-in menu
- ✅ Horizontal scroll media cards
- ✅ FAQ accordion
- ✅ Accessibility-focused

## Customization

### Updating Content

- **Navigation:** Edit `navLinks` in `components/navigation.tsx`
- **Hero:** Update text in `components/sections/hero.tsx`
- **Values:** Modify the `values` array in `components/sections/about.tsx`
- **Sermons:** Update `episodes` and `featuredSeries` in `components/sections/sermons.tsx`
- **FAQ:** Edit the `faqs` array in `components/sections/visit.tsx`
- **Contact Info:** Modify `contactInfo` in `components/sections/visit.tsx`

### Adding Real Images

Replace the Unsplash placeholder URLs with your own images:

1. Place images in the `public/` folder
2. Update the `backgroundImage` URLs in each section

## Build for Production

```bash
npm run build
npm start
```

## License

MIT License - Free to use for your church or ministry.
