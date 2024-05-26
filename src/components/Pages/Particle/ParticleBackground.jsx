// src/components/Pages/Particle/ParticleBackground.jsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particleConfig from "../../config/particleConfig";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles id="tsparticles" init={particlesInit} options={particleConfig} />
  );
};

export default ParticleBackground;
