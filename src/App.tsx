import { useState, useEffect } from 'react';
import { BackgroundGlow } from './components/BackgroundGlow';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { PlaceholderToast } from './components/PlaceholderToast';
import type { PlaceholderNotice } from './components/PlaceholderToast';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [toastNotice, setToastNotice] = useState<PlaceholderNotice>({
    isOpen: false,
    title: '',
    message: '',
    filePath: '',
  });

  // Track active section for navigation
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'experience'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handler for placeholder link alerts
  const showPlaceholderNotice = (
    type: 'github' | 'linkedin' | 'email' | 'demo',
    itemName?: string
  ) => {
    let title = 'Sample Placeholder Link';
    let message = '';
    let filePath = 'src/data/projects.ts';

    if (type === 'github') {
      title = itemName ? `${itemName} Repository Placeholder` : 'GitHub Profile Placeholder';
      message = itemName
        ? `The source code for "${itemName}" is a portfolio project entry. Replace the repository URL with your actual public repository when ready.`
        : 'This link points to your personal GitHub placeholder. Update it with your real GitHub handle.';
      filePath = itemName ? 'src/data/projects.ts' : 'src/components/Hero.tsx / Contact.tsx';
    } else if (type === 'demo') {
      title = itemName ? `${itemName} Live Demo Placeholder` : 'Live Demo Staging';
      message = `This live demo link for "${itemName}" is marked as a placeholder. Add your deployed Vercel, Netlify, or AWS production link when staged.`;
      filePath = 'src/data/projects.ts';
    } else if (type === 'linkedin') {
      title = 'LinkedIn Profile Placeholder';
      message = 'This link points to a placeholder URL. Update it with your active LinkedIn profile link in the contact cards and footer.';
      filePath = 'src/sections/Contact.tsx';
    } else if (type === 'email') {
      title = 'Email Address Placeholder';
      message = 'The direct email address (jhanvi.zala@example.com) is currently a placeholder. Update it with your preferred professional email.';
      filePath = 'src/sections/Contact.tsx';
    }

    setToastNotice({
      isOpen: true,
      title,
      message,
      filePath,
    });

    // Auto dismiss after 6 seconds
    setTimeout(() => {
      setToastNotice((prev) => ({ ...prev, isOpen: false }));
    }, 6000);
  };

  return (
    <div className="min-h-screen bg-[#08070c] text-[#f1f0f7] selection:bg-purple-600 selection:text-white relative">
      {/* Subtle Purple Radial Atmosphere */}
      <BackgroundGlow />

      {/* Sticky Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Area */}
      <main id="main-content" className="relative z-10">
        <Hero
          onOpenResume={() => setIsResumeModalOpen(true)}
          onPlaceholderNotice={(type) => showPlaceholderNotice(type)}
        />
        <About />
        <Skills />
        <Projects
          onPlaceholderNotice={(type, name) => showPlaceholderNotice(type, name)}
        />
        <Experience />
        
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Preview Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Interactive Placeholder Notification Toast */}
      <PlaceholderToast
        notice={toastNotice}
        onClose={() => setToastNotice((prev) => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
}

export default App;
