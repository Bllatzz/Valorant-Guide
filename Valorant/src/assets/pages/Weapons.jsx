import React, { useEffect, useState } from 'react';
import CardWeapons from '../components/CardWeapons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/agents.scss';

export default function Weapons() {
  const [weaponsByCategory, setWeaponsByCategory] = useState({});
  const [loading, setLoading] = useState(true);
  const language = 'pt-BR'; 

  useEffect(() => {
    const fetchWeapons = async () => {
      try {
        const response = await fetch(`https://valorant-api.com/v1/weapons?language=${language}`);
        const data = await response.json();
        
        if (!data || !data.data || data.data.length === 0) {
          throw new Error('Dados de armas não encontrados');
        }
        
        const weaponsGroupedByCategory = {};

        data.data.forEach(weapon => {
          if (weapon.role && weapon.role.displayName) {
            const category = weapon.role.displayName;
            if (!weaponsGroupedByCategory[category]) {
              weaponsGroupedByCategory[category] = [];
            }
            weaponsGroupedByCategory[category].push(weapon);
          } else {
            const category = 'Outros'; 
            if (!weaponsGroupedByCategory[category]) {
              weaponsGroupedByCategory[category] = [];
            }
            weaponsGroupedByCategory[category].push(weapon);
          }
        });

        setWeaponsByCategory(weaponsGroupedByCategory);
        setLoading(false);
      } catch (err) {
        console.error("Erro na requisição da API de armas", err);
        setLoading(false);
      }
    };

    fetchWeapons();
  }, [language]);

  if (loading) {
    return <div className='center'><h1>Carregando...</h1></div>;
  }

  if (Object.keys(weaponsByCategory).length === 0) {
    return <div className='center'><h1>Nenhuma arma encontrada</h1></div>;
  }

  return (
    <div className="container mt-4">
      {Object.keys(weaponsByCategory).map(category => (
        <div key={category}>
          <h2>{category}</h2>
          <div className="row">
            {weaponsByCategory[category].map(weapons => (
              <CardWeapons key={weapons.uuid} weapons={weapons} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
