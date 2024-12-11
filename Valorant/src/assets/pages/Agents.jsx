import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import CardCategory from '../components/CardCategory';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../scss/agents.scss';

const pluralizeCategory = (category) => {
  if (category.endsWith('or')) {
    return `${category}es`;
  }
  return `${category}s`;
};

export default function Agents() {
  const [agentsByCategory, setAgentsByCategory] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const language = 'pt-BR';
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Valorant Agents'
    const fetchAgents = async () => {
      try {
        const response = await fetch(`https://valorant-api.com/v1/agents?language=${language}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        const playableAgents = data.data.filter(agent => agent.isPlayableCharacter);

        const agentsGroupedByCategory = {};
        playableAgents.forEach(agent => {
          const category = agent.role.displayName;
          if (!agentsGroupedByCategory[category]) {
            agentsGroupedByCategory[category] = [];
          }
          agentsGroupedByCategory[category].push(agent);
        });

        setAgentsByCategory(agentsGroupedByCategory);
        setLoading(false);
      } catch (err) {
        console.error("Erro na requisição da API", err);
        setLoading(false);
      }
    };

    fetchAgents();
  }, [language]);

  if (loading) {
    return <div className='center'><h1>Carregando...</h1></div>;
  }

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleAgentClick = (agent) => {
    const agentName = agent.displayName.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-');
    navigate(`/agents/${agentName}`);
  };
  

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '-1',
  };

  return (
    <div className="container mt-4">
      {selectedCategory ? (
        <div style={{ margin: "0 0 0 3vw" }}>
          <button className="btn btn-secondary mb-3" onClick={() => setSelectedCategory(null)}>Voltar</button>
          <h2>{pluralizeCategory(selectedCategory)}</h2>
          {agentsByCategory[selectedCategory] && (
            <Slider {...sliderSettings}>
              {agentsByCategory[selectedCategory].map(agent => (
                <div key={agent.uuid} className="agent-slide" onClick={() => handleAgentClick(agent)}>
                  <h2 className='name-agent'>{agent.displayName}</h2>
                  <img src={agent.fullPortrait} alt={agent.displayName} className="agent-full-portrait" />
                </div>
              ))}
            </Slider>
          )}
        </div>
      ) : (
        <div className="category-card-wrapper">
          {Object.keys(agentsByCategory).map(category => (
            <CardCategory
              key={category}
              category={category}
              agents={agentsByCategory[category]}
              onClick={handleCategoryClick}
            />
          ))}
        </div>
      )}
    </div>
  );
}
