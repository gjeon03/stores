import axios from "axios";
import { useEffect, useState } from "react";

export default function store() {
  const [stores, setStores] = useState([]);
  useEffect(() => {
    (async () => {
      const results = (await axios.get(`/api/stores`)).data;
      setStores(results);
    })();
  }, []);
  return (
    <div>
      {!stores && <h4>Loading...</h4>}
      {stores?.map((v, i) => (
        <div key={i}>{v.name}</div>
      ))}
    </div>
  );
}
