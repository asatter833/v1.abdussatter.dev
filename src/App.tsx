import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import BaseRoutes from "./routes";
import firebaseConfig from "./config/firebase";
import React from "react";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  React.useEffect(() => {
    getAnalytics(app);
  }, []);
  return (
    <>
      <svg
        className="pointer-events-none fixed isolate z-50 opacity-90 mix-blend-soft-light"
        width="100%"
        height="100%"
      >
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.80"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
      <BaseRoutes />
    </>
  );
}

export default App;
