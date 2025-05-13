# AirBnB-Home-Rents

A modern real estate platform built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/). Find, list, and explore properties with a beautiful, responsive UI.

## Features

- 🔍 Property search with filters (location, type, BHK, budget)
- 🏠 Featured properties and property details with image galleries
- 📝 User authentication (login/register pages)
- 📋 Post and save properties (UI ready)
- 📱 Fully responsive, mobile-first design
- 🎨 Modern UI with custom color palette and Poppins font
- 🖼️ Asset management via `public/images/`

## Tech Stack

- [Next.js 14](https://nextjs.org/)
- [React 18](https://react.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- TypeScript

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/airbnb
├── public/
│   └── images/           # Project images (used in UI)
├── src/
│   ├── app/              # Next.js app directory (pages, layout, styles)
│   │   ├── property/     # Property details pages
│   │   ├── search/       # Search results page
│   │   ├── login/        # Login page
│   │   ├── register/     # Register page
│   │   ├── page.tsx      # Home page
│   │   ├── layout.tsx    # Root layout (Header, Footer)
│   │   └── globals.css   # Global styles
│   └── components/       # Shared UI components (Header, Footer)
├── tailwind.config.ts    # Tailwind CSS config
├── postcss.config.js     # PostCSS config
├── next.config.js        # Next.js config
├── tsconfig.json         # TypeScript config
└── README.md
```

## Assets

Sample images are stored in `public/images/` and used throughout the UI:

- luxury-home-1.jpeg, luxury-home-2.jpeg, ...
- modern-building.jpg, real-estate-logo.jpeg, real-estate-transactions.jpeg, etc.

## Customization

- **Colors:** See `tailwind.config.ts` for the custom palette (primary, light, light-bg, etc.)
- **Font:** Uses Poppins via Tailwind config
- **Components:** Edit or extend `src/components/` for your needs

## Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run start` – Start production server
- `npm run lint` – Lint code

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)