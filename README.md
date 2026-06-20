# 🚀 Modern Web Portfolio Template - Project Documentation

## 📋 Project Overview

This is a cutting-edge web portfolio template built with Next.js 16 and React 19, featuring advanced animations, interactive elements, and a modern dark theme design. The template is designed to showcase creative work, skills, and projects in an engaging and visually stunning way.

[Demo](https://agnetix-maket.vercel.app/)

## 🛠️ Technologies & Tools Used

### Core Framework & Languages
- **Next.js 16.2.6** - React framework for server-side rendering and static site generation
- **React 19.2.4** - JavaScript library for building user interfaces
- **TypeScript** - Strongly typed JavaScript for better code quality and maintainability

### UI & Styling
- **Tailwind CSS v4** - Utility-first CSS framework for rapid UI development
- **shadcn/ui** - Beautifully designed component library
- **Radix UI** - Unstyled, accessible UI primitives
- **Tailwind Merge** - Utility for merging Tailwind CSS classes
- **tw-animate-css** - CSS animations for Tailwind

### Animation & Visual Effects
- **GSAP (GreenSock Animation Platform)** - Professional-grade animation library
- **Motion** - Animation library for React
- **OGL (OpenGL for Web)** - WebGL-based 3D graphics library
- **Custom Canvas Animations** - Interactive click spark effects and light rays

### Icons & Assets
- **Lucide React** - Beautifully crafted icon library
- **Tabler Icons React** - Additional icon set
- **Custom SVG Icons** - Project-specific icons in `/shared/icons/`

### Development Tools
- **ESLint** - JavaScript/TypeScript linting
- **Prettier** - Code formatting
- **Prettier Plugin Tailwind CSS** - Tailwind-specific formatting
- **PNPM** - Fast, disk space efficient package manager

## 🎨 Key Features & Components

### Interactive Visual Effects
- **ClickSpark Component** - Creates sparkling particle effects on user clicks
- **LightRays Component** - Dynamic light ray animations that respond to mouse movement
- **Motion Animations** - Smooth page transitions and element animations

### UI Components
- **Bento Grid** - Modern card layout system
- **Comet Card** - Animated card component with visual effects
- **Noise Background** - Subtle noise texture for depth
- **Parallax Effects** - Depth-creating scrolling animations
- **Scroll Reveal** - Elements that animate into view on scroll
- **Spotlight Card** - Highlighted card with focus effects
- **Gradient Text** - Stylish text with gradient colors
- **Shiny Text** - Metallic/shiny text effects

### Widget System
The project uses a modular widget architecture:
- **Header Widget** - Navigation and branding
- **Main Widget** - Primary content area
- **Footer Widget** - Footer information and links
- **Pricing Selection Widget** - Interactive pricing options

### Theme System
- **Next Themes** - Dark/light theme switching
- **Theme Provider** - Consistent theming across components

## 📁 Project Structure

```
template/
├── app/                  # Next.js app directory
│   ├── favicon.ico       # Site favicon
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   ├── style/            # CSS styles
│   └── *.tsx             # Custom components
├── hooks/                # React hooks
├── lib/                  # Utility functions
├── public/               # Public assets
├── shared/               # Shared resources
│   ├── api/              # API utilities
│   └── icons/            # SVG icons
├── view/                 # Main view components
├── widgets/              # Widget components
└── *.config.*            # Configuration files
```

## 🚀 Setup & Installation

### Prerequisites
- Node.js v18+ (LTS recommended)
- PNPM package manager
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation Steps

1. **Clone the repository:**
```bash
git clone https://github.com/ZxcAntiimage/Agnetix-maket
```

2. **Install dependencies:**
```bash
pnpm install
```

3. **Run development server:**
```bash
pnpm dev
```

4. **Build for production:**
```bash
pnpm build
pnpm start
```

### Available Scripts
- `pnpm dev` - Start development server
- `pnpm build` - Create production build
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint (with auto-fix where possible)
- `pnpm lint:fix` - Run ESLint and automatically fix fixable issues
- `pnpm format` - Format code with Prettier
- `pnpm typecheck` - TypeScript type checking

## 🎯 Customization Guide

### Changing Colors & Theme
Edit the `globals.css` file to modify the color scheme:
```css
:root {
  --background: #000314; /* Dark background */
  --text: #ffffff; /* White text */
  --primary: #8800ff; /* Primary accent color */
}
```

### Adding New Components
1. Create new component files in the `components/` directory
2. Import and use them in your pages or widgets
3. Follow the existing naming conventions and TypeScript patterns

### Modifying Animations
- Adjust animation parameters in component props (e.g., `ClickSpark`, `LightRays`)
- Modify GSAP animations in the respective component files
- Change motion transitions in the view components

## 💡 Best Practices

### Performance Optimization
- Use Next.js static generation for content that doesn't change often
- Implement code splitting for large components
- Optimize images and assets
- Use memoization for expensive computations

### Code Quality
- Follow TypeScript best practices
- Use ESLint and Prettier for consistent code style
- Write modular, reusable components
- Document complex logic with comments

### Accessibility
- Ensure all interactive elements have proper ARIA attributes
- Maintain sufficient color contrast
- Provide keyboard navigation support
- Use semantic HTML where possible

## 📸 Screenshots & Visual Elements

The template features:
- **Dark theme** with deep blue/black background
- **Interactive particle effects** that respond to user clicks
- **Dynamic light rays** that follow mouse movement
- **Smooth animations** for page transitions
- **Modern card layouts** with hover effects
- **Gradient text** and shiny elements
- **Responsive design** that works on all devices

## 🎓 Learning Resources

### Next.js Documentation
- [Next.js Official Docs](https://nextjs.org/docs)
- [Next.js GitHub](https://github.com/vercel/next.js)

### Animation Libraries
- [GSAP Documentation](https://greensock.com/docs/)
- [Motion Documentation](https://motion.dev/)

### UI Components
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Radix UI Documentation](https://www.radix-ui.com/)
- [React Bits](https://reactbits.dev/)

## 🔧 Troubleshooting

### Common Issues

**1. Animation Performance Issues**
- Reduce the number of particles in `ClickSpark` component
- Simplify GSAP animations
- Use `will-change` CSS property for animated elements

**2. Build Errors**
- Run `pnpm install` to ensure all dependencies are installed
- Check Node.js and PNPM versions
- Clear cache with `pnpm cache clean`

**3. Styling Issues**
- Ensure Tailwind CSS is properly configured
- Check for CSS class conflicts
- Verify theme provider is wrapped around the app

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- shadcn for the beautiful UI components
- GSAP team for the powerful animation library
- All open-source contributors whose libraries make this project possible

## 🎯 Portfolio Presentation

This template is perfect for:
- **Developers** showcasing their coding skills
- **Designers** displaying their creative work
- **Agencies** presenting their services
- **Freelancers** building their personal brand
- **Startups** creating an impressive online presence

### Why This Template Stands Out

✅ **Modern Tech Stack** - Built with the latest versions of Next.js and React
✅ **Stunning Visuals** - Advanced animations and effects that captivate visitors
✅ **Performance Optimized** - Fast loading and smooth interactions
✅ **Fully Customizable** - Easy to modify and extend
✅ **Responsive Design** - Looks great on all devices
✅ **Accessible** - Built with web accessibility in mind
✅ **SEO Friendly** - Next.js provides excellent SEO capabilities

### Showcase Your Work

The template includes dedicated sections for:
- **Hero section** with animated background
- **Skills showcase** with interactive elements
- **Project portfolio** with card layouts
- **Services/pricing** section
- **Contact information** with call-to-action
