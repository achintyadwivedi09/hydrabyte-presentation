export const STATS = {
  riverLength: 2525, // km
  peopleServed: "600M+",
  populationPercent: 47, // %
  landmassPercent: 26, // %
};

export const METRICS = {
  industrialDischarge: 249.31, // MLD
  pollutingIndustries: 1229,
  nonCompliantIndustries: 450,
  bodLoad: 13.73, // TPD
  sewageGenerated: 3558, // MLD
  bodSafeLimit: 3, // mg/L
};

export const STPCapacity = [
  { year: "Pre-2014", capacity: 127 },
  { year: "2025", capacity: 3806 },
];

export const DolphinPopulation = [
  { year: "2018", population: 3330 },
  { year: "2024", population: 3936 },
];

export const EffluentVol = [
  { river: "Ganga", volume: 249.31, fill: '#0ea5e9' },
  { river: "Yamuna", volume: 180, fill: '#ef4444' }, // Approximated for contrast
];

export const INDUSTRIES = [
  { id: "leather", name: "Leather", location: "Kanpur", pollutant: "Chromium" },
  { id: "textile", name: "Textile", location: "Panipat / Surat", pollutant: "Synthetic Dyes" },
  { id: "sugar", name: "Sugar & Distilleries", location: "UP belt", pollutant: "High BOD" },
  { id: "pulp", name: "Pulp & Paper", location: "Various", pollutant: "Chlorine Compounds" },
  { id: "pharma", name: "Pharma & Hospitals", location: "Various", pollutant: "Emerging Micropollutants" },
];

export const TIMELINE = [
  { year: "1985", event: "Ganga Action Plan (GAP)", outcome: "First attempt at cleaning, largely failed due to lack of maintenance." },
  { year: "1993", event: "GAP Phase II", outcome: "Extended to tributaries like Yamuna and Gomti." },
  { year: "1995", event: "National River Conservation Plan (NRCP)", outcome: "Broadened scope to 31 rivers globally across India." },
  { year: "2014", event: "Namami Gange Programme", outcome: "Integrated conservation mission; 30x STP capacity growth." },
  { year: "2021", event: "Namami Gange 2.0", outcome: "Focus on circular economy and smaller tributaries." },
];

export const RECOMMENDATIONS = [
  "Smart real-time monitoring (OCEMS rollout)",
  "STP infrastructure upgrades & utilisation",
  "Pharma / emerging pollutant treatment mandates",
  "Public-facing transparency dashboard",
];
