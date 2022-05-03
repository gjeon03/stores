import axios from "axios";
import { useEffect, useState } from "react";

export default function store({ results }) {
  return (
    <div className="container">
      {results?.map((v, i) => (
        <div key={i}>{v.name}</div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const results = (await axios.get(`http://localhost:3000/api/stores`)).data;
  return {
    props: {
      results,
    },
  };
}
