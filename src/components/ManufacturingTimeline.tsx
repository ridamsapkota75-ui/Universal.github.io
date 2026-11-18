import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export interface ManufacturingStep {
  step: string;
  name: string;
  shortLabel: string;
  chemical: string;
  chemicalFormula: string;
  category: 'cleaning' | 'rinse' | 'pickling' | 'neutralizing' | 'conversion' | 'sealant';
  purpose: string;
  technicalMechanism: string;
  specs: {
    temp: string;
    duration: string;
    ph: string;
    bathChemistry: string;
    coatingWeight?: string;
  };
  fluidColor: {
    gradient: string;
    glow: string;
    textColor: string;
    badgeBg: string;
    liquidHex: string;
  };
}

export const manufacturingSteps: ManufacturingStep[] = [
  {
    step: '01',
    name: 'Alkaline Degreasing',
    shortLabel: 'Degrease',
    chemical: 'Hot Alkaline Surfactant Bath',
    chemicalFormula: 'Na₂SiO₃ + NaOH (55°C–65°C)',
    category: 'cleaning',
    purpose: 'Strips heavy rolling lubricants, mill oils, cutting grease, and factory dust from raw cold-rolled steel sheets and tubular sections.',
    technicalMechanism: 'Saponifies organic fats while emulsifying petroleum hydrocarbons into microscopic micelles suspended in aqueous solution.',
    specs: {
      temp: '55°C – 65°C (Heated)',
      duration: '6 – 8 Minutes',
      ph: 'pH 11.5 – 12.0 (High Alkaline)',
      bathChemistry: 'Silicated Alkaline Surfactants',
      coatingWeight: 'Surface Tension < 30 dynes/cm',
    },
    fluidColor: {
      gradient: 'from-amber-500/30 via-amber-600/20 to-deepNavy',
      glow: 'rgba(245, 158, 11, 0.5)',
      textColor: 'text-amber-400',
      badgeBg: 'bg-amber-500/15 border-amber-500/30 text-amber-300',
      liquidHex: '#D97706',
    },
  },
  {
    step: '02',
    name: 'Primary Cascade Water Rinse',
    shortLabel: 'Rinse 1',
    chemical: 'Deionized Counter-Current Overflow',
    chemicalFormula: 'H₂O (Cascading DI Flow)',
    category: 'rinse',
    purpose: 'Flushes away emulsified alkaline residue and detached grease to prevent alkaline carry-over into acid pickling tanks.',
    technicalMechanism: 'Counter-current continuous overflow rinse monitored by inline electrical conductivity sensors.',
    specs: {
      temp: 'Ambient (20°C – 28°C)',
      duration: '2 – 3 Minutes',
      ph: 'pH 7.0 – 7.5 (Neutral)',
      bathChemistry: 'Continuous Clean Overflow Water',
      coatingWeight: 'Conductivity < 250 µS/cm',
    },
    fluidColor: {
      gradient: 'from-cyan-500/25 via-blue-600/20 to-deepNavy',
      glow: 'rgba(6, 182, 212, 0.4)',
      textColor: 'text-cyan-400',
      badgeBg: 'bg-cyan-500/15 border-cyan-500/30 text-cyan-300',
      liquidHex: '#0891B2',
    },
  },
  {
    step: '03',
    name: 'Inhibited Acid Pickling',
    shortLabel: 'Derust',
    chemical: 'Inhibited Acid Etching Solution',
    chemicalFormula: 'HCl + Organic Corrosion Inhibitors',
    category: 'pickling',
    purpose: 'Dissolves surface rust blooms, mill scale, and welding oxidation down to the bare molecular iron crystalline matrix.',
    technicalMechanism: 'Acid dissolves iron oxides without attacking the underlying base metal, leaving virgin reactive steel.',
    specs: {
      temp: 'Ambient (22°C – 30°C)',
      duration: '8 – 12 Minutes',
      ph: 'pH 1.0 – 1.6 (Strong Acid)',
      bathChemistry: 'Inhibited Hydrochloric Acid (14–16%)',
      coatingWeight: '100% Rust & Scale Clearance',
    },
    fluidColor: {
      gradient: 'from-orange-600/35 via-red-600/20 to-deepNavy',
      glow: 'rgba(234, 88, 12, 0.5)',
      textColor: 'text-orange-400',
      badgeBg: 'bg-orange-500/15 border-orange-500/30 text-orange-300',
      liquidHex: '#EA580C',
    },
  },
  {
    step: '04',
    name: 'Secondary Acid Flush Rinse',
    shortLabel: 'Rinse 2',
    chemical: 'Turbulent Fresh Water Flush',
    chemicalFormula: 'H₂O (High-Velocity Recirculation)',
    category: 'rinse',
    purpose: 'Thoroughly flushes away acid solution from corners, internal tubular cavities, and welded joints.',
    technicalMechanism: 'High-velocity turbulent water agitation dislodges trapped acid molecules from microscopic surface fissures.',
    specs: {
      temp: 'Ambient (20°C – 28°C)',
      duration: '2 – 3 Minutes',
      ph: 'pH 6.5 – 7.0 (Near Neutral)',
      bathChemistry: 'Deionized Counter-Flow Water',
      coatingWeight: 'Chloride Drag-out < 10 ppm',
    },
    fluidColor: {
      gradient: 'from-blue-500/25 via-cyan-600/20 to-deepNavy',
      glow: 'rgba(59, 130, 246, 0.4)',
      textColor: 'text-blue-400',
      badgeBg: 'bg-blue-500/15 border-blue-500/30 text-blue-300',
      liquidHex: '#2563EB',
    },
  },
  {
    step: '05',
    name: 'Chemical Surface Neutralization',
    shortLabel: 'Neutralize',
    chemical: 'Mild Alkaline Conditioning Solution',
    chemicalFormula: 'Na₂CO₃ Buffer Solution (pH 8.5–9.2)',
    category: 'neutralizing',
    purpose: 'Neutralizes microscopic traces of acid trapped inside steel pores, preventing flash rust before phosphating.',
    technicalMechanism: 'Neutralizes residual hydronium ions, creating an optimal surface pH for micro-crystalline phosphate seed activation.',
    specs: {
      temp: '35°C – 45°C (Warm)',
      duration: '2 – 4 Minutes',
      ph: 'pH 8.5 – 9.2 (Mild Buffer)',
      bathChemistry: 'Titrated Alkaline Carbonate Buffer',
      coatingWeight: 'Flash-Rust Resistance: 100%',
    },
    fluidColor: {
      gradient: 'from-emerald-500/25 via-blue-600/20 to-deepNavy',
      glow: 'rgba(16, 185, 129, 0.4)',
      textColor: 'text-emerald-400',
      badgeBg: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300',
      liquidHex: '#059669',
    },
  },
  {
    step: '06',
    name: 'Tertiary Low-TDS Rinse',
    shortLabel: 'Rinse 3',
    chemical: 'Demineralized High-Purity Water',
    chemicalFormula: 'H₂O (TDS < 120 ppm)',
    category: 'rinse',
    purpose: 'Guarantees absolute surface cleanliness before entering the catalytic zinc phosphating immersion bath.',
    technicalMechanism: 'Eliminates salt precipitates that could interfere with crystalline phosphate lattice nucleation.',
    specs: {
      temp: 'Ambient (20°C – 28°C)',
      duration: '2 – 3 Minutes',
      ph: 'pH 7.0 (Pure Neutral)',
      bathChemistry: 'Low-TDS Demineralized Water',
      coatingWeight: 'Total Dissolved Solids < 120 ppm',
    },
    fluidColor: {
      gradient: 'from-sky-500/25 via-blue-600/20 to-deepNavy',
      glow: 'rgba(14, 165, 233, 0.4)',
      textColor: 'text-sky-400',
      badgeBg: 'bg-sky-500/15 border-sky-500/30 text-sky-300',
      liquidHex: '#0284C7',
    },
  },
  {
    step: '07',
    name: 'Zinc Phosphate Conversion',
    shortLabel: 'Phosphate',
    chemical: 'Crystalline Zinc-Iron Phosphate Bath',
    chemicalFormula: 'Zn₃(PO₄)₂·4H₂O (Hopeite Lattice)',
    category: 'conversion',
    purpose: 'Grows a non-metallic, micro-crystalline zinc-iron phosphate layer chemically bonded into the virgin metal surface.',
    technicalMechanism: 'Forms an insoluble microscopic crystalline anchor profile that locks electrostatic powder paint permanently to the steel.',
    specs: {
      temp: '50°C – 60°C (Catalytic)',
      duration: '6 – 8 Minutes',
      ph: 'pH 2.8 – 3.2 (Controlled Acidic)',
      bathChemistry: 'Accelerated Zinc Phosphate Complex',
      coatingWeight: '2.5 – 3.5 g/m² Crystalline Profile',
    },
    fluidColor: {
      gradient: 'from-electricBlue/40 via-royalBlue/30 to-deepNavy',
      glow: 'rgba(18, 101, 216, 0.6)',
      textColor: 'text-electricBlue',
      badgeBg: 'bg-electricBlue/20 border-electricBlue/40 text-iceBlue',
      liquidHex: '#1265D8',
    },
  },
  {
    step: '08',
    name: 'Post-Phosphate Barrier Rinse',
    shortLabel: 'Rinse 4',
    chemical: 'Ultra-Pure Deionized Barrier Wash',
    chemicalFormula: 'H₂O (Deionized Barrier Stream)',
    category: 'rinse',
    purpose: 'Removes unreacted phosphate salts and residual reaction by-products before the final nanotech passivation sealant.',
    technicalMechanism: 'Washes loose salt crystals off the phosphate hopeite lattice without disrupting the bonded crystalline anchor profile.',
    specs: {
      temp: 'Ambient (20°C – 28°C)',
      duration: '2 – 3 Minutes',
      ph: 'pH 6.8 – 7.2 (Neutral)',
      bathChemistry: 'Ultra-Pure Deionized Recirculation',
      coatingWeight: 'Residual Ionic Salt < 5 ppm',
    },
    fluidColor: {
      gradient: 'from-indigo-500/25 via-blue-600/20 to-deepNavy',
      glow: 'rgba(99, 102, 241, 0.4)',
      textColor: 'text-indigo-400',
      badgeBg: 'bg-indigo-500/15 border-indigo-500/30 text-indigo-300',
      liquidHex: '#4F46E5',
    },
  },
  {
    step: '09',
    name: 'Chemical Passivation & Sealant',
    shortLabel: 'Passivate',
    chemical: 'Chromate-Free Nanotech Sealant',
    chemicalFormula: 'H₂ZrF₆ / Organosilane Nano-Barrier',
    category: 'sealant',
    purpose: 'Seals microscopic crystal pore boundaries in the phosphate layer, multiplying humidity and rust resistance tenfold.',
    technicalMechanism: 'Cross-links inorganic zirconium-silane molecules across crystal micropores, forming an impenetrable barrier against monsoon corrosion.',
    specs: {
      temp: '45°C – 55°C (Active Seal)',
      duration: '3 – 5 Minutes',
      ph: 'pH 4.0 – 4.8 (Target Barrier)',
      bathChemistry: 'Zirconium / Silane Polymer Sealant',
      coatingWeight: 'Salt Spray Resistance: 1,000+ Hours',
    },
    fluidColor: {
      gradient: 'from-cyan-400/35 via-electricBlue/40 to-deepNavy',
      glow: 'rgba(34, 211, 238, 0.6)',
      textColor: 'text-cyan-300',
      badgeBg: 'bg-cyan-500/20 border-cyan-400/40 text-cyan-200',
      liquidHex: '#06B6D4',
    },
  },
];

