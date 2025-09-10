
export const HeroBannerSection = () => {
  return (
    <section className="relative w-full h-screen bg-foreground overflow-hidden">
      {/* Background video */}
      <video
        src="/main.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative flex flex-col gap-2 items-center justify-center h-full text-center font-bold pointer-events-none z-10">
        <p
          className="flex items-center justify-center uppercase leading-5 w-fit h-auto p-10 bg-background text-foreground rounded-full shadow-2xl"
          style={{ aspectRatio: 1/1 }}
        >
          Watch <br /> Reel
        </p>
        <div className="text-background">
          <p>BASIC/DEPT®</p>
          <p>2010-∞</p>
        </div>
      </div>
    </section>
  )
}
