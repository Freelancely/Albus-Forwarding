# Albus Forwarding - Professional Logistics Website

A modern, responsive website for Albus Forwarding Pvt. Ltd., a Nepal-based freight forwarding and logistics company.

## Features

- **Responsive Design**: Mobile-first approach with full responsiveness across all devices
- **Professional Layout**: Clean, corporate design with Navy Blue and Orange color scheme
- **Multiple Pages**: Home, About Us, Services, Team, and Contact pages
- **Contact Form**: Functional contact form with email integration
- **Hero Section**: Eye-catching hero with background image and overlay
- **Service Showcase**: Detailed service offerings with descriptions
- **Team Profiles**: Professional team member profiles with expertise areas
- **Embedded Map**: Google Maps integration on contact page

## Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Font**: Geist (Google Fonts)

## Installation & Setup

### Prerequisites

- Node.js 18+ installed on your system
- npm or yarn package manager

### Step 1: Extract the Project

\`\`\`bash
# Extract the downloaded ZIP file
unzip albus-forwarding.zip
cd albus-forwarding
\`\`\`

### Step 2: Install Dependencies

\`\`\`bash
# Using npm
npm install

# Or using yarn
yarn install

# Or using pnpm
pnpm install
\`\`\`

### Step 3: Set Up Environment Variables

Create a `.env.local` file in the root directory (optional for basic functionality):

\`\`\`env
# Add any required environment variables here
# For contact form email functionality, you may need to add:
# NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
\`\`\`

### Step 4: Run the Development Server

\`\`\`bash
# Using npm
npm run dev

# Or using yarn
yarn dev

# Or using pnpm
pnpm dev
\`\`\`

The application will start on `http://localhost:3000`

### Step 5: Build for Production

\`\`\`bash
# Using npm
npm run build
npm start

# Or using yarn
yarn build
yarn start

# Or using pnpm
pnpm build
pnpm start
\`\`\`

## Project Structure

\`\`\`
albus-forwarding/
├── app/
│   ├── page.tsx                 # Home page
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   ├── about/
│   │   └── page.tsx             # About Us page
│   ├── services/
│   │   └── page.tsx             # Services page
│   ├── team/
│   │   └── page.tsx             # Team page
│   ├── contact/
│   │   └── page.tsx             # Contact page
│   └── api/
│       └── contact/
│           └── route.ts         # Contact form API endpoint
├── components/
│   ├── header.tsx               # Navigation header
│   └── footer.tsx               # Footer component
├── public/
│   ├── hero-logistics-bg.jpg    # Hero section background
│   └── [other images]           # Team and service images
├── package.json
├── tsconfig.json
└── README.md
\`\`\`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Update Company Information

Edit the following files to customize company details:

- **Header/Footer**: `components/header.tsx` and `components/footer.tsx`
- **Contact Info**: `app/contact/page.tsx`
- **Team Members**: `app/team/page.tsx`
- **Services**: `app/services/page.tsx`

### Change Colors

Update the color variables in `app/globals.css`:

\`\`\`css
--primary: oklch(0.1 0.05 260);      /* Navy Blue */
--accent: oklch(0.65 0.2 40);        /* Orange */
\`\`\`

### Update Hero Background Image

Replace `public/hero-logistics-bg.jpg` with your own image, or update the path in `app/globals.css`:

\`\`\`css
.hero-section {
  background-image: url('/your-image.jpg');
}
\`\`\`

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and import your repository
4. Vercel will automatically detect Next.js and configure the build settings
5. Click "Deploy"

### Deploy to Other Platforms

The project can be deployed to any platform that supports Next.js:

- **Netlify**: Follow their Next.js deployment guide
- **AWS Amplify**: Connect your GitHub repository
- **DigitalOcean**: Use their App Platform
- **Self-hosted**: Build and run on your own server

## Contact Form Setup

The contact form sends data to `/api/contact`. To enable email notifications:

1. Update the API route in `app/api/contact/route.ts`
2. Add your email service credentials to `.env.local`
3. Configure your preferred email service (SendGrid, Mailgun, etc.)

## Troubleshooting

### Port 3000 Already in Use

\`\`\`bash
# Use a different port
npm run dev -- -p 3001
\`\`\`

### Dependencies Installation Issues

\`\`\`bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
\`\`\`

### Build Errors

\`\`\`bash
# Clear Next.js cache
rm -rf .next
npm run build
\`\`\`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary to Albus Forwarding Pvt. Ltd.

## Support

For issues or questions, please contact the development team or visit the contact page on the website.

---

**Last Updated**: October 2025