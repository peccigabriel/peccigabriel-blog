"use client";

import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  const barColor = useColorModeValue("gray.800", "gray.200");

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(percent);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      height="4px"
      width={`${progress}%`}
      bg={barColor}
      zIndex={9999}
      transition="width 0.1s ease-out"
    />
  );
}
