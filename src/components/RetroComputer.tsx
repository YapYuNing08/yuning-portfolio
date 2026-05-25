import { useEffect, useState } from "react";

const RetroComputer = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = `> Hello, World!\n> I build things\n  that matter.\n> Loading portfolio...`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center" style={{ perspective: "2000px" }}>
      <div
        className="relative transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateY(-15deg) rotateX(5deg)",
        }}
      >
        <div className="relative" style={{ width: 360, height: 440, transformStyle: "preserve-3d" }}>
          {/* Front face */}
          <div
            className="absolute flex flex-col items-center pt-10"
            style={{
              width: 360, height: 440,
              transform: "translateZ(100px)",
              background: "linear-gradient(135deg, hsl(43 27% 91%) 0%, hsl(40 16% 85%) 100%)",
              boxShadow: "inset 2px 2px 5px rgba(255,255,255,0.8), inset -5px -5px 15px rgba(0,0,0,0.1)",
            }}
          >
            {/* Screen inset */}
            <div
              className="flex items-center justify-center mb-8"
              style={{
                width: 280, height: 220,
                background: "#D1CEC7",
                borderRadius: 16,
                boxShadow: "inset 2px 2px 8px rgba(0,0,0,0.2), inset -2px -2px 8px rgba(255,255,255,0.5)",
              }}
            >
              <div
                className="crt-scanlines relative overflow-hidden"
                style={{
                  width: 260, height: 200,
                  background: "hsl(216 8% 15%)",
                  borderRadius: "40% 40% 40% 40% / 10% 10% 10% 10%",
                  boxShadow: "inset 0 0 20px rgba(0,0,0,1)",
                }}
              >
                <div className="absolute inset-[10px] z-[2] font-mono p-4 text-sm" style={{ color: "#00FF00", textShadow: "0 0 5px rgba(0,255,0,0.3)" }}>
                  <div className="flex h-full">
                    <div className="w-[30%] border-r border-white/20 pr-2 text-[11px] text-gray-300">
                      <div className="flex items-center gap-1 mb-1.5"><span className="w-2 h-2 rounded-full bg-gray-500" /> System</div>
                      <div className="flex items-center gap-1 mb-1.5"><span className="w-2 h-2 rounded-full" style={{ background: "#468CCF" }} /> Disk A</div>
                      <div className="flex items-center gap-1 mb-1.5"><span className="w-2 h-2 rounded-full" style={{ background: "#E57D25" }} /> Trash</div>
                      <div className="flex items-center gap-1 mb-1.5"><span className="w-2 h-2 rounded-full bg-gray-500" /> Write</div>
                      <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-gray-500" /> Think</div>
                    </div>
                    <div className="flex-1 pl-2 flex flex-col">
                      <span className="text-[11px] text-gray-300">FigOS 1.0</span>
                      <div className="bg-black text-green-400 rounded-sm p-1.5 mt-2 text-[12px] font-mono" style={{ boxShadow: "2px 2px 0 rgba(0,255,0,0.2)" }}>
                        <div className="border-b border-dashed border-green-400 mb-1 font-bold flex justify-between">
                          <span>Welcome.txt</span><span>[x]</span>
                        </div>
                        <div className="font-mono text-[12px] leading-snug text-green-400">
                          <pre className="whitespace-pre-wrap">{typedText}</pre>
                          <span className="inline-block w-2 h-3.5 bg-green-400" style={{ animation: "blink 1s step-end infinite" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floppy slot */}
            <div className="ml-24" style={{ width: 140, height: 12, background: "#333", borderRadius: 6, boxShadow: "inset 2px 2px 5px rgba(0,0,0,0.5)" }} />

            {/* Apple-style logo badge */}
            <div
              className="absolute bottom-[30px] left-[30px]"
              style={{
                width: 20, height: 26,
                borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                background: "linear-gradient(180deg, #63B548 0%, #63B548 16.6%, #F6C829 16.6%, #F6C829 33.3%, #E57D25 33.3%, #E57D25 50%, #D83335 50%, #D83335 66.6%, #9C4595 66.6%, #9C4595 83.3%, #468CCF 83.3%, #468CCF 100%)",
                boxShadow: "inset 1px 1px 2px rgba(0,0,0,0.2)",
              }}
            >
              <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-[3px] h-[7px] rounded-[1px]" style={{ background: "#5a3e28" }} />
            </div>

            {/* Stickers */}
            <div className="absolute bottom-[88px] left-[20px] w-10 h-10 rounded-full" style={{ background: "hsl(24 72% 45%)", transform: "translateZ(101px) rotate(-10deg)", boxShadow: "1px 1px 2px rgba(0,0,0,0.2)" }} />
            <div className="absolute bottom-[98px] left-[50px] w-[45px] h-[45px] rounded-lg bg-white border-2 border-white flex items-center justify-center text-2xl" style={{ transform: "translateZ(102px) rotate(15deg)", color: "hsl(213 60% 43%)", boxShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}>★</div>
            <div className="absolute bottom-[64px] left-[100px] font-mono flex items-center justify-center text-center font-bold" style={{ width: 60, height: 30, background: "#8B0000", color: "#F0E68C", fontSize: 6, letterSpacing: 0.5, transform: "translateZ(101px) rotate(-2deg)", boxShadow: "1px 1px 1px rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.2)" }}>
              MACHINE<br/>INTELLIGENCE
            </div>

            {/* Speaker grill */}
            <div className="absolute bottom-[25px] right-[25px] grid grid-cols-4 gap-[2px]" style={{ width: 30, height: 20 }}>
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="rounded-[1px]" style={{ background: "#333", boxShadow: "inset 1px 1px 1px rgba(0,0,0,0.5)" }} />
              ))}
            </div>
          </div>

          {/* Back */}
          <div className="absolute bg-retro-beige-dark" style={{ width: 360, height: 440, transform: "translateZ(-100px) rotateY(180deg)" }} />
          {/* Left */}
          <div className="absolute bg-retro-beige" style={{ width: 200, height: 440, transform: "rotateY(-90deg) translateZ(100px)", boxShadow: "inset 10px 0 20px rgba(0,0,0,0.05)" }} />
          {/* Right */}
          <div className="absolute bg-retro-beige-dark" style={{ width: 200, height: 440, transform: "rotateY(90deg) translateZ(260px)", boxShadow: "inset 10px 0 20px rgba(0,0,0,0.1)" }} />
          {/* Top */}
          <div className="absolute bg-retro-beige-light" style={{ width: 360, height: 200, transform: "rotateX(90deg) translateZ(100px)" }} />
          {/* Bottom */}
          <div className="absolute bg-retro-beige-shadow" style={{ width: 360, height: 200, transform: "rotateX(-90deg) translateZ(340px)", boxShadow: "0 50px 80px rgba(0,0,0,0.3)" }} />

          {/* Keyboard */}
          <div
            className="absolute"
            style={{
              width: 360, height: 140, bottom: -118,
              transformStyle: "preserve-3d",
              transformOrigin: "top center",
              transform: "translateZ(164px) rotateX(66deg)",
            }}
          >
            <div
              className="absolute w-full h-full overflow-hidden"
              style={{
                background: "hsl(40 16% 85%)",
                transform: "translateZ(9px)",
                boxShadow: "inset 1px 1px 2px rgba(255,255,255,0.5), inset -5px -5px 15px rgba(0,0,0,0.1)",
              }}
            >
              <div className="grid grid-cols-12 gap-1.5 p-4" style={{ transform: "translateZ(8px)", transformStyle: "preserve-3d" }}>
                {Array.from({ length: 36 }).map((_, i) => {
                  const isSpace = i === 28;
                  const isWide = i === 11 || i === 24;
                  let anim = "";
                  if ((i + 1) % 3 === 1) anim = "typeKey 1.5s infinite 0.2s";
                  else if ((i + 1) % 7 === 0) anim = "typeKey 2.1s infinite 0.5s";
                  else if ((i + 1) % 2 === 0 && (i + 1) % 4 !== 0) anim = "typeKey 1.8s infinite 0.9s";
                  return (
                    <div
                      key={i}
                      className={`h-[27px] rounded ${isSpace ? "col-span-6" : isWide ? "col-span-2" : ""}`}
                      style={{
                        background: "#ECE8DA",
                        boxShadow: "0 6px 0 hsl(40 10% 74%), 0 8px 7px rgba(0,0,0,0.2)",
                        transform: "translateZ(1px)",
                        animation: anim || undefined,
                      }}
                    />
                  );
                })}
              </div>
            </div>
            {/* Keyboard sides */}
            <div className="absolute bottom-0 left-0 w-full" style={{ height: 18, background: "linear-gradient(180deg, #cdc9bb 0%, #b5b1a3 100%)", transformOrigin: "bottom center", transform: "translateZ(9px) rotateX(90deg)" }} />
            <div className="absolute top-0 left-0 w-full" style={{ height: 18, background: "linear-gradient(180deg, #e5e1d4 0%, #c9c5b8 100%)", transformOrigin: "top center", transform: "translateZ(9px) rotateX(-90deg)" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetroComputer;
