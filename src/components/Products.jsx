export default function Products() {
  const products = [
    { name: "Mango", img: "https://source.unsplash.com/400x300/?mango" },
    { name: "Rice", img: "https://source.unsplash.com/400x300/?rice" },
    { name: "Cashew", img: "https://source.unsplash.com/400x300/?cashew" },
    { name: "Spices", img: "https://source.unsplash.com/400x300/?spices" }
  ];

  return (
    <section className="py-24 px-10 bg-gray-50">

      <h2 className="text-4xl font-semibold text-center mb-12">
        Our Products
      </h2>

      <div className="grid md:grid-cols-4 gap-8">

        {products.map((p, i) => (
          <div key={i} className="bg-white rounded-xl shadow hover:shadow-xl transition">

            <img src={p.img} className="h-56 w-full object-cover rounded-t-xl" />

            <div className="p-4">
              <h3 className="font-semibold">{p.name}</h3>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}