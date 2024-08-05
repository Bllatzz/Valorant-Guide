import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/agent-details.scss';

export default function AgentDetails() {
  const { mapId } = useParams();
  const navigate = useNavigate();
  const [agent, setMap] = useState(null);
  const [loading, setLoading] = useState(true);
  const language = 'pt-BR';

  useEffect(() => {
    const fetchAgentDetails = async () => {
      try {
        const response = await fetch(`https://valorant-api.com/v1/maps?language=${language}`);
        const data = await response.json();
        const playableAgents = data.data.filter(agent => agent.isPlayableCharacter);

        const selectedAgent = playableAgents.find(agent => 
          agent.displayName.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-') === mapId
        );

        setMap(selectedAgent);
        setLoading(false);
      } catch (err) {
        console.error("Erro na requisição da API", err);
        setLoading(false);
      }
    };

    fetchAgentDetails();
  }, [mapId, language]);
}