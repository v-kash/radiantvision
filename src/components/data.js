/**
 * Single source of truth for the MEPFP & FP mind-map diagram.
 *
 * Cards are now circular badges, so each `box` is a square. `dot` is the
 * point on the card's circumference (facing the center) where the connector
 * line leaves the card; `node` is the point on the center ring it arrives at.
 */

export const CANVAS = { width: 1536, height: 1026 };
export const CENTER = { x: 768, y: 513 };
export const CIRCLE_DIAMETER = 320;

export const services = [
  {
    id: "mechanical",
    number: 1,
    title: "MECHANICAL",
    subtitle: "ENGINEERING",
    icons: "/svgs/fan.svg",
    items: [
      "HVAC Systems",
      "Ventilation",
      "Air Conditioning",
      "Thermal Comfort",
    ],
    icon: "Fan",
    side: "left",
    corner: "top",
    colors: {
      primary: "#3D6B3D",
      dark: "#2C4F2C",
      light: "#E8F0E4",
      glow: "rgba(76,122,69,0.32)",
    },
    layout: {
      box: { x: 135, y: 170, w: 170, h: 170 },
      dot: { x: 313, y: 261 },
      node: { x: 675, y: 420 },
    },
  },
  {
    id: "electrical",
    number: 2,
    title: "ELECTRICAL",
    subtitle: "ENGINEERING",
    icons: "/svgs/bijli.svg",

    items: [
      "Power Distribution",
      "Lighting Design",
      "ELV Systems",
      "Energy Efficiency",
    ],
    icon: "Zap",
    side: "right",
    corner: "top",
    colors: {
      primary: "#DD8B2E",
      dark: "#B96A19",
      light: "#FCEEDB",
      glow: "rgba(221,139,46,0.32)",
    },
    layout: {
      box: { x: 1235, y: 170, w: 170, h: 170 },
      dot: { x: 1223, y: 261 },
      node: { x: 861, y: 420 },
    },
  },
  {
    id: "plumbing",
    number: 3,
    title: "PLUMBING",
    subtitle: "ENGINEERING",
    icons: "/svgs/nal.svg",

    items: [
      "Water Supply",
      "Drainage Systems",
      "Sanitary Systems",
      "STP & WTP",
    ],
    icon: "Droplet",
    side: "left",
    corner: "bottom",
    colors: {
      primary: "#2C6592",
      dark: "#1F4D72",
      light: "#E3EEF6",
      glow: "rgba(44,101,146,0.32)",
    },
    layout: {
      box: { x: 135, y: 670, w: 170, h: 170 },
      dot: { x: 313, y: 765 },
      node: { x: 675, y: 606 },
    },
  },
  {
    id: "fire",
    number: 4,
    title: "FIRE PROTECTION",
    subtitle: "ENGINEERING",
    icons: "/svgs/shower.svg",

    items: [
      "Fire Sprinkler Systems",
      "Fire Alarm Systems",
      "Hydrant Systems",
      "Life Safety Design",
    ],
    icon: "ShowerHead",
    side: "right",
    corner: "bottom",
    colors: {
      primary: "#C13A2C",
      dark: "#9A2E22",
      light: "#FBE4E1",
      glow: "rgba(193,58,44,0.32)",
    },
    layout: {
      box: { x: 1235, y: 670, w: 170, h: 170 },
      dot: { x: 1223, y: 765 },
      node: { x: 861, y: 606 },
    },
  },
];
