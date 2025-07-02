import { motion } from "framer-motion";
import type { Route } from "./+types/country";

export async function clientLoader({ params }: Route.LoaderArgs) {
    const countryName = params.countryName;
    const res = await fetch(
    `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    );
    const data = await res.json();
    return data;
}

export default function Country({ loaderData }: Route.ComponentProps) {
    const data = loaderData[0];

    const country = {
    name: data?.name?.common || "N/A",
    officialName: data?.name?.official || "N/A",
    region: data?.region || "N/A",
    subregion: data?.subregion || "N/A",
    capital: data?.capital?.[0] || "N/A",
    population: data?.population || "N/A",
    flagUrl: data?.flags?.png || "",
    timezones: data?.timezones || [],
    languages: data?.languages
        ? Object.values(data.languages).join(", ")
        : "N/A",
    currencies: data?.currencies
        ? Object.values(data.currencies)
            .map((c) => `${c.name} (${c.symbol})`)
            .join(", ")
        : "N/A",
    };

    return (
    <section className=" bg-white py-18 px-4 md:px-8 lg:px-96">
        <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        >
        {/* Info Block */}
        <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
        >
            <h2 className="text-7xl font-extrabold text-indigo-700">
            {country.name}
            </h2>
            <div className="space-y-3 text-gray-700 text-lg leading-relaxed">
            <p>
                <span className="font-semibold">Official Name:</span>{" "}
                {country.officialName}
            </p>
            <p>
                <span className="font-semibold">Capital:</span> {country.capital}
            </p>
            <p>
                <span className="font-semibold">Region:</span> {country.region}
            </p>
            <p>
                <span className="font-semibold">Subregion:</span>{" "}
                {country.subregion}
            </p>
            <p>
                <span className="font-semibold">Population:</span>{" "}
                {country.population.toLocaleString()}
            </p>
            <p>
                <span className="font-semibold">Languages:</span>{" "}
                {country.languages}
            </p>
            <p>
                <span className="font-semibold">Currencies:</span>{" "}
                {country.currencies}
            </p>
            <p>
                <span className="font-semibold">Timezones:</span>{" "}
                {country.timezones.join(", ")}
            </p>
            </div>
        </motion.div>

        {/* Flag Block */}
        {country.flagUrl && (
            <motion.div
            className="flex justify-center items-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            >
            <img
                src={country.flagUrl}
                alt={`Flag of ${country.name}`}
                className="w-`120 h-auto border-2 border-indigo-200 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            />
            </motion.div>
        )}
        </motion.div>
    </section>
    );
}
