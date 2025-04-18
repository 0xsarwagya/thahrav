# Thahrav E-commerce Platform

Thahrav is an e-commerce platform that celebrates Indian cultural heritage through contemporary fashion and lifestyle products. This project is built with Next.js, Tailwind CSS, and Shadcn UI components.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **State Management**: React Hooks
- **Fonts**: 
  - Inter (sans-serif)
  - Cormorant Garamond (serif)

## Project Structure

\`\`\`
thahrav-website/
├── app/                      # Next.js App Router
│   ├── auth/                 # Authentication pages
│   │   ├── login/            # Login page
│   │   ├── register/         # Registration page
│   │   └── forgot-password/  # Password recovery
│   ├── checkout/             # Checkout page
│   ├── profile/              # User profile pages
│   │   ├── orders/           # Order history and tracking
│   │   └── ...               # Other profile sections
│   ├── shop/                 # Shop pages
│   │   └── product/          # Product detail pages
│   ├── journal/              # Blog/journal pages
│   ├── about/                # About page
│   ├── contact/              # Contact page
│   ├── policies/             # Legal pages
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Homepage
│   └── globals.css           # Global styles
├── components/               # Reusable components
│   ├── ui/                   # Shadcn UI components
│   ├── cart-drawer.tsx       # Cart drawer component
│   ├── checkout-drawer.tsx   # Checkout drawer component
│   ├── footer.tsx            # Footer component
│   ├── navbar.tsx            # Navigation component
│   └── theme-toggle.tsx      # Theme toggle component
├── hooks/                    # Custom React hooks
│   └── use-mobile.tsx        # Hook for responsive behavior
├── lib/                      # Utility functions
│   └── utils.ts              # Helper functions
├── public/                   # Static assets
├── tailwind.config.ts        # Tailwind configuration
└── next.config.mjs           # Next.js configuration
\`\`\`

## Pages Included

1. **Home Page**: Showcases featured products, cultural story, and journal highlights
2. **Shop Page**: Product listing with filtering and sorting options
3. **Product Detail Page**: Detailed product information with cultural context
4. **Authentication Pages**:
   - Login
   - Registration
   - Forgot Password
5. **User Profile Pages**:
   - Overview
   - Orders
   - Account Information
6. **Checkout Page**: Complete purchase flow
7. **Journal Pages**: Cultural stories and articles
8. **About Page**: Brand story and mission
9. **Contact Page**: Contact form and information
10. **Policy Pages**: Terms, privacy, refunds, etc.

## Key Features

- **Responsive Design**: Mobile-first approach with responsive components
- **Theme Support**: Light and dark mode with theme toggle
- **Cart Drawer**: Slides from right on desktop, bottom on mobile
- **Cultural Integration**: Design elements rooted in Indian cultural aesthetics
- **Accessibility**: ARIA attributes, keyboard navigation, and semantic HTML
- **SEO Optimization**: Proper meta tags and semantic structure

## Development Setup

1. **Clone the repository**:
   \`\`\`bash
   git clone https://github.com/your-username/thahrav-website.git
   cd thahrav-website
   \`\`\`

2. **Install dependencies**:
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Styling Guidelines

- **Theme**: Uses the default Shadcn theme without overrides
- **Typography**: 
  - Sans-serif (Inter) for body text
  - Serif (Cormorant Garamond) for headings
- **Colors**: Defined in `tailwind.config.ts` using hex codes
- **Cultural Elements**: Subtle integration of Indian cultural aesthetics

## Naming Conventions

- **Files**: Kebab-case for component files (e.g., `cart-drawer.tsx`)
- **Components**: PascalCase for component names (e.g., `CartDrawer`)
- **Functions**: camelCase for function names (e.g., `handleSubmit`)
- **CSS Classes**: Tailwind utility classes with occasional custom classes in kebab-case

## Backend Integration

This frontend project is designed to work with a RESTful API backend. See `Backend.md` for required API endpoints and integration points.

## User Flow

For detailed user journey flows, see `Flow.md`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

This project follows WCAG 2.1 AA standards:
- Semantic HTML
- ARIA attributes where necessary
- Keyboard navigation
- Sufficient color contrast
- Screen reader compatibility

## SEO Considerations

- Semantic HTML structure
- Proper heading hierarchy
- Meta tags for pages
- Responsive design (mobile-friendly)
- Optimized image loading
