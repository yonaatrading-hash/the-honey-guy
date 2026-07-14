export default function WhyHoney() {
  const reasons = [
    {
      title: "Wild Forest Bees",
      text: "Our bees forage freely in Ethiopia's untouched forests rather than agricultural farmland.",
    },
    {
      title: "Rich Floral Diversity",
      text: "Hundreds of native flowering plants create a naturally complex flavor and aroma.",
    },
    {
      title: "Traditional Harvest",
      text: "Harvested with care using generations of local beekeeping knowledge.",
    },
    {
      title: "Pure & Authentic",
      text: "Simply filtered and carefully packed to preserve its natural character.",
    },
  ];

  return (
    <section className="bg-[#F8F5EE] py-36 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-24">

          <p className="uppercase tracking-[0.4em] text-[#A96A08] text-sm font-semibold">
            WHY CHOOSE US
          </p>

          <h2 className="mt-5 text-5xl font-bold text-[#2B2117]">
            Why Ethiopian Forest Honey?
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-600">
            Nature does the hard work. We simply protect it and share it with you.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group rounded-[32px] bg-white p-10 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Gold accent */}
              <div className="mb-8 h-1 w-16 rounded-full bg-[#D89B1D] transition-all duration-300 group-hover:w-24" />

              <h3 className="text-2xl font-semibold text-amber-900">
                {reason.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-600">
                {reason.text}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}