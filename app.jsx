/* global React, ReactDOM, useTweaks, TweaksPanel, TweakSection, TweakRadio */
const { useState, useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "density": "comfortable",
  "heroVariant": "orb"
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    document.documentElement.setAttribute('data-density', tweaks.density);
  }, [tweaks.density]);

  return (
    <>
      <Header />
      <main>
        <Hero variant={tweaks.heroVariant} />
        <Trust />
        <Services />
        <Estimator />
        <AIShowcase />
        <Process />
        <Portfolio />
        <CTA />
        <Testimonial />
        <News />
      </main>
      <Footer />
      <TweaksPanel title="Tweaks">
        <TweakSection title="Hero variant">
          <TweakRadio
            value={tweaks.heroVariant}
            onChange={v => setTweak('heroVariant', v)}
            options={[
              { value: 'orb', label: 'AI Orb' },
              { value: 'marquee', label: 'Marquee' },
              { value: 'grid', label: 'Service Grid' },
            ]}
          />
        </TweakSection>
        <TweakSection title="Density">
          <TweakRadio
            value={tweaks.density}
            onChange={v => setTweak('density', v)}
            options={[
              { value: 'comfortable', label: 'Comfortable' },
              { value: 'compact', label: 'Compact' },
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
