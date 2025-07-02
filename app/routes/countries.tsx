import { useState } from "react";
import { Link } from "react-router";
import type { Route } from "./+types/countries";

export async function clientLoader() {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flag"
  );
  const data = await res.json();
  return data;
}

export default function Countries({ loaderData }: Route.ComponentProps) {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  const filteredCountries = loaderData.filter((country: any) => {
    const matchesRegion =
      !region || country.region.toLowerCase().includes(region.toLowerCase());
    const matchesSearch =
      !search ||
      country.name.common.toLowerCase().includes(search.toLowerCase());
    return matchesSearch && matchesRegion;
  });

  return (
    <section className="w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-16 mx-auto">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Explore Countries
        </h1>
        <p className="mt-3 text-gray-600 text-lg max-w-2xl mx-auto">
          Search and browse countries by name or region, and view their basic stats.
        </p>
      </header>

      {/* Filters */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
        <input
          type="search"
          aria-label="Search countries by name"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <select
          aria-label="Filter by region"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">All Regions</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      {/* Results */}
      {filteredCountries.length === 0 ? (
        <div className="text-center text-gray-500 text-lg" >
          No countries found.
        </div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCountries.map((country: any, index: number) => (
            <li
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition p-6"
            >
              <Link
                to={`/countries/${country.name.common}`}
                className="block mb-2 text-xl font-semibold text-indigo-600 hover:underline"
              >
                {country.name.common}
              </Link>
              <div className="space-y-1 text-sm text-gray-700">
                <p>
                  <span className="font-medium">Capital:</span>{" "}
                  {country.capital?.[0] ?? "N/A"}
                </p>
                <p>
                  <span className="font-medium">Region:</span> {country.region}
                </p>
                <p>
                  <span className="font-medium">Population:</span>{" "}
                  {country.population.toLocaleString()}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
