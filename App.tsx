
import React, { useState } from 'react';
import Layout from './components/Layout';
import LocationScouting from './views/LocationScouting';
import GuestList from './views/GuestList';
import TeamTracker from './views/TeamTracker';
import ChatWithClient from './views/ChatWithClient';
import CatalogSection from './views/CatalogSection';
import BudgetManager from './views/BudgetManager';
import { AppSection } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AppSection>('locations');

  const renderSection = () => {
    switch (activeSection) {
      case 'locations':
        return <LocationScouting />;
      case 'guests':
        return <GuestList />;
      case 'team':
        return <TeamTracker />;
      case 'chat':
        return <ChatWithClient />;
      case 'music':
        return <CatalogSection 
                  category="music" 
                  title="Music & Entertainment" 
                  subtitle="Manage bands, DJs and live performers for your events." 
                />;
      case 'catering':
        return <CatalogSection 
                  category="catering" 
                  title="Catering Selections" 
                  subtitle="Fine dining, cocktails, and menu curation." 
                />;
      case 'theme':
        return <CatalogSection 
                  category="theme" 
                  title="Themes & Decoration" 
                  subtitle="Atmosphere, styling, and aesthetic concepts." 
                />;
      case 'budget':
        return <BudgetManager />;
      default:
        return <LocationScouting />;
    }
  };

  return (
    <Layout activeSection={activeSection} setActiveSection={setActiveSection}>
      {renderSection()}
    </Layout>
  );
};

export default App;
