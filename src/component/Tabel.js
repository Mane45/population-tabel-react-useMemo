import { useState } from "react";
import "./Tabel.css";

function Tabel({data}) {
  const [tabeldata, setTabeldata] = useState(data);

  function handlesort(e) {
    const value = e.target.value;
    const data1 = [...data].sort((a, b) => (a[value] < b[value] ? -1 : 1));
    setTabeldata(data1)
  }

  return (
    <>
      <div>
        <button onClick={handlesort} value="country">
          sort by country
        </button>
        <button onClick={handlesort} value="city">
          sort by city
        </button>
      </div>
      <div className="tabel">
        <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>City</th>
              <th>Year</th>
              <th>Population</th>
            </tr>
          </thead>
          <tbody>
            {tabeldata.length
              ? tabeldata.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item["country"]}</td>
                      <td>{item["city"]}</td>
                      <td>{item["populationCounts"][0]["year"]}</td>
                      <td>{item["populationCounts"][0]["value"]}</td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Tabel;
