"use client";

import { useState, useEffect } from "react";

export default function FollowCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const pageX = e.touches?.[0]?.pageX ?? e.pageX;
      const pageY = e.touches?.[0]?.pageY ?? e.pageY;
      setPosition({ x: pageX, y: pageY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: position.y - 300 / 2,
          left: position.x - 300 / 2,
          aspectRatio: 1,
          height: "300px",
          transition: "all 0.3s ease-out",
        }}
        className="cursor"
      />
    </div>
  );
}
