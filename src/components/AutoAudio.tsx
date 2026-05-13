import { useEffect, useRef, useState } from "react";

interface AutoAudioProps {
  src: string;
  loop?: boolean;
  volume?: number;
}

export const AutoAudio = ({ src, loop = true, volume = 1 }: AutoAudioProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = loop;
    audio.volume = volume;
  }, [loop, volume]);

  // 📍 Smooth scroll
  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // ▶️ START
  const handleStart = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      await audio.play();
      setIsPlaying(true);

      scrollToAbout();
    } catch (err) {
      console.log("Play failed:", err);
    }
  };

  // ⏹ STOP
  const handleStop = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <div className="flex justify-center mt-6">
      <audio ref={audioRef} src={src} />

      {/* 🎵 Button */}
      <button
        onClick={isPlaying ? handleStop : handleStart}
        className="w-10 h-10 rounded-full bg-white/70 backdrop-blur-md text-[#7a5c5c] flex items-center justify-center shadow-md hover:scale-110 transition border border-[#d7c3a5]/40"
      >
        {isPlaying ? (
          <svg
            className="w-4 h-4 block text-[#7a5c5c]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <rect x="6" y="6" width="12" height="12" />
          </svg>
        ) : (
          <svg
            className="w-4 h-4 block text-[#7a5c5c]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </div>
  );
};
