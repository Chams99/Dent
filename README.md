# Dent - Premium Dental Care Website

A modern, responsive dental marketing website built with Next.js 14+, Tailwind CSS, and Framer Motion. Inspired by SmileWhite.co.uk with 2025 industry best practices for performance, SEO, scalability, and maintainability.

## 🚀 Features

### Core Features
- **Modern Design**: Elegant, professional design with smooth animations
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Built-in SEO with metadata, structured data, and performance optimization
- **Fast Performance**: Optimized images, code splitting, and modern web technologies
- **Accessibility**: WCAG 2.2 compliant with semantic HTML and ARIA labels

### Technical Features
- **Next.js 14+**: App Router, Server Components, and modern React patterns
- **TypeScript**: Full type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS with custom design system
- **Framer Motion**: Smooth animations and micro-interactions
- **React Hook Form**: Form validation with Zod schema validation
- **Lucide React**: Beautiful, customizable icons

### Pages & Sections
- **Home Page**: Hero section, services showcase, testimonials, contact form
- **Contact Page**: Contact form, location information, business hours
- **Navigation**: Sticky navigation with mobile menu
- **Footer**: Comprehensive footer with links and contact information

## 🛠️ Technology Stack

### Frontend
- **Next.js 14+**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Hook Form**: Form handling and validation
- **Zod**: Schema validation
- **Lucide React**: Icon library

### Development Tools
- **ESLint**: Code linting and formatting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

### Performance & SEO
- **Next.js Image**: Optimized image handling
- **Font Optimization**: Google Fonts with display swap
- **Metadata API**: Dynamic SEO metadata
- **Structured Data**: JSON-LD for search engines

## 📦 Installation

### Prerequisites
- Node.js 18.0.0 or higher
- npm, yarn, or pnpm

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dent-marketing-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` directory to Netlify

### Manual Deployment
```bash
npm run build
npm run start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── contact/           # Contact page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.tsx     # Navigation component
│   ├── HeroSection.tsx    # Hero section
│   ├── ServicesSection.tsx # Services showcase
│   ├── TestimonialsSection.tsx # Customer testimonials
│   ├── ContactForm.tsx    # Contact form
│   └── Footer.tsx         # Footer component
├── lib/                   # Utility functions
│   └── utils.ts           # Common utilities
└── types/                 # TypeScript types
    └── index.ts           # Type definitions
```

## 🎨 Customization

### Colors & Branding
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your brand colors
  },
  secondary: {
    // Secondary colors
  },
}
```

### Content Management
- **Text Content**: Update content in component files
- **Images**: Replace placeholder images in `/public` directory
- **Contact Information**: Update phone, email, and address in components

### Adding New Pages
1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Export metadata for SEO
4. Import and use components as needed

## 📊 Performance Optimization

### Built-in Optimizations
- **Image Optimization**: Next.js Image component with WebP/AVIF
- **Code Splitting**: Automatic route-based code splitting
- **Font Optimization**: Google Fonts with display swap
- **Bundle Analysis**: Built-in bundle analyzer

### Performance Monitoring
- **Core Web Vitals**: Built-in monitoring
- **Lighthouse**: Regular performance audits
- **Bundle Size**: Automatic bundle size tracking

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript check
```

### Code Quality
- **ESLint**: Code linting with Next.js and TypeScript rules
- **TypeScript**: Strict type checking
- **Prettier**: Code formatting (recommended)

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Mobile-First Approach
- All components are mobile-first
- Progressive enhancement for larger screens
- Touch-friendly interactions

## 🔍 SEO Features

### Built-in SEO
- **Metadata API**: Dynamic page titles and descriptions
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter sharing optimization
- **Structured Data**: JSON-LD for search engines
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling optimization

### SEO Best Practices
- Semantic HTML structure
- Alt text for all images
- Proper heading hierarchy
- Fast loading times
- Mobile-friendly design

## 🎯 Accessibility

### WCAG 2.2 Compliance
- **Semantic HTML**: Proper use of HTML elements
- **ARIA Labels**: Screen reader support
- **Focus Management**: Keyboard navigation
- **Color Contrast**: WCAG AA compliant
- **Alt Text**: Descriptive image alt text

### Accessibility Features
- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support
- Focus indicators
- Skip navigation links

## 🔒 Security

### Security Features
- **Content Security Policy**: Built-in CSP headers
- **HTTPS**: Secure by default on Vercel/Netlify
- **Input Validation**: Form validation with Zod
- **XSS Protection**: Built-in XSS protection

## 📈 Analytics & Tracking

### Recommended Tools
- **Google Analytics**: Web analytics
- **Google Search Console**: SEO monitoring
- **Hotjar**: User behavior analysis
- **Google Tag Manager**: Tag management

## 🚀 Future Enhancements

### Planned Features
- **CMS Integration**: Headless CMS for content management
- **Blog System**: SEO-optimized blog with MDX
- **Appointment Booking**: Calendar integration
- **Online Payments**: Payment processing
- **Patient Portal**: Secure patient access
- **Multi-language**: Internationalization support

### Advanced Features
- **Dark Mode**: Theme switching
- **PWA**: Progressive Web App features
- **Offline Support**: Service worker implementation
- **Push Notifications**: Appointment reminders

## 📞 Support

### Getting Help
- **Documentation**: Check this README first
- **Issues**: Create GitHub issues for bugs
- **Discussions**: Use GitHub discussions for questions

### Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🏥 Dental Industry Compliance

### HIPAA Considerations
- **Data Protection**: Secure form handling
- **Privacy Policy**: Required for dental practices
- **SSL Certificate**: HTTPS encryption
- **Data Retention**: Proper data handling policies

### Medical Marketing Compliance
- **ADA Guidelines**: Americans with Disabilities Act compliance
- **Medical Claims**: Proper disclaimers and legal notices
- **Patient Privacy**: HIPAA-compliant data handling

## 💰 Pricing & Timeline

### Estimated Costs
- **Development**: $3,000 - $5,000
- **Design**: $1,000 - $2,000
- **Content**: $500 - $1,000
- **Hosting**: $20 - $50/month
- **Maintenance**: $100 - $200/month

### Timeline
- **Development**: 10-14 days
- **Content Creation**: 3-5 days
- **Testing & Launch**: 2-3 days
- **Total**: 15-22 days

## 🎉 Getting Started

1. **Review Requirements**: Understand your specific needs
2. **Customize Content**: Update text, images, and contact info
3. **Configure Domain**: Set up your domain and hosting
4. **Launch**: Deploy and go live
5. **Monitor**: Track performance and user engagement

---

Built with ❤️ using Next.js 14+ and modern web technologies. # Dent
