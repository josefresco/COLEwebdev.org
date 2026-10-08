/* global React, ReactDOM */

/* ============================================================
   Page mount
   Pages are pre-rendered to static HTML by build/build.mjs.
   - Pre-rendered markup in #root → hydrate it (React takes over in place)
   - Empty #root (fresh page, not built yet) → plain client render
   - During the build, hand the element to the pre-renderer instead
   ============================================================ */
function createAppRoot(el) {
  return {
    render(app) {
      if (typeof window.__PRERENDER__ === 'function') { window.__PRERENDER__(app); return; }
      if (el.hasChildNodes()) ReactDOM.hydrateRoot(el, app);
      else ReactDOM.createRoot(el).render(app);
    },
  };
}

Object.assign(window, { createAppRoot });
