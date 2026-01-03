# Party Obrt - Event Planning App

A modern web application for Party Obrt, an event planning service that helps customers book and organize memorable parties and events.

## 🚀 Features

- Responsive design that works on all devices
- Interactive package selection
- Contact form for event inquiries
- Modern UI with smooth animations
- Easy deployment with Vercel

## 🛠 Technologies Used

- React 18
- Vite
- CSS3 (with modern features like CSS Grid and Flexbox)
- Vercel (for deployment)

## 📦 Project Structure

```
skokoland/
├── frontend/              # Frontend React application
│   ├── public/            # Static files
│   ├── src/               # Source files
│   │   ├── components/    # Reusable components
│   │   ├── App.jsx        # Main App component
│   │   ├── main.jsx       # Application entry point
│   │   └── index.html     # HTML template
│   ├── vercel.json        # Vercel configuration
│   └── package.json       # Frontend dependencies
└── backend/               # Backend server (if applicable)
    ├── index.js
    └── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/party-obrt.git
   cd party-obrt/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

## 🚀 Deployment

This project is set up for deployment on Vercel. Follow these steps to deploy:

1. Push your code to a GitHub, GitLab, or Bitbucket repository
2. Sign in to [Vercel](https://vercel.com)
3. Click "New Project" and import your repository
4. Configure the project with these settings:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. Click "Deploy"

The application will be deployed and you'll receive a URL where it's hosted.

## 🛠 Build for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

This will create a `dist` directory with the production-ready files.

## 🌟 Features in Detail

### Package Selection
- Browse different party packages
- View package details and pricing
- Interactive selection with visual feedback

### Contact Form
- Easy-to-use contact form
- Form validation
- Responsive design for all devices

### Modern UI/UX
- Clean and intuitive interface
- Smooth animations and transitions
- Mobile-first responsive design

## 🔧 Environment Variables

Create a `.env` file in the `frontend` directory with the following variables:

```env
VITE_API_URL=your_api_url_here
```

## 📝 Available Scripts

In the project directory, you can run:

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/yourusername/party-obrt](https://github.com/yourusername/party-obrt)
