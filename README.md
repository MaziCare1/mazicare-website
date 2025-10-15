# MaziCare - Φροντίδα Ηλικιωμένων

Η πρώτη ολοκληρωμένη ψηφιακή πλατφόρμα φροντίδας ηλικιωμένων στην Ελλάδα.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui (Radix UI)
- **Icons:** Lucide React

## Project Structure

```
MaziCare/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles & Tailwind
├── components/            # React components
│   ├── sections/         # Page sections (Header, Hero, etc.)
│   └── ui/               # shadcn/ui components
├── lib/                  # Utilities
│   └── utils.ts         # Helper functions (cn, etc.)
├── public/              # Static assets
│   └── assets/         # Images and media
├── next.config.js      # Next.js configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Features

- **Caregiver Matching** - Find verified caregivers based on needs, location, and preferences
- **Family Dashboard** - Real-time updates on elderly care (meals, medications, mood, activities)
- **Waitlist System** - Early access registration with email validation
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **SEO Optimized** - Proper metadata and OpenGraph tags
- **Type Safe** - Full TypeScript support

## Development

### Code Quality

- ESLint for code linting
- TypeScript for type safety
- Component-based architecture
- Proper folder structure following Next.js best practices

### Key Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

## Contributing

This project follows Next.js and React best practices:

- Use TypeScript for all new files
- Follow the existing component structure
- Use Tailwind CSS for styling
- Ensure components are properly typed

## License

© 2024 MaziCare. All rights reserved.

---

**Founder:** Φώτιος Κουζιώρτης  
**Contact:** info@mazicare.gr | +30 6955 117 140
