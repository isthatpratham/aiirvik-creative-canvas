Ongoing project...
Updates Soon...
# 🧠 Aiirvik Creative Canvas

**Aiirvik Creative Canvas** is a Vite + React + TypeScript project designed to be a fully responsive, modern, and modular creative portfolio platform. Built using TailwindCSS and shadcn/ui components, it is still **under active development** and evolving with more features, animations, and dynamic integrations.

## 🚧 Project Status

> **This project is currently under active development.**  
> Core layout and structure are complete. Some sections are being optimized, and feature integration is ongoing. Expect frequent updates and commits.

## 🛠️ Tech Stack

- **Framework**: [React 18](https://reactjs.org/)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Form Handling**: React Hook Form + Zod
- **Animation**: Framer Motion
- **Email**: EmailJS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Data & Validation**: Zod, React Query
- **Additional UI**: Radix UI, Recharts, Date-fns, Sonner

## 📁 Folder Structure (Simplified)

```
src/
│
├── components/         → Reusable UI components
├── pages/              → Page-level components (e.g., Home, Contact)
├── hooks/              → Custom React hooks
├── utils/              → Utility functions
├── assets/             → Images, icons, static files
├── styles/             → Tailwind setup & custom styling
├── routes/             → App routing config
└── main.tsx            → App entry point
```

## 🚀 Getting Started

1. **Clone the repo:**

```bash
git clone https://github.com/your-username/aiirvik-creative-canvas.git
cd aiirvik-creative-canvas
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run development server:**

```bash
npm run dev
```

4. **Open in browser:**
```
http://localhost:5173/
```

## 📬 Contact Form Setup

This project uses **EmailJS** for contact form functionality.  
To use it:

1. Sign up at [https://emailjs.com](https://emailjs.com)
2. Create a template with variables like `from_name`, `time`, and `message`
3. Add your public key & service ID in the `.env` file:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🧪 Planned Features

- [x] Light/Dark mode toggle
- [x] Animated page transitions
- [x] Contact form with EmailJS
- [ ] Project gallery with filter/sort
- [ ] Responsive mobile nav
- [ ] Smooth scroll and scroll animations
- [ ] Deployment via Vercel/Netlify

## 📄 License

This project is currently **private** and not open for redistribution.  
It may be published under a license in the future after development is complete.