export default function ManufacturingTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isDipping, setIsDipping] = useState(false);
  const [dipCount, setDipCount] = useState(0);

  const current = manufacturingSteps[activeStep];

  // Auto-play through stages
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % manufacturingSteps.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const triggerImmersionSimulation = () => {
    if (isDipping) return;
    setIsDipping(true);
    setDipCount((c) => c + 1);
    setTimeout(() => {
      setIsDipping(false);
    }, 2400);
  };

  return (
    <div className="bg-darkBlue/80 border border-electricBlue/30 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      {/* Background Subtle Industrial Blueprint Atmosphere */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electricBlue/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header with Title and Mode Controls */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-4 border-b border-electricBlue/15 pb-6 relative z-10">
        <div>
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-electricBlue/20 border border-electricBlue/40 text-electricBlue font-mono text-xs font-semibold uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-electricBlue animate-pulse" />
            <span>AUTOMATED PRE-TREATMENT • 9-STAGE IMMERSION PLANT</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-steelWhite tracking-tight">
            The 9-Step Powder Coating Process
          </h3>
          <p className="text-sm text-metallicSilver/80 mt-2 max-w-2xl leading-relaxed">
            Every piece of UFI steel furniture undergoes nine chemical and thermal dip stages to guarantee decades of anti-rust endurance in Nepal&apos;s climate.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider px-4 py-2.5 rounded-xl border transition ${
              isAutoPlaying
                ? 'bg-electricBlue text-white border-electricBlue shadow-lg shadow-electricBlue/30'
                : 'bg-deepNavy/90 text-iceBlue border-electricBlue/30 hover:border-electricBlue'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-white animate-ping' : 'bg-electricBlue'}`} />
            <span>{isAutoPlaying ? 'Auto-Tour: Active' : 'Start Auto-Tour'}</span>
          </button>

          <Link
            href="/manufacturing"
            className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-iceBlue hover:text-white bg-deepNavy/90 hover:bg-darkBlue px-4 py-2.5 rounded-xl border border-electricBlue/30 hover:border-electricBlue transition"
          >
            <span>Full Engineering Specs</span>
            <span>→</span>
          </Link>
        </div>
      </div>

      {/* Step Numbers Pipeline / Stepper Track */}
      <div className="relative mb-8 z-10">
        {/* Connected Conveyor Pipeline Track */}
        <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-1 bg-gradient-to-r from-electricBlue/30 via-electricBlue/60 to-electricBlue/30 -translate-y-1/2 z-0" />

        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2 relative z-10">
          {manufacturingSteps.map((s, idx) => {
            const isActive = activeStep === idx;
            const isCompleted = idx < activeStep;

            return (
              <button
                key={s.step}
                type="button"
                onClick={() => {
                  setActiveStep(idx);
                  setIsAutoPlaying(false);
                }}
                className={`group flex flex-col items-center justify-between p-2.5 sm:p-3 rounded-2xl transition-all duration-300 border text-center relative ${
                  isActive
                    ? 'bg-gradient-to-b from-electricBlue via-royalBlue to-deepNavy text-white border-electricBlue shadow-xl shadow-electricBlue/40 scale-105 z-20 ring-2 ring-cyan-400/40'
                    : isCompleted
                    ? 'bg-deepNavy/90 text-steelWhite border-electricBlue/40 hover:border-electricBlue/70'
                    : 'bg-deepNavy/60 text-metallicSilver/70 border-electricBlue/15 hover:border-electricBlue/40 hover:text-iceBlue'
                }`}
              >
                {/* Status Indicator Pip */}
                <div className="flex items-center justify-between w-full mb-1">
                  <span className={`text-[9px] font-mono font-bold uppercase tracking-wider ${isActive ? 'text-white' : 'text-electricBlue'}`}>
                    TANK-{s.step}
                  </span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-ping" />
                  )}
                  {isCompleted && !isActive && (
                    <span className="text-[10px] text-green-400 font-bold">✓</span>
                  )}
                </div>

                {/* Step Number */}
                <span className={`text-base sm:text-lg font-mono font-extrabold ${isActive ? 'text-white' : 'text-steelWhite'}`}>
                  {s.step}
                </span>

                {/* Short Label */}
                <span className="text-[10px] sm:text-[11px] font-semibold truncate max-w-full mt-0.5">
                  {s.shortLabel}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Workstation (Dual-Pane Control Room GUI) */}
      <div className="grid lg:grid-cols-12 gap-8 items-stretch relative z-10">
        {/* Left Pane: Technical Telemetry & Chemical Science */}
        <div className="lg:col-span-6 bg-deepNavy/95 border border-electricBlue/25 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
          <div>
            {/* Stage Badge & Chemistry Formula */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${current.fluidColor.badgeBg}`}>
                STAGE {current.step} OF 09 • {current.shortLabel.toUpperCase()}
              </span>
              <span className="text-xs font-mono text-cyan-300 px-2.5 py-0.5 rounded bg-darkBlue border border-cyan-400/30">
                {current.chemicalFormula}
              </span>
            </div>

            {/* Stage Title */}
            <h4 className="text-2xl sm:text-3xl font-extrabold text-steelWhite tracking-tight mb-2">
              {current.name}
            </h4>

            {/* Purpose */}
            <p className="text-sm sm:text-base text-metallicSilver leading-relaxed mb-4">
              {current.purpose}
            </p>

            {/* Scientific Mechanism Box */}
            <div className="p-4 rounded-xl bg-darkBlue/80 border border-electricBlue/25 mb-6 text-xs text-iceBlue/90 leading-relaxed font-mono">
              <span className="text-electricBlue font-bold block mb-1">
                MOLECULAR SURFACE MECHANISM:
              </span>
              {current.technicalMechanism}
            </div>

            {/* SCADA Telemetry 4-Metric Grid with Live Gauges */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="p-3.5 rounded-xl bg-darkBlue/70 border border-electricBlue/20">
                <span className="text-[10px] font-mono uppercase tracking-wider text-metallicSilver/70 block mb-1">
                  Operating Temp
                </span>
                <span className="text-sm font-mono font-bold text-steelWhite flex items-center space-x-1.5">
                  <span className="text-orange-400">🌡️</span>
                  <span>{current.specs.temp}</span>
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-darkBlue/70 border border-electricBlue/20">
                <span className="text-[10px] font-mono uppercase tracking-wider text-metallicSilver/70 block mb-1">
                  Immersion Cycle
                </span>
                <span className="text-sm font-mono font-bold text-steelWhite flex items-center space-x-1.5">
                  <span className="text-electricBlue">⏱️</span>
                  <span>{current.specs.duration}</span>
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-darkBlue/70 border border-electricBlue/20">
                <span className="text-[10px] font-mono uppercase tracking-wider text-metallicSilver/70 block mb-1">
                  Chemical pH Level
                </span>
                <span className="text-sm font-mono font-bold text-steelWhite flex items-center space-x-1.5">
                  <span className="text-cyan-400">🧪</span>
                  <span>{current.specs.ph}</span>
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-darkBlue/70 border border-electricBlue/20">
                <span className="text-[10px] font-mono uppercase tracking-wider text-metallicSilver/70 block mb-1">
                  Performance Metric
                </span>
                <span className="text-xs font-mono font-semibold text-iceBlue truncate block" title={current.specs.coatingWeight}>
                  {current.specs.coatingWeight}
                </span>
              </div>
            </div>
          </div>

          {/* Stepper Navigation Footer */}
          <div className="pt-4 border-t border-electricBlue/15 flex items-center justify-between text-xs font-mono">
            <button
              type="button"
              disabled={activeStep === 0}
              onClick={() => {
                setActiveStep((prev) => Math.max(0, prev - 1));
                setIsAutoPlaying(false);
              }}
              className="px-4 py-2 rounded-xl bg-darkBlue/80 hover:bg-darkBlue text-metallicSilver hover:text-white border border-electricBlue/20 disabled:opacity-30 disabled:pointer-events-none transition flex items-center space-x-1.5"
            >
              <span>←</span>
              <span>Prev Tank</span>
            </button>

            <div className="flex items-center space-x-1 text-metallicSilver/60 text-[11px]">
              {manufacturingSteps.map((_, i) => (
                <span
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full ${
                    i === activeStep ? 'bg-electricBlue scale-125' : 'bg-metallicSilver/30'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              disabled={activeStep === manufacturingSteps.length - 1}
              onClick={() => {
                setActiveStep((prev) => Math.min(manufacturingSteps.length - 1, prev + 1));
                setIsAutoPlaying(false);
              }}
              className="px-4 py-2 rounded-xl bg-electricBlue hover:bg-royalBlue text-white font-semibold shadow-md shadow-electricBlue/30 disabled:opacity-30 disabled:pointer-events-none transition flex items-center space-x-1.5"
            >
              <span>Next Tank</span>
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Right Pane: Animated Industrial Chemical Dip Tank Simulator */}
        <div className="lg:col-span-6 bg-gradient-to-b from-darkBlue/90 via-deepNavy to-deepNavy border border-electricBlue/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
          {/* Tank Metadata Header */}
          <div className="flex items-center justify-between text-xs font-mono pb-4 border-b border-electricBlue/15 relative z-10">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-steelWhite font-bold">VESSEL: DIP-TANK #{current.step}</span>
              <span className="text-metallicSilver/40">•</span>
              <span className="text-metallicSilver/80 font-mono text-[11px]">{current.specs.temp}</span>
            </div>
            <div className="flex items-center space-x-2 text-metallicSilver/70">
              <span>STATUS:</span>
              <span className="text-cyan-300 font-bold uppercase">
                {isDipping ? 'IMMERSION ACTIVE' : 'CIRCULATION READY'}
              </span>
            </div>
          </div>

          {/* Visual Tank Interior Simulation */}
          <div className="relative my-6 h-64 sm:h-72 rounded-xl border border-electricBlue/30 bg-deepNavy/90 overflow-hidden flex flex-col justify-between shadow-inner">
            {/* Overhead Motorized Crane Rail */}
            <div className="relative z-10 bg-darkBlue/95 border-b border-electricBlue/30 px-4 py-2 flex items-center justify-between text-[10px] font-mono text-metallicSilver/80">
              <div className="flex items-center space-x-2">
                <span className="text-electricBlue">▲</span>
                <span>OVERHEAD GANTRY CRANE • HOIST #4</span>
              </div>
              <span className="text-cyan-300">
                DEPTH: {isDipping ? '100% SUBMERGED' : 'STANDBY (1.2M)'}
              </span>
            </div>

            {/* Suspended Steel Substrate & Crane Arm */}
            <div className="relative z-10 flex flex-col items-center flex-1 justify-center pointer-events-none">
              {/* Motorized Hoist Pulley & Cables */}
              <div className="flex flex-col items-center">
                <div className="w-4 h-2 bg-metallicSilver/80 rounded-t" />
                <div className="flex space-x-4">
                  <div
                    className={`w-0.5 bg-metallicSilver/80 transition-all duration-700 ${
                      isDipping ? 'h-24' : 'h-10'
                    }`}
                  />
                  <div
                    className={`w-0.5 bg-metallicSilver/80 transition-all duration-700 ${
                      isDipping ? 'h-24' : 'h-10'
                    }`}
                  />
                </div>
              </div>

              {/* Suspended Furniture Frame (Detailed Structural Component) */}
              <div
                className={`relative px-6 py-3 rounded-lg border-2 transition-all duration-700 flex flex-col items-center justify-center shadow-2xl ${
                  isDipping
                    ? 'translate-y-8 bg-electricBlue/40 border-cyan-300 shadow-cyan-400/50 scale-95'
                    : 'bg-darkBlue/90 border-metallicSilver/60 shadow-deepNavy'
                }`}
              >
                {/* Structural Furniture Wireframe Detail */}
                <div className="w-32 h-9 border border-white/40 rounded flex items-center justify-between px-2 text-[10px] font-mono text-white font-bold tracking-wider">
                  <span className="w-1.5 h-6 bg-cyan-300/80 rounded-sm" />
                  <span>{isDipping ? 'TREATING STEEL' : 'FURNITURE FRAME'}</span>
                  <span className="w-1.5 h-6 bg-cyan-300/80 rounded-sm" />
                </div>
                <div className="flex space-x-3 mt-1.5">
                  <div className="w-6 h-1 bg-white/60 rounded" />
                  <div className="w-6 h-1 bg-white/60 rounded" />
                  <div className="w-6 h-1 bg-white/60 rounded" />
                </div>
              </div>
            </div>

            {/* Dynamic Liquid Bath Surface with Step Color */}
            <div
              className={`absolute inset-x-0 bottom-0 transition-all duration-700 overflow-hidden bg-gradient-to-t ${current.fluidColor.gradient} ${
                isDipping ? 'h-52' : 'h-36'
              }`}
            >
              {/* Fluid Meniscus Line with Glow */}
              <div className="w-full h-1 bg-cyan-300/60 shadow-sm shadow-cyan-300 animate-pulse" />

              {/* Animated Chemical Reaction Effervescence / Bubbles */}
              <div className="absolute inset-0 flex items-center justify-around opacity-50 pointer-events-none">
                <div className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-white animate-ping" />
                <div className="w-1 h-1 rounded-full bg-white animate-pulse" />
                <div className="w-3 h-3 rounded-full bg-white animate-ping" />
              </div>

              {/* Fluid Bath Telemetry Strip */}
              <div className="absolute bottom-2 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-white/90">
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span>CIRCULATION: 380 L/MIN</span>
                </div>
                <span className="font-bold uppercase tracking-wider text-cyan-200">
                  {current.chemical}
                </span>
              </div>
            </div>

            {/* Tank Graduation Marks (Left Calibrated Scale) */}
            <div className="absolute left-2.5 top-10 bottom-3 flex flex-col justify-between text-[8px] font-mono text-metallicSilver/50 pointer-events-none">
              <span>MAX 3200L</span>
              <span>2400L</span>
              <span>1600L</span>
              <span>800L</span>
            </div>
          </div>

          {/* Interactive Simulation Trigger Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-electricBlue/15 relative z-10">
            <button
              type="button"
              onClick={triggerImmersionSimulation}
              disabled={isDipping}
              className={`w-full sm:w-auto px-6 py-3 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 shadow-xl ${
                isDipping
                  ? 'bg-amber-600 text-white animate-pulse shadow-amber-600/40'
                  : 'bg-gradient-to-r from-electricBlue to-royalBlue hover:from-royalBlue hover:to-electricBlue text-white shadow-electricBlue/30 hover:-translate-y-0.5'
              }`}
            >
              {isDipping ? '⚙️ Dipping & Treating Component...' : '⚡ Simulate Tank Immersion'}
            </button>

            <div className="text-[11px] font-mono text-metallicSilver/70 text-center sm:text-right">
              <span>Full Sequence Time: 45 Min</span>
              <span className="mx-2">•</span>
              <span className="text-electricBlue font-bold">{dipCount} Runs Tested</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
