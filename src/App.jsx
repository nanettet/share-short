import React, { useState, useEffect } from 'react';

// Components
import { Phone } from './components/Phone.jsx';
import { TabBar } from './components/TabBar.jsx';
import { Modal } from './components/Modal.jsx';

// Onboarding
import { ScreenSplash } from './screens/onboarding/ScreenSplash.jsx';
import { TutorialSwiper } from './screens/onboarding/TutorialSwiper.jsx';
import { ScreenAuth } from './screens/onboarding/ScreenAuth.jsx';
import { ScreenSources } from './screens/onboarding/ScreenSources.jsx';
import { ScreenPermissions } from './screens/onboarding/ScreenPermissions.jsx';

// Tutorial slides
import { Slide1ProblemIntro } from './screens/onboarding/slides/Slide1ProblemIntro.jsx';
import { Slide2ProblemPain } from './screens/onboarding/slides/Slide2ProblemPain.jsx';
import { Slide3ProblemClose } from './screens/onboarding/slides/Slide3ProblemClose.jsx';
import { Slide4SolutionIntro } from './screens/onboarding/slides/Slide4SolutionIntro.jsx';
import { Slide5SolutionFeatures1 } from './screens/onboarding/slides/Slide5SolutionFeatures1.jsx';
import { Slide6SolutionFeatures2 } from './screens/onboarding/slides/Slide6SolutionFeatures2.jsx';
import { Slide7CrystalLake } from './screens/onboarding/slides/Slide7CrystalLake.jsx';
import { Slide8Capture } from './screens/onboarding/slides/Slide8Capture.jsx';
import { Slide9Living } from './screens/onboarding/slides/Slide9Living.jsx';

// Loading & ready
import { ScreenLoading } from './screens/ScreenLoading.jsx';
import { ScreenVaultReady } from './screens/ScreenVaultReady.jsx';

// App tabs
import { TabHome } from './screens/app/TabHome.jsx';
import { TabSearch } from './screens/app/TabSearch.jsx';
import { TabCapture } from './screens/app/TabCapture.jsx';
import { TabVault } from './screens/app/TabVault.jsx';
import { TabSettings } from './screens/app/TabSettings.jsx';

// Modals
import { ItemDetail } from './modals/ItemDetail.jsx';
import { ConnectionDetail } from './modals/ConnectionDetail.jsx';
import { IdentityResolution } from './modals/IdentityResolution.jsx';
import { ArtifactModal } from './modals/ArtifactModal.jsx';
import { CorrectReading } from './modals/CorrectReading.jsx';
import { CreateVault } from './modals/CreateVault.jsx';
import { EmptyVault } from './modals/EmptyVault.jsx';
import { ManageSources } from './modals/ManageSources.jsx';
import { SharingInheritance } from './modals/SharingInheritance.jsx';
import { ArtifactBuilder } from './modals/ArtifactBuilder.jsx';

// The 9 tutorial slides in order
const TUTORIAL_SLIDES = [
  Slide1ProblemIntro,
  Slide2ProblemPain,
  Slide3ProblemClose,
  Slide4SolutionIntro,
  Slide5SolutionFeatures1,
  Slide6SolutionFeatures2,
  Slide7CrystalLake,
  Slide8Capture,
  Slide9Living,
];

// Phase values: 'splash' | 'tutorial' | 'auth' | 'sources' | 'permissions' | 'loading' | 'ready' | 'app'
// For nav jump purposes we also support 'onboarding-N' notation

