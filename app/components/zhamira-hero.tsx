"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface DiamondProps {
  id: number;
  left: number;
  top: number;
  size: number;
  color: string;
}

function Diamond({ left, top, size, color }: DiamondProps) {
  return (
    <div
      style={{
        left: `${left}%`,
        top: `${top}%`,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
      }}
      className="absolute transform rotate-45"
    />
  );
}

export function BlueArc() {
  return (
    <div className="absolute bottom-0 right-0 flex items-center justify-center w-1/2 h-[40%] bg-[#6dc3ec] rounded-tl-[50%_100%] p-4">
      <Image
        src="/images/butterfly.svg"
        alt="Butterfly"
        width={300}
        height={400}
      />
    </div>
  );
}

export function GreenArc() {
  return (
    <div className="absolute bottom-0 left-0 flex items-center justify-center w-1/2 h-[40%] bg-[#89c46f] rounded-tr-[50%_100%] p-4">
      <p className="max-w-[80%] text-2xl text-center text-[#4b2e2e] m-0">
        for creativity and arts and crafts, thinking minds. for kids and adults.
      </p>
    </div>
  );
}

export default function ZhamiraHero() {
  const [diamonds, setDiamonds] = useState<DiamondProps[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const count = 10;
    const colors = ["#f161bd", "#e42424", "#89c46f", "#6dc3ec", "#ffcc00"];
    const arr: DiamondProps[] = [];
    for (let i = 0; i < count; i++) {
      const left = Math.random() * 90; // Percentage
      const top = Math.random() * 90;
      const size = Math.random() * 40 + 10; // Between 10px and 50px
      const color = colors[Math.floor(Math.random() * colors.length)];
      arr.push({ id: i, left, top, size, color });
    }
    setDiamonds(arr);
    setMounted(true);
  }, []);

  return (
    <div className="relative font-gaegu flex flex-col items-center justify-center w-full min-h-screen p-8 text-center bg-[#a3c9f7]">
      {/* Only render diamonds if mounted (client-only) */}
      {mounted &&
        diamonds.map((diamond, i) => (
          <Diamond
            key={diamond.id}
            id= {diamond.id}
            left={diamond.left}
            top={diamond.top}
            size={diamond.size}
            color={diamond.color}
          />
        ))}
      {/* Main Title */}
      <h1 className="text-5xl sm:text-6xl font-bold text-[#4b2e2e] drop-shadow-md mb-[20%]">
        WELCOME <br />
        <span className="mx-3 text-[#f161bd]">To <br /></span>
        ZHAMIRA<span className="text-[#e42424]">.COM</span>
      </h1>
      {/* Green Arc and Blue Arc */}
      <GreenArc />
      <BlueArc />
    </div>
  );
}
