import React from 'react';
import Listings from '../components/Listings';
import Search from '../components/Search';
import axios from 'axios';
import { CircleLoader } from 'react-spinners';

function Home() {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  const [countryFrom, setCountryFrom] = React.useState<string>("Japan");
  const [countryTo, setCountryTo] = React.useState<string>("Canada");
  const [showAlert, setShowAlert] = React.useState<boolean>(true); 

  const SPREADSHEET_ID = import.meta.env.VITE_APP_SPREADSHEET;
  const SHEET_NAME = `${countryFrom}To${countryTo}`;
  const API_KEY = import.meta.env.VITE_APP_API_KEY;
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;
        const response = await axios.get(url, { signal: controller.signal });
        const dataWithoutFirst = response.data.values.slice(1);
        setData(dataWithoutFirst);
        setLoaded(true);
      } catch (error) {
          console.error("Error fetching data: ", error);
          setLoaded(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [SHEET_NAME]);

  React.useEffect(() => {
    if (!loaded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [loaded]);

  return (
    <div className="relative flex flex-col m-6 md:m-20">
      {showAlert && (
        <div className="fixed top-0 left-0 w-full bg-yellow-200 text-gray-800 p-4 shadow-lg z-50 flex justify-between items-center">
          <div className="flex items-center">
            <p className="text-xl font-bold mr-4 text-red-500">!</p>
            <p className="text-sm md:text-base">
              The content on this website is for informational purposes only. Make sure to research the customs laws of a particular country before the transaction.<br/>Users should conduct their own research and consult with appropriate legal or financial professionals before engaging in any transactions.
            </p>
          </div>
          <button
            onClick={() => setShowAlert(false)}
            className="text-gray-800 font-bold hover:text-red-500 transition"
          >
            &times;
          </button>
        </div>
      )}

      {!loaded && (
        <div className="fixed h-[100vh] w-full bg-blue-900 top-0 left-0 flex justify-center items-center">
          <CircleLoader color="#ffffff" />
        </div>
      )}
      <Search
        countryFrom={countryFrom}
        countryTo={countryTo}
        setCountryFrom={setCountryFrom}
        setCountryTo={setCountryTo}
        setLoaded={setLoaded}
      />
      <Listings data={data} setLoaded={setLoaded} />
    </div>
  );
}

export default Home;