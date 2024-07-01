export default function Html() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center flex-col sm:flex-row flex-wrap">
      <iframe src="/html/accordion.html" width="300" className="overflow-scroll aspect-square border" />
      <iframe src="/html/carousel.html" width="300" className="overflow-scroll aspect-square border" />
      <iframe src="/html/carousel2.html" width="300" className="overflow-scroll aspect-square border" />
    </section>
  );
}
