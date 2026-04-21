export default function Contact() {
  return (
    <section className="py-24 px-10 bg-gray-50">

      <h2 className="text-4xl font-semibold">Contact Us</h2>
      <p className="text-gray-500 mb-6">Get in touch</p>

      <a href="mailto:palenterprises014@gmail.com" className="text-blue-600">
        palenterprises014@gmail.com
      </a>

      <form className="grid md:grid-cols-2 gap-4 mt-6 max-w-3xl">

        <input placeholder="Name" className="border p-3 rounded" />
        <input placeholder="Email" className="border p-3 rounded" />

        <textarea className="col-span-2 border p-3 rounded" placeholder="Message"></textarea>

        <button className="bg-black text-white py-3 rounded col-span-2">
          Send Message
        </button>

      </form>
    </section>
  );
}