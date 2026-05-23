export default function BlogPage() {
  return (
    <section className="relative px-6 py-24">
      <div className="flex min-h-screen flex-col items-center justify-center text-center">
        <h1 className="h1-bold">Blog</h1>
        <p className="regular-paragraph mt-8 max-w-[600px]">
          Blogs coming soon. Stay tuned for articles on modern technologies,
          all-round development, and more.
        </p>
        <p className="font-silkscreen mt-16 text-sm uppercase tracking-widest text-silverchalice">
          Janith.Perera
        </p>
      </div>

      <div className="blog-grid-pattern absolute inset-0 -z-10 opacity-50" />
    </section>
  );
}
