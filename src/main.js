// import * as Particles from "particlesjs";
import Particles from "particlesjs";

window.onload = function() {
  Particles.init({
    selector: ".background",
    color: "rgba(255, 255, 255, 0.4)",
    maxParticles: 200
  });
};
