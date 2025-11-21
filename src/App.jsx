import React, { useState, useEffect } from 'react';
import { MBTI_TYPES } from './data';
import { getRandomActivities } from './data/activities';
import { MBTICard } from './components/MBTICard';
import { ActivityCard } from './components/ActivityCard';
import { Background } from './components/Background';
import { VisualFlow } from './components/VisualFlow';
import { VibeMeter } from './components/VibeMeter';
import { IconUtils } from './components/IconUtils';
import { MoodCard } from './components/MoodCard';
import { MOODS } from './data/moods';

function App() {
  // State
  const [view, setView] = useState('home');
  const [selectedType, setSelectedType] = useState(null);
  const [selectedMood, setSelectedMood] = useState(null);
  const [generatedActivities, setGeneratedActivities] = useState([]);
  const [currentActivity, setCurrentActivity] = useState(null);
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('mbti-favorites')) || []);
  const [settings, setSettings] = useState(() => JSON.parse(localStorage.getItem('mbti-settings')) || { animationsEnabled: true });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('mbti-dark-mode');
    return saved ? JSON.parse(saved) : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Persistence
  useEffect(() => {
    localStorage.setItem('mbti-favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('mbti-settings', JSON.stringify(settings));
    document.body.classList.toggle('no-animations', !settings.animationsEnabled);
  }, [settings]);

  useEffect(() => {
    localStorage.setItem('mbti-dark-mode', JSON.stringify(darkMode));
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  // Handlers
  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setSelectedMood(null); // Clear mood
    setView('suggestions');

    // Get random activities from database
    const activities = getRandomActivities(type.code, 4);
    setGeneratedActivities(activities);
  };

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    setSelectedType(null); // Clear type
    setView('suggestions');

    // For now, we'll just grab random activities from the DB to simulate
    // In a real app, we'd filter by vibe or call an API
    // Using INFP/INFJ activities as they fit many of these moods well
    const activities = getRandomActivities('INFP', 4);
    setGeneratedActivities(activities);
  };

  const handleRegenerate = () => {
    // Get different random activities from database
    const code = selectedType ? selectedType.code : 'INFP'; // Fallback for mood
    const activities = getRandomActivities(code, 4);
    setGeneratedActivities(activities);
  };

  const toggleFavorite = (activity) => {
    setFavorites(prev => {
      const exists = prev.find(f => f.id === activity.id);
      if (exists) return prev.filter(f => f.id !== activity.id);
      return [...prev, { ...activity, savedAt: Date.now() }];
    });
  };

  const toggleTheme = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    const overlay = document.createElement('div');
    overlay.className = 'theme-transition-overlay';
    overlay.style.setProperty('--click-x', `${x}px`);
    overlay.style.setProperty('--click-y', `${y}px`);
    document.body.appendChild(overlay);

    // Start animation
    requestAnimationFrame(() => {
      overlay.classList.add('animating-theme');
    });

    setTimeout(() => {
      setDarkMode(!darkMode);
    }, 300); // Change state halfway through

    setTimeout(() => {
      document.body.removeChild(overlay);
    }, 600);
  };

  // Views
  const renderHome = () => (
    <>
      <div className="glass-panel" style={{ marginBottom: 48, textAlign: 'center', padding: '40px' }}>
        <h2 style={{ marginBottom: 16, fontSize: '2rem' }}>How do you want to discover?</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginTop: 32 }}>
          <button
            className="glass-strong"
            style={{ padding: '16px 32px', borderRadius: 24, fontSize: '1.1rem', fontWeight: 600 }}
            onClick={() => document.getElementById('mbti-section').scrollIntoView({ behavior: 'smooth' })}
          >
            By Personality Type
          </button>
          <button
            className="glass-strong"
            style={{ padding: '16px 32px', borderRadius: 24, fontSize: '1.1rem', fontWeight: 600 }}
            onClick={() => setView('mood-selection')}
          >
            By Current Mood
          </button>
        </div>
      </div>

      <div id="mbti-section">
        <h3 style={{ textAlign: 'center', marginBottom: 32, opacity: 0.8 }}>Select Your Personality Type</h3>
        <div className="mbti-grid">
          {MBTI_TYPES.map((type, index) => (
            <MBTICard
              key={type.code}
              type={type}
              index={index}
              onClick={handleTypeSelect}
            />
          ))}
        </div>
      </div>
    </>
  );

  const renderMoodSelection = () => (
    <>
      <div className="suggestions-header">
        <button className="glass-light back-btn" onClick={() => setView('home')}>
          <IconUtils.Back size={20} /> Back
        </button>
        <div className="glass-panel" style={{ padding: '8px 24px' }}>
          <h2>How are you feeling?</h2>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 24,
        padding: '20px 0'
      }}>
        {MOODS.map((mood, index) => (
          <MoodCard
            key={mood.id}
            mood={mood}
            index={index}
            onClick={handleMoodSelect}
          />
        ))}
      </div>
    </>
  );

  const renderSuggestions = () => (
    <>
      <div className="suggestions-header">
        <button className="glass-light back-btn" onClick={() => setView('home')}>
          <IconUtils.Back size={20} /> Back
        </button>
        <div className="type-display glass-panel">
          {selectedType ? (
            <>
              <h2 style={{ color: `var(--color-${selectedType.color}-accent)` }}>{selectedType.code}</h2>
              <span>{selectedType.name}</span>
            </>
          ) : (
            <>
              <h2 style={{ color: '#fff' }}>{selectedMood?.name}</h2>
              <span>Activities</span>
            </>
          )}
        </div>
      </div>

      {generatedActivities.length === 0 ? (
        <div className="loading-container">
          <p className="loading-text">Select a personality type to see activities!</p>
        </div>
      ) : (
        <>
          <div className="activity-grid">
            {generatedActivities.map((act, index) => (
              <ActivityCard
                key={act.id}
                activity={act}
                typeColor={selectedType ? selectedType.color : 'infp'} // Fallback color
                index={index}
                isFavorite={favorites.some(f => f.id === act.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
          <div className="regen-container">
            <button className="glass-strong regen-btn" onClick={handleRegenerate}>
              <IconUtils.Refresh size={18} style={{ marginRight: 8 }} /> Generate New Ideas
            </button>
          </div>
        </>
      )}
    </>
  );

  const renderDetails = () => {
    if (!currentActivity) return null;
    return (
      <div style={{ position: 'relative', paddingBottom: 80 }}>
        {/* 1. Hero Section */}
        <div className="details-hero" style={{ marginBottom: 64, textAlign: 'center', paddingTop: 40 }}>
          <button
            className="glass-light back-btn"
            style={{ position: 'absolute', left: 0, top: 0 }}
            onClick={() => setView('suggestions')}
          >
            <IconUtils.Back size={20} /> Back
          </button>

          <h2 className="details-title" style={{
            fontSize: '2.5rem',
            marginBottom: 32,
            color: 'var(--type-accent)',
            maxWidth: 800,
            margin: '0 auto 32px'
          }}>
            {currentActivity.title}
          </h2>

          <div className="details-meta" style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 24,
            flexWrap: 'wrap'
          }}>
            <div className="glass-light vibe-badge" style={{ padding: '12px 24px', fontSize: '0.9rem', borderRadius: 20 }}>
              <IconUtils.Time size={18} style={{ marginRight: 8 }} /> {currentActivity.time}
            </div>
            <div className="glass-light vibe-badge" style={{ padding: '12px 24px', fontSize: '0.9rem', borderRadius: 20 }}>
              <IconUtils.Group size={18} style={{ marginRight: 8 }} /> {currentActivity.groupSize}
            </div>
            <div className="glass-light vibe-badge" style={{ padding: '12px 24px', fontSize: '0.9rem', borderRadius: 20 }}>
              <IconUtils.Energy size={18} style={{ marginRight: 8 }} /> {currentActivity.energy}
            </div>
          </div>
        </div>

        {/* 2. Description Section */}
        <div className="glass-panel" style={{
          maxWidth: 800,
          margin: '0 auto 64px',
          padding: 40,
          borderRadius: 24
        }}>
          <h3 style={{ marginBottom: 20, fontSize: '1.5rem' }}>About this Activity</h3>
          <p style={{ fontSize: '1.125rem', lineHeight: 1.8, marginBottom: 24 }}>
            {currentActivity.description}
          </p>
          <p style={{ fontSize: '1rem', opacity: 0.8, fontStyle: 'italic', borderLeft: '4px solid var(--type-accent)', paddingLeft: 16 }}>
            Why it fits: {currentActivity.reason}
          </p>
        </div>

        {/* 3. Activity Flow Section */}
        <div style={{ marginBottom: 64 }}>
          <h3 style={{ textAlign: 'center', fontSize: '1.75rem', marginBottom: 32 }}>How It Unfolds</h3>
          <div className="flow-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 32
          }}>
            {/* We'll map steps to Before/During/After if possible, or just display them nicely */}
            {currentActivity.steps.map((step, i) => (
              <div key={i} className="glass-panel" style={{ padding: 32, borderRadius: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{
                  width: 48, height: 48,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 20,
                  color: 'var(--type-accent)'
                }}>
                  {i === 0 ? <IconUtils.Before size={24} /> :
                    i === currentActivity.steps.length - 1 ? <IconUtils.After size={24} /> :
                      <IconUtils.During size={24} />}
                </div>
                <h4 style={{ marginBottom: 12 }}>Step {i + 1}</h4>
                <p style={{ lineHeight: 1.6 }}>{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Vibe Meter Section */}
        <div style={{ marginBottom: 64, display: 'flex', justifyContent: 'center' }}>
          <div className="glass-panel" style={{ maxWidth: 600, width: '100%', padding: 40, borderRadius: 24 }}>
            <h3 style={{ textAlign: 'center', marginBottom: 32 }}>Activity Vibe</h3>
            <VibeMeter energyLevel={currentActivity.energy} />
          </div>
        </div>

        {/* 5. Bottom Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
          <button
            className="glass-strong action-btn"
            style={{
              background: 'var(--type-color)',
              color: 'white',
              padding: '16px 48px',
              fontSize: '1.125rem',
              borderRadius: 28,
              width: '100%',
              maxWidth: 400,
              justifyContent: 'center'
            }}
            onClick={() => {
              toggleFavorite(currentActivity);
              // alert('Saved!'); // Removed alert for cleaner UX
            }}
          >
            <IconUtils.Heart size={24} fill={favorites.some(f => f.id === currentActivity.id) ? "currentColor" : "none"} />
            {favorites.some(f => f.id === currentActivity.id) ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>

          <div style={{ display: 'flex', gap: 16 }}>
            <button className="glass-light action-btn" onClick={() => setView('suggestions')}>
              <IconUtils.Back size={18} /> Back to Suggestions
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderFavorites = () => (
    <>
      <h2 style={{ marginBottom: 24 }}>Your Favorites <IconUtils.Heart size={24} fill="#ff4081" color="#ff4081" style={{ display: 'inline', verticalAlign: 'middle' }} /></h2>
      {favorites.length === 0 ? (
        <div className="glass-panel" style={{ textAlign: 'center', padding: 40 }}>
          <h3>No favorites yet</h3>
          <p>Go explore and save some cozy activities!</p>
          <button className="glass-light action-btn" style={{ marginTop: 20 }} onClick={() => setView('home')}>
            Start Exploring
          </button>
        </div>
      ) : (
        <div className="activity-grid">
          {favorites.map((act, index) => (
            <ActivityCard
              key={act.id}
              activity={act}
              typeColor="intj" // Fallback color since we don't store type
              index={index}
              isFavorite={true}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </>
  );

  const renderSettings = () => (
    <>
      <h2 style={{ marginBottom: 24 }}>Settings <IconUtils.Settings size={24} style={{ display: 'inline', verticalAlign: 'middle' }} /></h2>
      <div className="glass-panel">
        <div style={{ marginBottom: 24 }}>
          <h3>Visuals</h3>
          <label style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 12 }}>
            <input
              type="checkbox"
              checked={settings.animationsEnabled}
              onChange={(e) => setSettings({ ...settings, animationsEnabled: e.target.checked })}
            />
            <span>Enable Background Animations</span>
          </label>
        </div>
        <div>
          <h3>Data</h3>
          <button
            className="glass-light action-btn"
            style={{ background: 'rgba(255, 100, 100, 0.2)', color: '#d32f2f', marginTop: 12 }}
            onClick={() => {
              if (confirm('Clear all favorites?')) setFavorites([]);
            }}
          >
            Clear Favorites
          </button>
        </div>
      </div>

      {/* Designer Credit */}
      <div style={{ marginTop: 64, position: 'relative', padding: 48, textAlign: 'center', maxWidth: 600, margin: '64px auto 0' }}>
        <div className="glass-panel" style={{ position: 'relative', overflow: 'hidden', padding: 48 }}>
          {/* Subtle Constellation Background for Credit */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.3, pointerEvents: 'none' }}>
            {/* Simple static stars for the frame effect */}
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} style={{
                position: 'absolute',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: Math.random() * 3 + 1,
                height: Math.random() * 3 + 1,
                background: 'currentColor',
                borderRadius: '50%',
                opacity: Math.random() * 0.5 + 0.2
              }} />
            ))}
          </div>

          <p style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem', opacity: 0.6, marginBottom: 16 }}>Designed by</p>
          <a
            href="https://t.me/okayloy"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              fontSize: '1.5rem',
              fontWeight: 600,
              color: 'var(--type-accent, #c06bff)',
              textDecoration: 'none',
              marginBottom: 16,
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            @okayloy
          </a>
          <p style={{ fontStyle: 'italic', fontSize: '1.125rem', opacity: 0.8, fontFamily: 'serif' }}>
            "Show me the terror"
          </p>
        </div>
      </div>
    </>
  );

  return (
    <>
      <Background typeColor={selectedType?.color} darkMode={darkMode} />
      <div className="app-container">
        <header className="app-header glass-strong">
          <div className="logo" onClick={() => setView('home')} style={{ cursor: 'pointer' }}>
            {/* Logo icon removed or replaced with simple text/icon combo later */}
            <h1 className="brand-text">Cuz Boredom Kills Me</h1>
          </div>
          <nav className="app-nav">
            <button className="icon-btn" onClick={() => setView('favorites')}>
              <IconUtils.Heart size={20} />
            </button>
            <button className="icon-btn" onClick={toggleTheme}>
              {darkMode ? <IconUtils.Moon size={20} /> : <IconUtils.Sun size={20} />}
            </button>
            <button className="icon-btn" onClick={() => setView('settings')}>
              <IconUtils.Settings size={20} />
            </button>
          </nav>
        </header>

        <main id="main-content">
          {view === 'home' && renderHome()}
          {view === 'mood-selection' && renderMoodSelection()}
          {view === 'suggestions' && renderSuggestions()}
          {view === 'details' && renderDetails()}
          {view === 'favorites' && renderFavorites()}
          {view === 'settings' && renderSettings()}
        </main>
      </div>
    </>
  );
}

export default App;
