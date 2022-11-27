import { useEffect, useMemo, useState} from 'react';
import './App.css';
import Tabel from './component/Tabel';

function App() {
  const [data, setData] = useState([]); 
  function getData() {
    fetch(
      "https://countriesnow.space/api/v0.1/countries/population/cities"
    )
      .then((res) => res.json())
      .then((response) => {
        console.log(response.data.slice(0, 20));
        setData(response.data.slice(0, 20))
      });
  }

  useEffect(() => {
    getData();
  }, []);

  const dataTabel= useMemo(() => {
    return data;
  });

  return (
    <div className="App">
      <h1>Population Tabel</h1>
      <Tabel data={dataTabel}/>
    </div>
  );
}

export default App;
