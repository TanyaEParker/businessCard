import { initialize } from "@zcomponent/three";
import { default as main } from "./IWT_Scene/main.zcomp";
import particles from "particles.js-es";

const options =
{
  particles: {
    number: { value: 10, density: { enable: true, value_area: 50 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 150, height: 150 }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 100,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "top_right",
      random: false,
      straight: false,
      out_mode: "bounce",
      bounce: true,
      attract: { enable: true, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "repulse" },
      onclick: { enable: false, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 2, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 20, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
};

particles.init("particles-js",options);

initialize(main, {}, {
    launchButton: document.getElementById('launchButton')
});

function addToContacts()
{
     var vcfString="BEGIN:VCARD\nVERSION:3.0\nFN:Tanya Eloise Parker\nN:Parker;Tanya;Eloise;;\nEMAIL;TYPE=INTERNET;TYPE=WORK:tanyaparkerdev@gmail.com\nTEL;TYPE=CELL:+447802474557\nTITLE:WebXR & Three.js Specialist\nBDAY:19940330\nEND:VCARD";
     var blob = new Blob([vcfString], {type: 'text/x-vcard'});
     var downloadUrl = URL.createObjectURL(blob);
     var a = document.createElement("a");
     a.href = downloadUrl;
     a.download = "tanya.vcf";
     document.body.appendChild(a);
     a.click();
     document.body.removeChild(a);
};

