import React, { useEffect, useState } from 'react';
import CardMaps from '../components/CardMaps';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Agents() {
  const [maps, setMaps] = useState({});
  const [loading, setLoading] = useState(true);
  const language = 'pt-BR'; 

  useEffect(() => {
    const fetchMaps = async () => {
      try {
        const response = await fetch(`https://valorant-api.com/v1/maps?language=${language}`);
        const data = await response.json();
        setMaps(data.data)
        setLoading(false)
      } catch (err) {
        console.error("Erro na req da API", err);
        setLoading(false);
      }
    };

    fetchMaps();
  }, [language]);

  if (loading) {
    return <div className='center'><h1>Carregando...</h1></div>;
  }

  return (
    <div className="container mt-4 ">
          <div className="row" style={{margin:"0 0 0 3vw"}}>
            {maps.map(maps => (
              <CardMaps key={maps.uuid} maps={maps} />
            ))}
          </div>
        </div>
  );
}
