import { Link } from "react-router-dom";
import { values } from "../Data/Products";
const About = () => (
  <main className="flex-1 bg-stone-50 px-4 py-12 sm:px-6 lg:px-10">
    <div className="mx-auto max-w-5xl">
      <section className="rounded-2xl bg-stone-800 px-6 py-14 text-center text-stone-50 shadow-sm sm:px-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-300">About Sevent Care</p>
        <h1 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">Skincare made for everyday care.</h1>
        <p className="mx-auto mt-5 max-w-2xl leading-7 text-stone-300">
          We believe a good skincare routine should feel calm, clear, and easy to keep. Sevent Care brings together essentials for healthy-looking skin.
        </p>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        {values.map((value) => (
          <article key={value.title} className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 font-serif text-lg font-bold text-stone-800">S</div>
            <h2 className="mt-5 text-lg font-semibold text-stone-800">{value.title}</h2>
            <p className="mt-2 text-sm leading-6 text-stone-600">{value.description}</p>
          </article>
        ))}
      </section>

      <section className="mt-12 grid items-center gap-8 rounded-2xl border border-stone-200 bg-white p-7 sm:p-10 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">Our approach</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-stone-800">Small rituals, meaningful care.</h2>
        </div>
        <div>
          <p className="leading-7 text-stone-600">From cleansing to sun protection, we make it easier to build a routine that feels good and supports your skin every day.</p>
          <Link to="/Products1" className="mt-5 inline-block rounded-lg bg-stone-800 px-5 py-3 text-sm font-medium text-white transition hover:bg-stone-900">Explore products</Link>
        </div>
      </section>
    </div>
  </main>
);

export default About;
