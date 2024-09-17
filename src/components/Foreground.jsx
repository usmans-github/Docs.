import React, { useRef, useState } from "react";
import Card from "./Card";

const Foreground = () => {

    const ref = useRef(null)
  //Dummy Data
  const data = [
    {
      desc: "This is the background Color of the card which is displayed.",
      fileSize: ".9mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui.",
      fileSize: ".9mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "🎮 Level up your game with this epic background! 🕹️",
      fileSize: "1.2MB",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Power Up!",
        tagColor: "blue",
      },
    },
    {
      desc: "🍕 Craving something cheesy? 🧀 This background is the perfect slice! 🍕",
      fileSize: "0.8MB",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Dig In!",
        tagColor: "blue",
      },
    },
    {
      desc: "✨ Sparkle, twinkle, little star, this background is from afar! 💫",
      fileSize: "0.9MB",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Twinkle Twinkle",
        tagColor: "blue",
      },
      emoji: "🌟",
    },
    {
      desc: "🌳 This forest background is full of trees... and maybe a few magical creatures? 🦄",
      fileSize: "1.5MB",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Explore the Woods",
        tagColor: "green",
      },
      emoji: "🌲",
    },
    {
      desc: "🤖 This futuristic background is perfect for your tech projects! 🚀",
      fileSize: "1.2MB",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Launch into the Future",
        tagColor: "blue",
      },
      emoji: "💻",
    },
  ];
  useState();
  return (
    <div ref={ref} className="fixed z-[3] top-0 left-0 w-full h-full flex gap-5 flex-wrap p-5">
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
};

export default Foreground;
