import { useState, useEffect } from 'react';
import Terminal from './components/Terminal';
import ProfileImg from './assets/profile.png';
import { Briefcase, Cpu, Users, Database, Globe } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';
import { content } from './data/translations';
import './App.css';

function App() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('pablo_lang') || 'es';
  });

  useEffect(() => {
    localStorage.setItem('pablo_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const currentContent = content[lang] || content.es;

  const highlightIcons = {
    data: <Database size={18} />,
    erp: <Briefcase size={18} />,
    automation: <Cpu size={18} />,
    leadership: <Users size={18} />
  };

  return (
    <div className="app-container">
      <main className="container">
        
        {/* Top bar with language switcher */}
        <div className="top-nav-bar">
          <div className="lang-switcher" role="group" aria-label="Language selector">
            <span className="lang-icon"><Globe size={15} /></span>
            <button
              type="button"
              className={`lang-btn ${lang === 'es' ? 'active' : ''}`}
              onClick={() => setLang('es')}
              aria-pressed={lang === 'es'}
            >
              ES
            </button>
            <span className="lang-divider">/</span>
            <button
              type="button"
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
          </div>
        </div>

        <div className="hero-section">
          <div className="profile-container">
            <img src={ProfileImg} alt="Pablo Carrasco" className="profile-img" />
          </div>

          <div className="hero-content">
            <h1>Pablo Carrasco González</h1>
            <h2>{currentContent.hero.subtitle}</h2>
            <p className="hero-bio">
              {currentContent.hero.bio}
            </p>

            <div className="hero-highlights">
              {currentContent.hero.highlights.map((item) => (
                <div key={item.key} className="highlight-item">
                  <span className="icon">{highlightIcons[item.key]}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Terminal lang={lang} onLanguageChange={setLang} />

      </main>

      <footer className="footer">
        <p>{currentContent.footer.builtWith(new Date().getFullYear())}</p>
      </footer>
      <Analytics />
    </div>
  );
}

export default App;
