import { useState, useEffect } from "react"

export function MusicPlayer() {
  // controls whether the embed is visible (UI), not whether it exists
  const [visible, setVisible] = useState(false)

  // Hide the popup on scroll but keep audio playing (iframe stays mounted)
  useEffect(() => {
    const onScroll = () => setVisible(false)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {/* Sticky pill control */}
      <div className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 z-[99999]
                      bg-white/85 backdrop-blur rounded-full shadow px-4 py-2 flex items-center gap-3
                      border border-black/5">
        <button
          aria-label={visible ? "Hide player" : "Show player"}
          onClick={() => setVisible(v => !v)}
          className="text-lg"
        >
          {visible ? "⏷" : "▶︎"}
        </button>
        <span className="text-sm black">&lt;-- Click &amp; Enjoy</span>
        {/* tiny “now playing” blip so people know music continues */}
        <span className="ml-1 h-2 w-2 rounded-full bg-green-500 animate-pulse" aria-hidden />
      </div>

      {/* Always-mounted Spotify embed: we just fade/slide it in/out */}
      <div
        className={[
          "fixed bottom-20 left-1/2 -translate-x-1/2 z-[99998] transition-all duration-300",
          visible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-3 pointer-events-none"
        ].join(" ")}
        aria-hidden={!visible}
      >
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/track/2J91jC5v48Rbm5p6JzfqvW?utm_source=generator"
          width="360"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          // Keep it in the DOM so playback continues even when hidden
        />
      </div>
    </>
  )
}
