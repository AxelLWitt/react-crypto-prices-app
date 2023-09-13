// Our imports; useParams is designed to read URL params in the address bar
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const Price = (props) => {
  // Our api key from coinapi.io
  const apiKey = 'USE_YOUR_OWN';
  // Grabbing the Currency symbol from the URL Param
  const { symbol } = useParams(); //allows us to interact with our URL
  // Using the other two variables to create our URL
  const url = `https://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  // State to hold the coin data
  const [coin, setCoin] = useState(null);

  // Our function to fetch coin data
  const getCoin = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCoin(data);
  }

  // useEffect to run getCoin when component mounts
  useEffect(() => {
    getCoin();
  }, []);

  // Loaded function for when data is fetched
  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  };

  // Function for when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>;
  };
  // If coin has data, run the loaded function, otherwise, run loading
  return coin ? loaded() : loading();
};

export default Price;