import Image from "next/image";
import Link from "next/link";

// Mock data for saved properties
const savedProperties = [
  {
    id: 1,
    title: "Luxury Apartment",
    location: "Downtown",
    price: "₹50,00,000",
    type: "Flat",
    bhk: 3,
    image: "/images/luxury homes 5.jpeg",
    savedAt: "2024-03-15",
  },
  {
    id: 2,
    title: "Modern Villa",
    location: "Suburbs",
    price: "₹1,20,00,000",
    type: "House",
    bhk: 4,
    image: "/images/3d-electric-car-building.jpg",
    savedAt: "2024-03-14",
  },
  {
    id: 3,
    title: "Commercial Space",
    location: "Business District",
    price: "₹75,00,000",
    type: "Shop",
    bhk: 2,
    image: "/images/download (1).jpeg",
    savedAt: "2024-03-13",
  },
];

export default function SavedProperties() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-light-bg/50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
            Saved Properties
          </h1>
          <p className="text-light text-lg max-w-2xl mx-auto">
            Your collection of favorite properties
          </p>
        </div>

        {/* Saved Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {savedProperties.map((property) => (
            <div
              key={property.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-light/20"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <button className="bg-white/90 text-primary p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                    <i className="bx bxs-heart text-xl"></i>
                  </button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary/90 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg">
                    {property.type}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h2 className="text-xl font-bold text-black group-hover:text-primary transition-colors mb-1">
                      {property.title}
                    </h2>
                    <p className="text-light text-sm flex items-center gap-2">
                      <i className="bx bx-map text-primary"></i>
                      {property.location}
                    </p>
                  </div>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {property.bhk} BHK
                  </span>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-light/20">
                  <div>
                    <span className="text-2xl font-bold text-primary block">{property.price}</span>
                    <span className="text-xs text-light">Saved on {property.savedAt}</span>
                  </div>
                  <Link
                    href={`/property/${property.id}`}
                    className="bg-primary text-white px-6 py-2.5 rounded-xl font-medium hover:bg-black transition-all text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {savedProperties.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-light-bg rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="bx bx-heart text-4xl text-light"></i>
            </div>
            <h3 className="text-2xl font-bold text-black mb-2">No Saved Properties</h3>
            <p className="text-light mb-8">
              Start saving properties you like to view them here later
            </p>
            <Link
              href="/search"
              className="bg-primary text-white px-8 py-3 rounded-xl font-medium hover:bg-black transition-all inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <i className="bx bx-search"></i>
              Browse Properties
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
