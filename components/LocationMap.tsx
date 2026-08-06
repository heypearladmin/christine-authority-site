export default function LocationMap() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 md:px-10 md:pb-10 md:pt-24">
        <p className="eyebrow">Visit Us</p>
        <span className="gold-rule mt-4" />
        <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-ink md:text-5xl">
          Find Us
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink/75 md:text-lg">
          2284 West Commodore Way Suite 200
          <br />
          Seattle, WA 98199
        </p>
      </div>
      <div className="w-full overflow-hidden">
        <iframe
          src="https://maps.google.com/maps?cid=17103891605265383455&output=embed"
          loading="lazy"
          width="100%"
          height="450"
          referrerPolicy="no-referrer-when-downgrade"
          title="Christine & Company office location"
          allowFullScreen
          className="block w-full border-0"
        />
      </div>
    </section>
  );
}
