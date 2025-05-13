import { useState } from "react";
import Image from "next/image";

export default function PostProperty() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-light-bg/50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
            Post Your Property
          </h1>
          <p className="text-light text-lg max-w-2xl mx-auto">
            List your property and reach potential buyers or tenants quickly
          </p>
        </div>

        {/* Main Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-light/20">
            {/* Progress Steps */}
            <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4 sm:gap-0">
              {["Basic Info", "Details", "Photos", "Review"].map((step, index) => (
                <div key={step} className="flex items-center w-full sm:w-auto">
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm sm:text-base ${
                      index === 0 ? "bg-primary text-white" : "bg-light-bg text-light"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span
                    className={`ml-2 text-sm font-medium ${
                      index === 0 ? "text-primary" : "text-light"
                    }`}
                  >
                    {step}
                  </span>
                  {index < 3 && (
                    <div className="hidden sm:block w-8 sm:w-16 h-0.5 mx-4 bg-light-bg"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Form Content */}
            <form className="space-y-8">
              {/* Basic Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-black">Basic Information</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Property Title
                    </label>
                    <input
                      type="text"
                      placeholder="Enter property title"
                      className="w-full px-4 py-2.5 rounded-xl border border-light/30 bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Property Type
                    </label>
                    <select className="w-full px-4 py-2.5 rounded-xl border border-light/30 bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all">
                      <option value="">Select type</option>
                      <option value="flat">Flat</option>
                      <option value="house">House</option>
                      <option value="shop">Shop</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Price</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-light">₹</span>
                      <input
                        type="number"
                        placeholder="Enter price"
                        className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-light/30 bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">BHK</label>
                    <select className="w-full px-4 py-2.5 rounded-xl border border-light/30 bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all">
                      <option value="">Select BHK</option>
                      <option value="1">1 BHK</option>
                      <option value="2">2 BHK</option>
                      <option value="3">3 BHK</option>
                      <option value="4">4+ BHK</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-black">Location</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Address</label>
                    <input
                      type="text"
                      placeholder="Enter full address"
                      className="w-full px-4 py-2.5 rounded-xl border border-light/30 bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">City</label>
                    <input
                      type="text"
                      placeholder="Enter city"
                      className="w-full px-4 py-2.5 rounded-xl border border-light/30 bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-black">Description</h2>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Property Description
                  </label>
                  <textarea
                    placeholder="Describe your property..."
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-xl border border-light/30 bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-black">Features</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "Fully Furnished",
                    "24/7 Security",
                    "Swimming Pool",
                    "Gym",
                    "Parking",
                    "Garden",
                    "Power Backup",
                    "Lift",
                  ].map((feature) => (
                    <label
                      key={feature}
                      className="flex items-center gap-3 p-4 bg-light-bg/50 rounded-xl cursor-pointer hover:bg-light-bg transition-colors"
                    >
                      <input
                        type="checkbox"
                        className="w-5 h-5 rounded border-light/30 text-primary focus:ring-primary/30"
                      />
                      <span className="text-black font-medium">{feature}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Photos */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-black">Photos</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <label className="relative aspect-square rounded-xl border-2 border-dashed border-light/30 flex items-center justify-center cursor-pointer hover:border-primary/50 transition-colors group">
                    <input type="file" className="hidden" multiple accept="image/*" />
                    <div className="text-center">
                      <i className="bx bx-camera text-3xl text-light group-hover:text-primary mb-2"></i>
                      <p className="text-sm text-light group-hover:text-primary">Add Photos</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-xl font-medium hover:bg-black transition-all transform hover:-translate-y-0.5 duration-300 shadow-lg hover:shadow-xl"
                >
                  Post Property
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
