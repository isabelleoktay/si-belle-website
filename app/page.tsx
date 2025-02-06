import ParchmentButton from '@/components/ParchmentButton';

export default function Home() {
  return (
    <div className="relative mx-auto max-w-screen overflow-x-hidden">
      {/* Background Image */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10"
        style={{
          backgroundImage: "url('/images/andromeda_sinned_still_2.png')",
        }}
        id="andromeda-sinned-still_2"
      ></div>
      <div className="fixed top-0 left-0 w-full h-full bg-[rgba(40,42,79,0.25)] z-0 pointer-events-none"></div>

      {/* Section 1: Blank Page */}
      {/* <section className="h-screen flex items-center justify-center font-serif z-50 text-white"> */}
      {/* Content for Section 1 */}
      {/* </section> */}

      {/* Section 2: Picture Frame Alt */}
      <section
        className="h-screen flex flex-col items-center justify-center font-serif z-50 pt-16 pt-32 px-6 space-y-4"
        id="music"
      >
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-12 space-y-2 lg:space-y-0">
          <div className="picture-frame-alt flex-shrink-0"></div>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 items-center justify-items-center w-full lg:max-w-md">
            <ParchmentButton
              imageSrc="/images/parchment_1.png"
              altText="spotify"
              label="Spotify"
              link="https://open.spotify.com/track/4aMrofTPkhtU4N1Isotu0I"
            />
            <ParchmentButton
              imageSrc="/images/parchment_3.png"
              altText="apple music"
              label="Apple Music"
              link=""
            />
            <ParchmentButton
              imageSrc="/images/parchment_4.png"
              altText="youtube"
              label="YouTube"
              link=""
            />
            <ParchmentButton
              imageSrc="/images/parchment_2.png"
              altText="deezer"
              label="Deezer"
              link=""
            />
          </div>
        </div>
        <div className="font-serif text-amber-500 z-50 tracking-widest text-center">
          <div className="font-display text-2xl lg:text-4xl">
            Andromeda Sinned
          </div>
          <div className="text-lg lg:text-2xl">Out Now</div>
        </div>
      </section>

      {/* Section 3: Video */}
      <section
        className="h-screen flex flex-col items-center justify-center font-serif z-50 text-white pt-16 lg:pt-32"
        id="video"
      >
        <div className="picture-frame relative z-10">
          <iframe
            className="absolute top-0 left-0 w-full h-full z-0 xl:p-6 lg:p-4"
            src="https://www.youtube.com/embed/yIRf64zwh4c"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="font-serif text-amber-500 z-50 tracking-widest flex flex-col items-center text-center">
          <div className="font-display text-2xl lg:text-4xl">
            Andromeda Sinned
          </div>
          <div className="text-lg lg:text-2xl">Music Video</div>
        </div>
      </section>

      {/* Section 4: Contact */}
      <section
        className="h-screen flex flex-col items-center justify-center font-serif z-50 text-amber-500"
        id="contact"
      >
        <div className="font-display text-4xl lg:text-6xl z-50">Contact</div>
        <div className="text-2xl lg:text-4xl z-50">
          vndrxmedvofficial@gmail.com
        </div>
      </section>
    </div>
  );
}
