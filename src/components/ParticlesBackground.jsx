import { useEffect, useMemo, useState } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {

  const [init, setInit] = useState(false);

  useEffect(() => {

    initParticlesEngine(async (engine) => {

      await loadSlim(engine);

    }).then(() => {

      setInit(true);

    });

  }, []);

  const options = useMemo(() => ({
    background: {
      color: {
        value: "transparent",
      },
    },

    fpsLimit: 60,

    particles: {
      color: {
        value: "#7F5AF0",
      },

      links: {
        color: "#D4AF37",
        distance: 120,
        enable: true,
        opacity: 0.3,
        width: 1,
      },

      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },

      number: {
        density: {
          enable: true,
        },
        value: 50,
      },

      opacity: {
        value: 0.3,
      },

      shape: {
        type: "circle",
      },

      size: {
        value: { min: 1, max: 4 },
      },
    },

    detectRetina: true,

    fullScreen: {
      enable: true,
      zIndex: -1,
    },

  }), []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
    />
  );
};

export default ParticlesBackground;