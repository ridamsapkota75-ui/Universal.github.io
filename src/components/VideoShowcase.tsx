import React, { useRef, useState } from 'react';

interface Props {
  videoSrc?: string;
  posterSrc?: string;
  title?: string;
  subtitle?: string;
  description?: string;
}

export default function VideoShowcase({
  videoSrc = '/Universal.github.io/videos/ufi-advertisement.mp4',
  posterSrc = '/Universal.github.io/videos/ufi-video-poster.jpg',
  title = 'DISCOVER THE UFI DIFFERENCE',
  subtitle = 'OFFICIAL COMPANY FILM',
  description = 'Watch how Universal Furniture Industries engineers precision metal furniture from raw steel to finished product in our Chitwan manufacturing facility.',
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayToggle = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const onVideoPlay = () => setIsPlaying(true);
  const onVideoPause = () => setIsPlaying(false);

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-deepNavy via-darkBlue/70 to-deepNavy">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-electricBlue/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-electricBlue/20 border border-electricBlue/40 text-electricBlue font-mono text-xs font-semibold uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-electricBlue animate-pulse" />
            <span>{subtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-steelWhite tracking-tight">
            {title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-metallicSilver max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Video Player Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border border-electricBlue/30 bg-darkBlue shadow-2xl shadow-deepNavy/80 group">
            {/* 16:9 Aspect Ratio Frame */}
            <div className="relative aspect-video w-full bg-deepNavy">
              <video
                ref={videoRef}
                src={videoSrc}
                poster={posterSrc}
                controls
                playsInline
                preload="metadata"
                onPlay={onVideoPlay}
                onPause={onVideoPause}
                className="w-full h-full object-cover"
              >
                Your browser does not support HTML5 video playback.
              </video>

              {/* Custom Play Button Overlay (visible when paused) */}
              {!isPlaying && (
                <div
                  onClick={handlePlayToggle}
                  className="absolute inset-0 bg-deepNavy/40 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer transition duration-300 hover:bg-deepNavy/25"
                >
                  <button
                    type="button"
                    aria-label="Play company advertisement video"
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-electricBlue/90 hover:bg-royalBlue text-white flex items-center justify-center shadow-2xl shadow-electricBlue/50 transition-all duration-300 transform group-hover:scale-110 border border-white/20"
                  >
                    <svg
                      className="w-8 h-8 sm:w-10 sm:h-10 ml-1 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                  <span className="mt-4 text-xs font-mono uppercase tracking-widest text-steelWhite font-semibold bg-deepNavy/80 px-3.5 py-1 rounded-full border border-electricBlue/30">
                    Watch Company Film (01:04)
                  </span>
                </div>
              )}
            </div>

            {/* Video Footer Metadata Strip */}
            <div className="bg-deepNavy/95 border-t border-electricBlue/20 px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-metallicSilver/80 gap-3">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-electricBlue" />
                <span className="text-steelWhite font-medium">UFI Manufacturing Facility Overview</span>
                <span className="text-metallicSilver/40">•</span>
                <span>Bharatpur, Chitwan</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-electricBlue font-semibold">1080p HD Video</span>
                <a
                  href="https://www.facebook.com/ufichitwan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-iceBlue transition text-metallicSilver/70 underline"
                >
                  Watch on Facebook →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
