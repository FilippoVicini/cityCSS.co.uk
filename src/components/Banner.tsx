export default function Banner() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-[#3760ff] py-24 mt-16"
    >
      <img
        alt=""
        loading="lazy"
        width="2347"
        height="1244"
        decoding="async"
        data-nimg="1"
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        style={{ color: "transparent" }}
        src="/_next/static/media/background-call-to-action.6a5a5672.jpg"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-4xl tracking-tight text-white font-semibold sm:text-5xl">
            Get Started Today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">Hello</p>
          <a
            className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10"
            href="/contact"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
