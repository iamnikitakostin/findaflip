import React from 'react';

interface SearchProps {
  countryFrom: string;
  countryTo: string;
  setCountryFrom: React.Dispatch<React.SetStateAction<string>>;
  setCountryTo: React.Dispatch<React.SetStateAction<string>>;
  setLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}

function Search({
  countryFrom,
  countryTo,
  setCountryFrom,
  setCountryTo,
  setLoaded
}: SearchProps) {

  const change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLoaded(false);
    if (e.target.name === "fromSelect") {
      if (e.target.value === countryTo) {
        setCountryTo(countryFrom);
        setCountryFrom(e.target.value);
      } else if (e.target.value !== countryFrom && e.target.value !== countryTo) {
        setCountryFrom(e.target.value);
      }
    } else {
      if (e.target.value === countryFrom) {
        setCountryFrom(countryTo);
        setCountryTo(e.target.value);
      } else if (e.target.value !== countryTo && e.target.value !== countryFrom) {
        setCountryTo(e.target.value);
      }
    }
  };

  return (
    <div className="flex flex-wrap justify-between items-center w-full bg-white p-4 rounded-lg shadow-md md:flex-row gap-4">
      <div className="flex-1 md:pr-4">
        <label htmlFor="fromSelect" className="block text-gray-700 font-semibold mb-1">
          From
        </label>
        <select
          name="fromSelect"
          id="fromSelect"
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700 text-base"
          value={countryFrom}
          onChange={change}
        >
          <option value="Japan">Japan</option>
          <option value="Canada">Canada</option>
        </select>
      </div>

      <div className="flex-1 md:pr-4">
        <label htmlFor="toSelect" className="block text-gray-700 font-semibold mb-1">
          To
        </label>
        <select
          name="toSelect"
          id="toSelect"
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700 text-base"
          value={countryTo}
          onChange={change}
        >
          <option value="Canada">Canada</option>
          <option value="Japan">Japan</option>
        </select>
      </div>

      <div className="flex justify-center md:justify-stretch self-end md:flex-1 w-full">
        <a
          href="#"
          className="w-full text-center inline-block rounded-lg bg-indigo-900 text-white py-3 px-6 font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
        >
          Search
        </a>
      </div>
    </div>
  );
}

export default Search;
