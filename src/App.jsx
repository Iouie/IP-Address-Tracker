import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Info from "./components/Info";
import EntireMap from "./components/EntireMap";
import axios from "axios";

function App() {
  const apiKey = import.meta.env.VITE_APP_API_KEY;

  const [myData, setmyData] = useState({});

  const testAPI = async (isp) => {
    const response = await axios.get(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${isp}`
    );
    setmyData(response.data);
  };

  useEffect(() => {
    testAPI("");
  }, []);

  console.log(myData);

  return (
    <>
      <main className="font-primary min-h-screen bg-[url('src/assets/pattern-bg-desktop.png')] bg-auto xl:bg-cover">
        <Header />
        <SearchBar />
        <EntireMap getLocation={myData} />
        <Info getLocation={myData} />
      </main>
    </>
  );
}

export default App;
