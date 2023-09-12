import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Info from "./components/Info";
import EntireMap from "./components/EntireMap";
import axios from "axios";

function App() {
  const apiKey = import.meta.env.VITE_APP_API_KEY;

  const [myData, setmyData] = useState({});
  const [isLoading, setisLoading] = useState(false);

  const testAPI = async (isp) => {
    setisLoading(true);
    const response = await axios.get(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${isp}`
    );
    setmyData(response.data);
  };

  useEffect(() => {
    testAPI("");
    setisLoading(false);
  }, []);

  console.log(myData);

  return (
    <>
      <main className="font-primary min-h-screen bg-[url('src/assets/pattern-bg-desktop.png')] bg-auto xl:bg-cover">
        <Header />
        <SearchBar />
        <EntireMap />
        <Info getLocation={myData} checkLoading={isLoading} />
      </main>
    </>
  );
}

export default App;
