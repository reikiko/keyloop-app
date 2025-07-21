"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setFilters } from "@/state";

const HeroSection = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleLocationSearch = async () => {
    try {
      const trimmedQuery = searchQuery.trim();
      if (!trimmedQuery) return;

      const token = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
      if (!token) {
        console.error("Missing Mapbox token");
        return;
      }

      const url = `https://api.mapbox.com/search/geocode/v6/forward?q=${encodeURIComponent(
        trimmedQuery,
      )}&access_token=${token}&fuzzyMatch=true`;

      const response = await fetch(url);
      const data = await response.json();

      // Updated v6 structure: `features` → `features[0].geometry.coordinates`
      if (data.features && data.features.length > 0) {
        const [lng, lat] = data.features[0].geometry.coordinates;

        dispatch(
          setFilters({
            location: trimmedQuery,
            coordinates: [lng, lat],
          }),
        );

        const params = new URLSearchParams({
          location: trimmedQuery,
          lat: lat.toString(),
          lng: lng,
        });

        router.push(`/search?${params.toString()}`);
      } else {
        console.warn("No location results found.");
      }
    } catch (error) {
      console.error("Error searching location:", error);
    }
  };

  return (
    <div className="relative h-screen">
      <Image
        src={"/landing-splash.jpg"}
        alt={"alt"}
        fill
        className="object-cover object-center"
        priority={true}
      />
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-[40%] transform -translate-x-1/2 -translate-y-1/2 text-center w-full"
      >
        <div className="max-w-4xl mx-auto px-16 sm:px-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Unlock the place that fits your life.
          </h1>
          <p className="text-xl text-white mb-8">
            Browse a wide loop of curated rentals — tailored for your lifestyle,
            your pace, your terms.
          </p>
          <div className="flex justify-center">
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by city, neighborhood or address"
              className="w-full max-w-lg rounded-none rounded-l-xl border-none bg-white h-12"
            />
            <Button
              onClick={handleLocationSearch}
              className="bg-secondary-500 text-white rounded-none rounded-r-xl border-none hover:bg-secondary-600 h-12"
            >
              Search
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
