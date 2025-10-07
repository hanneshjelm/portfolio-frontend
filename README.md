# Portfolio Frontend

Frontend for my personal portfolio [website](https://hanneshjelm.se/). A modern, responsive single-page application showcasing my projects, skills, and professional experience.

##  Technologies

- React
- TypeScript
- CSS
- Vite

##  Features

- Responsive design for all devices
- Smooth scroll navigation with active section highlighting
- Scroll-reveal animations
- Contact form with backend integration
- Project showcase with hover effects
- Skills display with technology logos
- Downloadable resume


##  Setup

1. **Clone the repository**
   
   ```bash
   git clone https://github.com/hanneshjelm/portfolio-frontend.git
   cd portfolio-frontend
   ```

2. **Install dependencies**
   
   ```bash
   npm install
   ```

3. **Run the development server**
   
   ```bash
   npm run dev
   ```

4. **Build for production**
   
   ```bash
   npm run build
   ```

##  Backend Integration

The contact form integrates with the [portfolio-backend](https://github.com/hanneshjelm/portfolio-backend) service:

```typescript
fetch("${BACKEND_URL}/contact/send-email", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData)
})
```

##  Contact

For questions or feedback, reach out via my portfolio [website](https://hanneshjelm.se/).
