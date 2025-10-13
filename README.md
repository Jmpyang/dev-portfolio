# Professional Developer Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean design, dark mode support, and smooth animations.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful layouts on all devices
- **Dark Mode**: Toggle between light and dark themes with system preference support
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Interactive Components**: Hover effects, transitions, and modern UI patterns
- **Performance Optimized**: Fast loading times and SEO-friendly
- **Accessible**: Built with accessibility best practices

## 🛠️ Technologies Used

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes for dark mode
- **Build Tools**: PostCSS, Autoprefixer
- **Development**: ESLint, TypeScript compiler

## 🏃‍♂️ Getting Started

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd dev-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and visit `http://localhost:3000`

## 📁 Project Structure

```
dev-portfolio/
├── src/
│   ├── app/                  # Next.js app directory
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Home page
│   ├── components/           # React components
│   │   ├── Header.tsx        # Navigation header
│   │   ├── Hero.tsx          # Hero section
│   │   ├── About.tsx         # About section
│   │   ├── Skills.tsx        # Skills section
│   │   ├── Projects.tsx      # Projects showcase
│   │   ├── Contact.tsx       # Contact form
│   │   ├── Footer.tsx        # Site footer
│   │   └── theme-provider.tsx # Dark mode provider
│   ├── lib/                  # Utility functions
│   ├── styles/               # Additional styles
│   └── types/                # TypeScript types
├── public/                   # Static assets
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies and scripts
```

## 🎨 Customization

### Personal Information
Update the following components with your information:
- `src/components/Hero.tsx` - Name, title, description
- `src/components/About.tsx` - Bio, skills, technologies
- `src/components/Contact.tsx` - Contact information
- `src/components/Projects.tsx` - Your projects and demos

### Styling
- Modify `tailwind.config.js` for custom colors and themes
- Update `src/app/globals.css` for custom CSS variables
- Customize components' styling in their respective files

### Content
- Add your projects to the Projects component
- Update skills and technologies in the Skills component
- Customize contact information and social links

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler

## 🚀 Deployment

This project is ready to be deployed on platforms like:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- **AWS Amplify**

For Vercel deployment:
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues and pull requests.

---

Built with ❤️ using Next.js and Tailwind CSS