import Particles from "@tsparticles/react";
import particleConfig from "../../config/particleConfig";

const ParticleBackground = () => {
  return (
    <>
      <Particles params={particleConfig}></Particles>
    </>
  );
};

export default ParticleBackground;
