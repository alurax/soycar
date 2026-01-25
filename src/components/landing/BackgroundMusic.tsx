"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, Volume } from "lucide-react";

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleFirstInteraction = () => {
      setHasInteracted(true);
      if (audioRef.current) {
        audioRef.current.play().catch((err) => {
          console.log("Could not autoplay:", err);
        });
      }
    };

    if (!hasInteracted) {
      document.addEventListener("click", handleFirstInteraction, { once: true });
      document.addEventListener("keydown", handleFirstInteraction, { once: true });
    }

    return () => {
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("keydown", handleFirstInteraction);
    };
  }, [hasInteracted]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updatePlayingState = () => {
      setIsPlaying(!audio.paused);
    };

    audio.addEventListener("play", updatePlayingState);
    audio.addEventListener("pause", updatePlayingState);

    return () => {
      audio.removeEventListener("play", updatePlayingState);
      audio.removeEventListener("pause", updatePlayingState);
    };
  }, []);

  const toggleMusic = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        src="/soycar_jingle.mp3"
      />
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#dc2626] text-white hover:bg-[#b91c1c] transition-colors shadow-lg"
        aria-label={isPlaying ? "Mute music" : "Play music"}
        title={isPlaying ? "Mute" : "Play music"}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5" />
        ) : (
          <Volume className="w-5 h-5" />
        )}
      </button>
    </>
  );
}
