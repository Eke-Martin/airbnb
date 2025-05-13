import Image from "next/image";
import Link from "next/link";

// Mock data for a single property
const property = {
  id: 1,
  title: "Luxury Apartment",
  location: "Downtown",
  price: "₹50,00,000",
  type: "Flat",
  bhk: 3,
  area: "2,500 sq.ft",
  description:
    "Experience luxury living in this stunning apartment located in the heart of the city. This property offers modern amenities, spacious rooms, and breathtaking views.",
  features: ["Fully Furnished", "24/7 Security", "Swimming Pool", "Gym", "Parking", "Garden"],
  images: [
    "/images/luxury homes 5.jpeg",
    "/images/3d-electric-car-building.jpg",
    "/images/download (1).jpeg",
    "/images/moscow city 8.jpeg",
  ],
};

export default function PropertyDetails() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-light-bg/50">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/search"
            className="text-primary hover:text-black transition-colors flex items-center gap-2"
          >
            <i className="bx bx-arrow-back"></i>
            Back to Search
          </Link>
        </div>

        {/* Property Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-light/20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">{property.title}</h1>
              <p className="text-light text-lg flex items-center gap-2">
                <i className="bx bx-map text-primary"></i>
                {property.location}
              </p>
            </div>
            
            {/* Property Type, BHK, Area */}
            <div className="flex flex-wrap gap-3">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                {property.type}
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                {property.bhk} BHK
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                {property.area}
              </span>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <div className="relative h-[500px] rounded-2xl overflow-hidden group">
              <Image
                src={property.images[0]}
                alt={property.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {property.images.slice(1).map((image, index) => (
              <div key={index} className="relative h-[240px] rounded-2xl overflow-hidden group">
                <Image
                  src={image}
                  alt={`${property.title} - Image ${index + 2}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Property Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-light/20">
              <h2 className="text-2xl font-bold text-black mb-6">Description</h2>
              <p className="text-light leading-relaxed mb-8">{property.description}</p>

              <h2 className="text-2xl font-bold text-black mb-6">Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-light-bg/50 p-4 rounded-xl"
                  >
                    <i className="bx bx-check-circle text-primary text-xl"></i>
                    <span className="text-black font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-light/20 sticky top-8">
              <div className="text-center mb-8">
                <span className="text-3xl font-bold text-primary block mb-2">{property.price}</span>
                <p className="text-light">Price</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-light-bg/50 rounded-xl">
                  <span className="text-black font-medium">Property Type</span>
                  <span className="text-primary font-medium">{property.type}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-light-bg/50 rounded-xl">
                  <span className="text-black font-medium">BHK</span>
                  <span className="text-primary font-medium">{property.bhk} BHK</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-light-bg/50 rounded-xl">
                  <span className="text-black font-medium">Area</span>
                  <span className="text-primary font-medium">{property.area}</span>
                </div>
              </div>

              <button className="w-full bg-primary text-white py-4 rounded-xl font-medium mt-8 hover:bg-black transition-all transform hover:-translate-y-0.5 duration-300 shadow-lg hover:shadow-xl">
                Contact Owner
              </button>

              <div className="mt-8 p-6 bg-primary/5 rounded-xl">
                <h3 className="text-lg font-bold text-black mb-4">Interested in this property?</h3>
                <p className="text-light mb-4">
                  Schedule a visit or get more information about this property.
                </p>
                <button className="w-full bg-white text-primary py-3 rounded-xl font-medium border-2 border-primary hover:bg-primary hover:text-white transition-all">
                  Schedule Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
