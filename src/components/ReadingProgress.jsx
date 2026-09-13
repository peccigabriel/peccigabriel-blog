"use client";

import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      frame = 0;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };

    // Uma atualização por frame, no máximo; o listener passivo não bloqueia o scroll.
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      height="4px"
      width={`${progress}%`}
      bg="fg"
      zIndex="sticky"
      transition="width 0.1s ease-out"
      aria-hidden="true"
    />
  );
}
