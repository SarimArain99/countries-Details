import CountriesDetailShimmer from "./CountriesDetailShimmer";
import React, { useContext, useEffect, useState } from "react";
import {
  Link,
  useLocation,
  useParams,
} from "react-router-dom";
import "./Modes.css";
import { themeContext } from "../contexts/ThemeContext";

function CountryDetail() {
  const [countryData, setCountryData] = useState({});
  const [notFound, setNotFound] = useState(false);
  const params = useParams();
  const { state } = useLocation();
  const [isDarkMode] = useContext(themeContext);
  const countryName = params.country;
  function updateCountry(data) {
    setCountryData({
      name: data.name.common,
      flag: data.flags.png,
      nativeName: Object.values(data.name.nativeName)[0].common,
      population: data.population.toLocaleString("en-PK"),
      region: data.region,
      subRegion: data.subregion,
      capital: data.capital.join(",  "),
      TLD: data.tld[0],
      currencies: Object.values(data.currencies)
        .map((crr) => crr.name)
        .join(", "),
      symbol: Object.values(data.currencies)[0].symbol,
      languages: Object.values(data.languages).join(", "),
      map: data.maps.googleMaps,
    });

    if (data.borders && data.borders.length > 0) {
      Promise.all(
        data.borders.map((border) => {
          return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            .then((res) => res.json())
            .then(([borderCountry]) => borderCountry.name.common);
        })
      ).then((borders) => {
        setTimeout(() => {
          setCountryData((prevState) => ({ ...prevState, borders }));
        });
      });
    }
  }

  useEffect(() => {
    if (state) {
      updateCountry(state);
    } else {
      fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
        .then((res) => res.json())
        .then(([data]) => {
          updateCountry(data);
        })
        .catch((error) => {
          setNotFound(true);
          console.error("Error fetching country data:", error);
        });
    }
  }, [state, countryName]);

  if (notFound) {
    return <div>Country Not Found</div>;
  }

  return (
    <>
      {countryData.length === 0 ? (
        <CountriesDetailShimmer />
      ) : (
        <main
          className={`cursor-default ${
            isDarkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"
          } min-h-screen`}
        >
          <button
            onClick={() => history.back()}
            className={`flex  items-center border-2 border-black ${isDarkMode ? 'border-white': 'border-black'} rounded-lg relative top-20 ml-14 mr-12 w-24 text-2xl shadow-md shadow-gray-500 active:bg-gray-300 h-13 `}
            title="Click To Go Back"
          >
            <svg
              className={`h-10 w-8 ${isDarkMode ? 'text-white': 'text-black'} mt-1`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </button>
          <div className="sm:flex items-center justify-center sm:gap-3 mt-24">
            <img
              src={countryData.flag}
              alt={countryData.name}
              className="border border-white m-2 mr-2 sm:w-80 w-72 shadow-xl shadow-gray-500 mb-3 sm:h-52 h-48 "
              title={countryData.name}
            />
            <div className="ml-3 mt-6">
              <h1
                className="text-4xl mt-3 font-bold mb-3"
                title={countryData.name}
              >
                {countryData.name}
              </h1>
              <p>
                Native Name : <b>{countryData.nativeName}</b>
              </p>
              <p>
                Population : <b>{countryData.population}</b>
              </p>
              <p>
                Region : <b>{countryData.region}</b>
              </p>
              <p>
                Sub-Rigion : <b>{countryData.subRegion}</b>
              </p>
              <p>
                Capital : <b>{countryData.capital}</b>
              </p>
              <p>
                Top Level Domain : <b>{countryData.TLD}</b>
              </p>
              <p>
                Currencies : <b>{countryData.currencies}</b>
              </p>
              <p>
                Currency Symbol : <b>{countryData.symbol}</b>
              </p>
              <p>
                Languages : <b>{countryData.languages}</b>
              </p>
              <a href={countryData.map}>
                Google Map :{" "}
                <b
                  className="text-blue-700 sm: text-sm"
                  title={countryData.map}
                >
                  {countryData.map}
                </b>
              </a>

              {countryData.borders && countryData.borders.length > 0 ? (
                <p className="mt-3 pb-5">
                  Borders:
                  {countryData.borders.map((border) => (
                    <b
                      key={border}
                      className="ml-2 pr-1 border border-black rounded-lg active:bg-gray-300"
                      title={border}
                    >
                      {"  "}
                      <Link to={`/${border}`}>{border}</Link>
                    </b>
                  ))}
                </p>
              ) : (
                <p></p> // Display a message when there are no borders
              )}
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default CountryDetail;
