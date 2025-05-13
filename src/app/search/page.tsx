import Link from "next/link";
import Image from "next/image";

// Mock data for property listings
const properties = [
  {
    id: 1,
    title: "Luxury Apartment",
    location: "Downtown",
    price: "₹50,00,000",
    type: "Flat",
    bhk: 3,
    image: "/images/luxury homes 5.jpeg",
  },
  {
    id: 2,
    title: "Modern Villa",
    location: "Suburbs",
    price: "₹1,20,00,000",
    type: "House",
    bhk: 4,
    image: "/images/3d-electric-car-building.jpg",
  },
  {
    id: 3,
    title: "Commercial Space",
    location: "Business District",
    price: "₹75,00,000",
    type: "Shop",
    bhk: 2,
    image: "/images/download (1).jpeg",
  },
  // Add more properties as needed
];

export default function SearchResults() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-light-bg/50">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
            Browse Properties
          </h1>
          <p className="text-light text-lg max-w-2xl mx-auto">
            Discover your perfect property from our curated collection of homes, apartments, and
            commercial spaces
          </p>
        </div>

        {/* Search Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12 border border-light/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-black mb-2">Location</label>
              <input
                type="text"
                placeholder="Enter location"
                className="w-full px-4 py-2.5 rounded-lg border border-light/30 bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-2">Property Type</label>
              <select className="w-full px-4 py-2.5 rounded-lg border border-light/30 bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all">
                <option value="">All Types</option>
                <option value="flat">Flat</option>
                <option value="house">House</option>
                <option value="shop">Shop</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-2">BHK</label>
              <select className="w-full px-4 py-2.5 rounded-lg border border-light/30 bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all">
                <option value="">Any BHK</option>
                <option value="1">1 BHK</option>
                <option value="2">2 BHK</option>
                <option value="3">3 BHK</option>
                <option value="4">4+ BHK</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-2">Price Range</label>
              <select className="w-full px-4 py-2.5 rounded-lg border border-light/30 bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all">
                <option value="">Any Price</option>
                <option value="0-50">Up to 50 Lakhs</option>
                <option value="50-100">50 Lakhs - 1 Cr</option>
                <option value="100+">Above 1 Cr</option>
              </select>
            </div>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
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
                  <span className="text-2xl font-bold text-primary">{property.price}</span>
                  <Link
                    href={`/property/${property.id}`}
                    className="bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-black transition-all text-sm font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