function App() {
  const [phase, setPhase] = useState('splash');
  const [tab, setTab] = useState('home');
  const [modal, setModal] = useState(null);

  // Accent color tweak
  const [accentHue, setAccentHue] = useState('sage');
  const [tweaksOpen, setTweaksOpen] = useState(false);

  useEffect(() => {
    const accentMap = {
      sage:  { sage: '#9eb89f', deep: '#7a9485', tint: '#e6ede3' },
      ochre: { sage: '#c8a26b', deep: '#9c7a4a', tint: '#f0e6d4' },
      slate: { sage: '#7a92a8', deep: '#5a7088', tint: '#dfe6ec' },
      rose:  { sage: '#b88a92', deep: '#946a72', tint: '#ecdcdf' },
    };
    const a = accentMap[accentHue] || accentMap.sage;
    document.documentElement.style.setProperty('--sage', a.sage);
    document.documentElement.style.setProperty('--sage-deep', a.deep);
    document.documentElement.style.setProperty('--sage-tint', a.tint);
  }, [accentHue]);

  const openModal = (name) => setModal(name);
  const closeModal = () => setModal(null);

  const goToPhase = (p, t = 'home') => {
    setPhase(p);
    if (t) setTab(t);
    setModal(null);
  };

  const renderPhone = () => {
    switch (phase) {
      case 'splash':
        return <ScreenSplash onNext={() => setPhase('tutorial')} />;

      case 'tutorial':
        return (
          <TutorialSwiper
            slides={TUTORIAL_SLIDES}
            onComplete={() => setPhase('auth')}
          />
        );

      case 'auth':
        return <ScreenAuth onNext={() => setPhase('sources')} />;

      case 'sources':
        return <ScreenSources onNext={() => setPhase('permissions')} />;

      case 'permissions':
        return <ScreenPermissions onNext={() => setPhase('loading')} />;

      case 'loading':
        return <ScreenLoading onComplete={() => setPhase('ready')} />;

      case 'ready':
        return <ScreenVaultReady onEnter={() => setPhase('app')} />;

      case 'app':
        return (
          <Phone dataLabel={`Tab ${tab}`}>
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div className="scroll-y no-scrollbar" style={{ flex: 1 }}>
                {tab === 'home'     && <TabHome goTo={openModal}/>}
                {tab === 'search'   && <TabSearch goTo={openModal}/>}
                {tab === 'capture'  && <TabCapture/>}
                {tab === 'vault'    && <TabVault goTo={openModal}/>}
                {tab === 'settings' && <TabSettings goTo={openModal} onRestart={() => { setPhase('splash'); setTab('home'); setModal(null); }}/>}
              </div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 50 }}>
                <TabBar active={tab} onChange={setTab}/>
              </div>
            </div>

            {/* Modals */}
            <Modal open={modal === 'item'} onClose={closeModal}>
              <ItemDetail onClose={closeModal} onConnection={() => setModal('connection')} onCorrect={() => setModal('correctReading')}/>
            </Modal>
            <Modal open={modal === 'connection'} onClose={closeModal}>
              <ConnectionDetail onClose={closeModal}/>
            </Modal>
            <Modal open={modal === 'identity'} onClose={closeModal}>
              <IdentityResolution onClose={closeModal}/>
            </Modal>
            <Modal open={modal === 'artifact'} onClose={closeModal} fromBottom>
              <ArtifactModal onClose={closeModal} onBuild={() => setModal('artifactBuilder')}/>
            </Modal>
            <Modal open={modal === 'correctReading'} onClose={closeModal}>
              <CorrectReading onClose={closeModal}/>
            </Modal>
            <Modal open={modal === 'createVault'} onClose={closeModal}>
              <CreateVault onClose={closeModal} onCreated={() => setModal('emptyVault')}/>
            </Modal>
            <Modal open={modal === 'emptyVault'} onClose={closeModal}>
              <EmptyVault onClose={closeModal} onAdd={() => { setTab('capture'); setModal(null); }}/>
            </Modal>
            <Modal open={modal === 'manageSources'} onClose={closeModal}>
              <ManageSources onClose={closeModal}/>
            </Modal>
            <Modal open={modal === 'sharing'} onClose={closeModal}>
              <SharingInheritance onClose={closeModal}/>
            </Modal>
            <Modal open={modal === 'artifactBuilder'} onClose={closeModal}>
              <ArtifactBuilder onClose={closeModal}/>
            </Modal>
          </Phone>
        );

      default:
        return <ScreenSplash onNext={() => setPhase('tutorial')} />;
    }
  };

  // Build nav items
  const navItems = [
    { id: 'splash',      label: 'Splash',       onClick: () => goToPhase('splash') },
    { id: 'tutorial',    label: 'Tutorial',      onClick: () => goToPhase('tutorial') },
    { id: 'auth',        label: 'Account',       onClick: () => goToPhase('auth') },
    { id: 'sources',     label: 'Sources',       onClick: () => goToPhase('sources') },
    { id: 'permissions', label: 'Permissions',   onClick: () => goToPhase('permissions') },
    { id: 'loading',     label: 'Loading',       onClick: () => goToPhase('loading') },
    { id: 'ready',       label: 'Ready',         onClick: () => goToPhase('ready') },
    { id: 'home',        label: 'Home',          onClick: () => { setPhase('app'); setTab('home'); setModal(null); } },
    { id: 'search',      label: 'Search',        onClick: () => { setPhase('app'); setTab('search'); setModal(null); } },
    { id: 'capture',     label: 'Capture',       onClick: () => { setPhase('app'); setTab('capture'); setModal(null); } },
    { id: 'vault',       label: 'Vault',         onClick: () => { setPhase('app'); setTab('vault'); setModal(null); } },
    { id: 'settings',    label: 'Settings',      onClick: () => { setPhase('app'); setTab('settings'); setModal(null); } },
    { id: 'item',        label: 'Item',          onClick: () => { setPhase('app'); setTab('vault'); setModal('item'); } },
    { id: 'connection',  label: 'Connection',    onClick: () => { setPhase('app'); setTab('home'); setModal('connection'); } },
    { id: 'identity',    label: 'Identity',      onClick: () => { setPhase('app'); setTab('home'); setModal('identity'); } },
    { id: 'artifact',    label: 'Make Something',onClick: () => { setPhase('app'); setTab('home'); setModal('artifact'); } },
    { id: 'correctReading', label: 'Correct reading', onClick: () => { setPhase('app'); setTab('vault'); setModal('correctReading'); } },
    { id: 'createVault', label: 'Create vault',  onClick: () => { setPhase('app'); setTab('settings'); setModal('createVault'); } },
    { id: 'emptyVault',  label: 'Empty vault',   onClick: () => { setPhase('app'); setTab('vault'); setModal('emptyVault'); } },
    { id: 'manageSources', label: 'Manage sources', onClick: () => { setPhase('app'); setTab('settings'); setModal('manageSources'); } },
    { id: 'sharing',     label: 'Sharing & inheritance', onClick: () => { setPhase('app'); setTab('settings'); setModal('sharing'); } },
    { id: 'artifactBuilder', label: 'Artifact builder', onClick: () => { setPhase('app'); setTab('home'); setModal('artifactBuilder'); } },
  ];

  // Separator indices
  const separatorBefore = new Set([7, 12, 16]);

  const currentId = (() => {
    if (phase === 'app') {
      if (modal) return modal;
      return tab;
    }
    return phase;
  })();

  return (
    <div style={{
      width: '100vw', minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '24px 24px 100px',
      position: 'relative',
    }}>
      {/* Centered phone */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
        {renderPhone()}
        <div style={{
          fontFamily: 'var(--serif)', fontSize: 13, fontStyle: 'italic',
          color: 'rgba(26, 43, 53, 0.4)', letterSpacing: '0.02em',
        }}>
          ShareThreads — interactive prototype
        </div>
      </div>

      {/* Side nav */}
      <div style={{
        position: 'fixed', top: 24, right: 24,
        background: 'rgba(245, 242, 238, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: 14,
        padding: 10,
        border: '1px solid rgba(26, 43, 53, 0.08)',
        boxShadow: '0 8px 28px rgba(26, 43, 53, 0.08)',
        maxHeight: 'calc(100vh - 48px)',
        overflow: 'auto',
        zIndex: 200,
        width: 168,
      }}>
        <div style={{
          fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase',
          color: 'var(--muted)', padding: '4px 8px 8px', fontWeight: 500,
        }}>
          Screens
        </div>
        {navItems.map((n, i) => (
          <React.Fragment key={n.id}>
            {separatorBefore.has(i) && (
              <div style={{ height: 1, background: 'rgba(26, 43, 53, 0.06)', margin: '6px 6px' }}/>
            )}
            <div
              onClick={n.onClick}
              style={{
                padding: '7px 10px', borderRadius: 8,
                fontSize: 12, cursor: 'pointer',
                fontFamily: 'var(--sans)',
                background: currentId === n.id ? 'var(--sage-tint)' : 'transparent',
                color: currentId === n.id ? 'var(--sage-deep)' : 'var(--ink-2)',
                fontWeight: currentId === n.id ? 500 : 400,
                transition: 'all 0.15s',
              }}
              onMouseEnter={e => { if (currentId !== n.id) e.currentTarget.style.background = 'rgba(26, 43, 53, 0.04)'; }}
              onMouseLeave={e => { if (currentId !== n.id) e.currentTarget.style.background = 'transparent'; }}
            >
              {n.label}
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Tweaks panel */}
      <div style={{
        position: 'fixed', bottom: 24, right: 24, zIndex: 200,
      }}>
        {tweaksOpen && (
          <div style={{
            background: 'rgba(245, 242, 238, 0.92)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: 14,
            padding: '14px 16px',
            border: '1px solid rgba(26, 43, 53, 0.08)',
            boxShadow: '0 8px 28px rgba(26, 43, 53, 0.08)',
            marginBottom: 10,
            minWidth: 180,
          }}>
            <div style={{ fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 500, marginBottom: 10 }}>
              Accent color
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {['sage', 'ochre', 'slate', 'rose'].map(hue => (
                <div
                  key={hue}
                  onClick={() => setAccentHue(hue)}
                  style={{
                    padding: '6px 10px', borderRadius: 8, cursor: 'pointer',
                    fontSize: 12, fontFamily: 'var(--sans)',
                    background: accentHue === hue ? 'var(--sage-tint)' : 'transparent',
                    color: accentHue === hue ? 'var(--sage-deep)' : 'var(--ink-2)',
                    fontWeight: accentHue === hue ? 500 : 400,
                    textTransform: 'capitalize',
                  }}
                >
                  {hue}
                </div>
              ))}
            </div>
            <div style={{ height: 1, background: 'rgba(26,43,53,0.06)', margin: '10px 0' }}/>
            <div style={{ fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 500, marginBottom: 8 }}>
              Quick jump
            </div>
            {[
              { label: 'Restart onboarding', onClick: () => { setPhase('splash'); setModal(null); setTweaksOpen(false); } },
              { label: 'Skip to home',       onClick: () => { setPhase('app'); setTab('home'); setModal(null); setTweaksOpen(false); } },
              { label: 'Replay loading',     onClick: () => { setPhase('loading'); setModal(null); setTweaksOpen(false); } },
              { label: 'Open identity modal',onClick: () => { setPhase('app'); setTab('home'); setModal('identity'); setTweaksOpen(false); } },
            ].map(btn => (
              <div
                key={btn.label}
                onClick={btn.onClick}
                style={{
                  padding: '6px 10px', borderRadius: 8, cursor: 'pointer',
                  fontSize: 12, fontFamily: 'var(--sans)', color: 'var(--ink-2)',
                  marginBottom: 2,
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(26,43,53,0.04)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
              >
                {btn.label}
              </div>
            ))}
          </div>
        )}
        <button
          onClick={() => setTweaksOpen(o => !o)}
          style={{
            width: 40, height: 40, borderRadius: 12, border: 'none', cursor: 'pointer',
            background: tweaksOpen ? 'var(--navy)' : 'rgba(245, 242, 238, 0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: '0 4px 16px rgba(26, 43, 53, 0.12)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 16,
            color: tweaksOpen ? '#f5f2ee' : 'var(--ink)',
          }}
        >
          ⚙
        </button>
      </div>
    </div>
  );
}

export default App;
