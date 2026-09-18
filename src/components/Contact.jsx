import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <main className="flex-1 bg-stone-50 px-4 py-12 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">Contact us</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-stone-800">We would love to hear from you.</h1>
          <p className="mt-4 leading-7 text-stone-600">Have a question about a product or your skincare routine? Send us a message and our team will get back to you.</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-2xl bg-stone-800 p-7 text-stone-50 sm:p-8">
            <h2 className="font-serif text-2xl font-semibold">Get in touch</h2>
            <div className="mt-7 space-y-6 text-sm">
              <div><p className="font-semibold text-stone-200">Email</p><a className="mt-1 block text-stone-300 hover:text-white" href="mailto:hello@seventcare.com">hello@seventcare.com</a></div>
              <div><p className="font-semibold text-stone-200">Hours</p><p className="mt-1 text-stone-300">Monday–Friday, 9:00 AM–5:00 PM</p></div>
              <div><p className="font-semibold text-stone-200">Support</p><p className="mt-1 text-stone-300">We typically reply within two business days.</p></div>
            </div>
          </aside>

          <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
            {submitted && <p role="status" className="mb-6 rounded-lg bg-green-50 p-4 text-sm text-green-800">Thanks for your message. We’ll be in touch soon.</p>}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-medium text-stone-700">Name<input required name="name" className="mt-2 w-full rounded-lg border border-stone-300 bg-white px-3 py-2.5 text-stone-900 outline-none transition focus:border-stone-800 focus:ring-2 focus:ring-stone-200" /></label>
                <label className="text-sm font-medium text-stone-700">Email<input required type="email" name="email" className="mt-2 w-full rounded-lg border border-stone-300 bg-white px-3 py-2.5 text-stone-900 outline-none transition focus:border-stone-800 focus:ring-2 focus:ring-stone-200" /></label>
              </div>
              <label className="block text-sm font-medium text-stone-700">Subject<input required name="subject" className="mt-2 w-full rounded-lg border border-stone-300 bg-white px-3 py-2.5 text-stone-900 outline-none transition focus:border-stone-800 focus:ring-2 focus:ring-stone-200" /></label>
              <label className="block text-sm font-medium text-stone-700">Message<textarea required name="message" rows="5" className="mt-2 w-full resize-y rounded-lg border border-stone-300 bg-white px-3 py-2.5 text-stone-900 outline-none transition focus:border-stone-800 focus:ring-2 focus:ring-stone-200" /></label>
              <button type="submit" className="w-full rounded-lg bg-stone-800 px-5 py-3 text-sm font-medium text-white transition hover:bg-stone-900">Send message</button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Contact;
