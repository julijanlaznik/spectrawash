import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// --- Meta Pixel init (safe) ---
declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

const META_PIXEL_ID = '1192552422202118';

function injectFbEventsScript() {
  if ((window as any).fbq) return; // už existuje, nespouštět znovu

  (function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod
        ? n.callMethod.apply(n, arguments)
        : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
}

function safeInitPixel() {
  try {
    injectFbEventsScript();

    setTimeout(() => {
      if ((window as any).fbq) {
        try {
          (window as any).fbq('init', META_PIXEL_ID);
        } catch (e) {}

        try {
          (window as any).fbq('track', 'PageView');
        } catch (e) {}
      }
    }, 50);
  } catch (err) {
    console.warn('Pixel init error:', err);
  }
}

// Spustíme před mountem celé appky
safeInitPixel();
// --- END Meta Pixel init ---


// --- React mount ---
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);