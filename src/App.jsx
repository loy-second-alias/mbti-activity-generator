import React, { useState, useEffect } from 'react';
import { MBTI_TYPES } from './data';
import { getRandomActivities } from './data/activities';
import { MBTICard } from './components/MBTICard';
import { ActivityCard } from './components/ActivityCard';
import { Background } from './components/Background';
import { VisualFlow } from './components/VisualFlow';
import { VibeMeter } from './components/VibeMeter';
import { Heart, Settings, ArrowLeft, Loader } from 'lucide-react';

function App() {
  // State
  const [view, setView] = useState('home');
  const [selectedType, setSelectedType] = useState(null);
  const [generatedActivities, setGeneratedActivities] = useState([]);
  const [currentActivity, setCurrentActivity] = useState(null);
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('mbti-favorites')) || []);
  const [settings, setSettings] = useState(() => JSON.parse(localStorage.getItem('mbti-settings')) || { animationsEnabled: true });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Persistence
  useEffect(() => {
    localStorage.setItem('mbti-favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('mbti-settings', JSON.stringify(settings));
    document.body.classList.toggle('no-animations', !settings.animationsEnabled);
  }, [settings]);

  // Handlers
  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setView('suggestions');

    // Get random activities from database
    const activities = getRandomActivities(type.code, 4);
    setGeneratedActivities(activities);
  };

  const handleRegenerate = () => {
    // Get different random activities from database
    const activities = getRandomActivities(selectedType.code, 4);
    setGeneratedActivities(activities);
  };

  const toggleFavorite = (activity) => {
    setFavorites(prev => {
      const exists = prev.find(f => f.id === activity.id);
      if (exists) return prev.filter(f => f.id !== activity.id);
      return [...prev, { ...activity, savedAt: Date.now() }];
    });
  };

  // Views
  const renderHome = () => (
    <>
      <div className="glass-panel" style={{ marginBottom: 32, textAlign: 'center' }}>
        <h2 style={{ marginBottom: 8 }}>Discover Your Perfect Activities</h2>
        <p>Select your personality type to generate personalized suggestions.</p>
      </div>
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
    </>
  );

  const renderSuggestions = () => (
    <>
      <div className="suggestions-header">
        <button className="glass-light back-btn" onClick={() => setView('home')}>
          <ArrowLeft size={20} /> Back
        </button>
        <div className="type-display glass-panel">
          <h2 style={{ color: `var(--color-${selectedType.color}-accent)` }}>{selectedType.code}</h2>
          <span>{selectedType.name}</span>
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
                typeColor={selectedType.color}
                index={index}
                isFavorite={favorites.some(f => f.id === act.id)}
                onToggleFavorite={toggleFavorite}
                onDetails={(a) => {
                  setCurrentActivity(a);
                  setView('details');
                }}
              />
            ))}
          </div>
          <div className="regen-container">
            <button className="glass-strong regen-btn" onClick={handleRegenerate}>
              ✨ Generate New Ideas
            </button>
          </div>
        </>
      )}
    </>
  );

  const renderDetails = () => {
    if (!currentActivity) return null;
    return (
      <div style={{ position: 'relative' }}>
        <div className="details-hero">
          <button
            className="glass-light back-btn"
            style={{ position: 'absolute', left: 0, top: 0 }}
            onClick={() => setView('suggestions')}
          >
            <ArrowLeft size={20} /> Back
          </button>
          <h2 className="details-title" style={{ color: 'var(--type-accent)' }}>{currentActivity.title}</h2>
          <div className="details-meta">
            <span className="glass-light vibe-badge">⏱️ {currentActivity.time}</span>
            <span className="glass-light vibe-badge">👥 {currentActivity.groupSize}</span>
            <span className="glass-light vibe-badge">⚡ {currentActivity.energy}</span>
          </div>
        </div>

        <div className="details-content">
          <div className="glass-panel" style={{ marginBottom: 24 }}>
            <h3>About this Activity</h3>
            <p style={{ marginTop: 12, lineHeight: 1.6 }}>{currentActivity.description}</p>
            <p style={{ marginTop: 12, fontStyle: 'italic', opacity: 0.8 }}>Why it fits: {currentActivity.reason}</p>
          </div>

          <h3>How to do it</h3>
          <VisualFlow steps={currentActivity.steps} />
          <VibeMeter energyLevel={currentActivity.energy} />

          <div style={{ marginTop: 40, display: 'flex', gap: 16, justifyContent: 'center' }}>
            <button
              className="glass-strong action-btn"
              style={{ background: 'var(--type-color)', color: 'white', padding: '16px 32px' }}
              onClick={() => {
                toggleFavorite(currentActivity);
                alert('Saved!');
              }}
            >
              ❤️ {favorites.some(f => f.id === currentActivity.id) ? 'Saved' : 'Save to Favorites'}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderFavorites = () => (
    <>
      <h2 style={{ marginBottom: 24 }}>Your Favorites ❤️</h2>
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
              onDetails={(a) => {
                setCurrentActivity(a);
                setView('details'); // Note: Back button logic needs adjustment for favorites
              }}
            />
          ))}
        </div>
      )}
    </>
  );

  const renderSettings = () => (
    <>
      <h2 style={{ marginBottom: 24 }}>Settings ⚙️</h2>
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
    </>
  );

  return (
    <>
      <Background typeColor={selectedType?.color} />
      <div className="app-container">
        <header className="app-header glass-strong">
          <div className="logo" onClick={() => setView('home')} style={{ cursor: 'pointer' }}>
            <span className="logo-icon">✨</span>
            <h1>MBTI Gen</h1>
          </div>
          <nav className="app-nav">
            <button className="icon-btn" onClick={() => setView('favorites')}>
              <Heart size={20} />
            </button>
            <button className="icon-btn" onClick={() => setView('settings')}>
              <Settings size={20} />
            </button>
          </nav>
        </header>

        <main id="main-content">
          {view === 'home' && renderHome()}
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
