import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/luxury-home-1.jpeg"
            alt="Luxury Home Background"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-6 tracking-tight">
              Find Your Dream Home
            </h1>
            <p className="text-xl md:text-2xl text-white/90 text-center mb-12 max-w-2xl mx-auto font-light">
              Discover the perfect property that matches your lifestyle and preferences
            </p>

            <form
              action="/search"
              method="post"
              className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-light/20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="lg:col-span-4">
                  <label className="block text-black font-medium mb-1.5 text-sm">
                    Enter Location <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    maxLength={50}
                    placeholder="Enter Your Preferred Location"
                    className="w-full px-4 py-2.5 border border-light/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white text-black text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-black font-medium mb-1.5 text-sm">
                    Property Type <span className="text-primary">*</span>
                  </label>
                  <select
                    name="type"
                    className="w-full px-4 py-2.5 border border-light/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white text-black text-sm transition-all"
                    required
                  >
                    <option value="">Select Type</option>
                    <option value="flat">Flat</option>
                    <option value="house">House</option>
                    <option value="shop">Shop</option>
                  </select>
                </div>

                <div>
                  <label className="block text-black font-medium mb-1.5 text-sm">
                    BHK <span className="text-primary">*</span>
                  </label>
                  <select
                    name="bhk"
                    className="w-full px-4 py-2.5 border border-light/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white text-black text-sm transition-all"
                    required
                  >
                    <option value="">Select BHK</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} BHK
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-black font-medium mb-1.5 text-sm">
                    Min Budget <span className="text-primary">*</span>
                  </label>
                  <select
                    name="minimum"
                    className="w-full px-4 py-2.5 border border-light/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white text-black text-sm transition-all"
                    required
                  >
                    <option value="">Select Min Budget</option>
                    {[
                      { value: 500000, label: "5 lac" },
                      { value: 1000000, label: "10 lac" },
                      { value: 2000000, label: "20 lac" },
                      { value: 5000000, label: "50 lac" },
                      { value: 10000000, label: "1 Cr" },
                      { value: 20000000, label: "2 Cr" },
                      { value: 50000000, label: "5 Cr" },
                      { value: 100000000, label: "10 Cr" },
                    ].map(({ value, label }) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-black font-medium mb-1.5 text-sm">
                    Max Budget <span className="text-primary">*</span>
                  </label>
                  <select
                    name="maximum"
                    className="w-full px-4 py-2.5 border border-light/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white text-black text-sm transition-all"
                    required
                  >
                    <option value="">Select Max Budget</option>
                    {[
                      { value: 1000000, label: "10 lac" },
                      { value: 2000000, label: "20 lac" },
                      { value: 5000000, label: "50 lac" },
                      { value: 10000000, label: "1 Cr" },
                      { value: 20000000, label: "2 Cr" },
                      { value: 50000000, label: "5 Cr" },
                      { value: 100000000, label: "10 Cr" },
                      { value: 200000000, label: "20 Cr" },
                    ].map(({ value, label }) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6 text-center">
                <button
                  type="submit"
                  className="bg-primary text-white px-8 py-6 rounded-lg hover:bg-black transition-all text-sm font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-300"
                >
                  Search Property
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Featured Properties</h2>
            <p className="text-light text-lg font-light">
              Explore our handpicked selection of premium properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300 border border-light/20"
              >
                <div className="relative h-64 rounded-t-2xl overflow-hidden">
                  <Image
                    src={`/images/luxury-home-${index + 1}.jpeg`}
                    alt={`Featured Property ${index}`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg">
                    Featured
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Luxury Apartment {index}</h3>
                  <p className="text-light mb-4">Downtown, City</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">₹50,00,000</span>
                    <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
                      3 BHK
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-light-bg">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Our Services</h2>
            <p className="text-light text-lg font-light">
              Discover a wide range of real estate services tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Buy House",
                description: "Find your dream home with our extensive listings of houses for sale.",
                image: "/images/real-estate-transactions.jpeg",
              },
              {
                title: "Rent House",
                description: "Discover rental properties that match your lifestyle and budget.",
                image: "/images/modern-building.jpg",
              },
              {
                title: "Sell House",
                description: "List your property with us and connect with potential buyers.",
                image: "/images/luxury-home-1.jpeg",
              },
              {
                title: "Flat And Building",
                description: "Explore our selection of apartments and commercial buildings.",
                image: "/images/luxury-home-2.jpeg",
              },
              {
                title: "Shops And Malls",
                description: "Find the perfect commercial space for your business.",
                image: "/images/commercial-space.jpeg",
              },
              {
                title: "24/7 Services",
                description: "Get round-the-clock support for all your real estate needs.",
                image: "/images/customer-service.jpeg",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300 border border-light/20"
              >
                <div className="relative h-56 rounded-t-2xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-light font-light">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Why Choose Us</h2>
            <p className="text-light text-lg font-light">
              Experience the best in real estate services with our trusted platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "bx bx-home-alt",
                title: "Wide Selection",
                description: "Access to thousands of verified properties",
              },
              {
                icon: "bx bx-shield-quarter",
                title: "Trusted Platform",
                description: "Secure and reliable property transactions",
              },
              {
                icon: "bx bx-support",
                title: "24/7 Support",
                description: "Round-the-clock customer assistance",
              },
              {
                icon: "bx bx-badge-check",
                title: "Verified Listings",
                description: "All properties are thoroughly verified",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-light-bg hover:bg-primary/5 transition-all duration-300 border border-light/20"
              >
                <i className={`${feature.icon} text-4xl text-primary mb-4`}></i>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-light font-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
