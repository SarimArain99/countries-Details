import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CountriesShimmer from "./CountriesShimmer";
import "./Modes.css";
import { themeContext } from "../contexts/ThemeContext";

function CountryList({ query, region }) {
  const [countriesData, setCountriesData] = useState([]);
  const [isDarkMode] = useContext(themeContext);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);

  return (
    <>
      {countriesData.length === 0 ? (
        <CountriesShimmer />
      ) : (
        <main
          className={`${
            isDarkMode ? "dark" : ""
          } grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 min-h-screen`}
        >
          {countriesData
            .filter((country) =>
              country.name.common.toLowerCase().includes(query.toLowerCase())
            )
            .filter((country) => (region ? country.region === region : true))
            .map((country) => {
              const { flags, name, population, capital, region } = country;
 
              return (
                <Link key={name.common} to={`/${name.common}`} state={country}>
                  <div
                    className="w-60 h-80 rounded-lg overflow-hidden sm: ml-9 md:ml-4 mt-8 mb-6 shadow-lg shadow-gray-500 hover:scale-105 "
                    title={`Click to see more details about ${name.common}`}
                  >
                    <img
                      src={flags.png}
                      alt={`${name.common}`}
                      className="h-36 w-60"
                    />

                    <h2 className="flex justify-center text-2xl font-bold mt-4 mb-2">
                      {name.common}
                    </h2>

                    <p className="ml-2">
                      Population: <b>{population.toLocaleString("en-PK")}</b>
                    </p>

                    <p className="ml-2">
                      Capital: <b>{capital ? capital[0] : "N/A"}</b>
                    </p>

                    <p className="ml-2">
                      Region: <b>{region}</b>
                    </p>
                  </div>
                </Link>
              );
            })}
        </main>
      )}
    </>
  );
}

export default CountryList;
