import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/agent-details.scss';

export default function AgentDetails() {
  const { agentId } = useParams();
  const navigate = useNavigate();
  const [agent, setAgent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedAbility, setSelectedAbility] = useState(null);
  const language = 'pt-BR';

  useEffect(() => {
    const fetchAgentDetails = async () => {
      try {
        const response = await fetch(`https://valorant-api.com/v1/agents?language=${language}`);
        const data = await response.json();
        const playableAgents = data.data.filter(agent => agent.isPlayableCharacter);

        const selectedAgent = playableAgents.find(agent => 
          agent.displayName.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-') === agentId
        );

        setAgent(selectedAgent);
        setLoading(false);
      } catch (err) {
        console.error("Erro na requisição da API", err);
        setLoading(false);
      }
    };

    fetchAgentDetails();
  }, [agentId, language]);

  if (loading) {
    return <div className='center'><h1>Carregando...</h1></div>;
  }

  if (!agent) {
    return <div className='center'><h1>Agente não encontrado</h1></div>;
  }

  const handleAbilityClick = (ability, index) => {
    const agentKey = agent.displayName.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-');
    const videoUrl = abilityVideoUrls[agentKey] ? abilityVideoUrls[agentKey][ability.slot] : null;
    console.log('Selected Ability:', ability);
    console.log('Video URL:', videoUrl);
    setSelectedAbility({ ...ability, index, videoUrl });
  };

  const abilityVideoUrls = {
    "phoenix": {
      "Ability1": "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/c62125b1b5637b7b0e0881348502f7e8b8e93572.mp4",
      "Ability2": "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/b702ed368fd050e7cb77adf26bc55bb63c5936fb.mp4",
      "Grenade": "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/8c5b0e23be0814583ad4601b4297d04dbaff79f7.mp4",
      "Ultimate": "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/aa122a33b1ef0320174991b8ddee4e82dbc2b937.mp4"
    },
    "brimstone":{
      "Ability1":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/9df59d490062acceb7c6ca32a3650b55718381f7.mp4" ,
      "Ability2": "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/8e0b72295747346b60c354765944f5233fb208f2.mp4",
      "Grenade": "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/da2d65e4abc2129e284cf5248fd70925f093a0b3.mp4" ,
      "Ultimate": "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/ccd8e6c574b7017a2681e5d37c744f5a654327e3.mp4",
    },
    "sage": {
      "Ability1": "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/45053483528b96cbe003ac39e6b53c9866d5fea6.mp4",
      "Ability2":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/a247d196383136d3de15b4d6d9c816e3c8054ba0.mp4",
      "Grenade": "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/a79b1d6838cee5572b428babd74a2db0c07f4ea5.mp4",
      "Ultimate": "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/df83929ed5da349c37a5bf4600c2b55010c72402.mp4",
    },
    "sova": {
      "Ability1": "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/7776fa677e90c72da94ec7d188d2d4618116c41b.mp4",
      "Ability2":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/50f9d870fa2a9b9ba38408eb718ffc06879c11a8.mp4",
      "Grenade": "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/6c6f036376c18ddf4ed0c589b506b8889d86a29a.mp4",
      "Ultimate": "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/df9ce34c3d2a7f527929cac123501e1473e0da0e.mp4",
    },
    "viper": {
      "Ability1": "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/49ff8efd75b76941da3018362061275d3a1d43d6.mp4",
      "Ability2":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/36db8f44946850c2a20aba43d8ad3ecd977c7d7e.mp4",
      "Grenade": "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/9eeb3090efed080792e6ea2f264fd60ebb12694e.mp4",
      "Ultimate": "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/4601fd972c588a79cdd910b2497546f156886c40.mp4",
    },
    "cypher": {
      "Ability1": "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/54a8dfaa9b82c7aaf994b0432bb25ef1e95c985c.mp4",
      "Ability2":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/825ba0643c74ad583350d1eb562bb7650ad78ae0.mp4",
      "Grenade": "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/aab21b75eb43f0e8cc9c0b816cb4877ae868b9fd.mp4",
      "Ultimate": "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/ddeaad5ff2e4865351755b71fdc4fc97339fb334.mp4",
    },
    "reyna": {
      "Ability1": "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/327ccef09ef3c84a92320593c5db1bcb4b37e1e7.mp4",
      "Ability2":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/6a7db5a37dd8e6e6671699ff30ad297cf1f2eeda.mp4",
      "Grenade": "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/01030fba2df618b91c6185bb076f54e8c6c40415.mp4",
      "Ultimate": "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/d777e81e035db1430b1fbf664a432163deed5afb.mp4",
    },
    "killjoy": {
      "Ability1": "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/0582e7e1a0733667614492129abef67e17cfc92c.mp4",
      "Ability2":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/007e5042385d6f7315f4b4cb3fbd3b2c71b530c1.mp4",
      "Grenade": "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/b47a0b24d2499935d28f845a067984a52dbc2542.mp4",
      "Ultimate": "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/9485f7bbf04841f4c37e031f07dad03e9cbc1bf9.mp4",
    },
    "breach": {
      "Ability1": "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/ffa4695b83e2f959bc59f0393dfc74e533546a89.mp4",
      "Ability2":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/a4f24e1fe60879234be5da0f8a768feb8f379fdd.mp4",
      "Grenade": "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/592212ab60d09999d493c2099f9260d59fab917a.mp4",
      "Ultimate": "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/207b0ab21f8e27e98ca22f4b5546cc0963d94af6.mp4",
    },
    "omen": {
      "Ability1": "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/f401fc788f3182b6d5aa25af6056c842117b1b36.mp4",
      "Ability2":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/ba0b035a5ff2bb8d9487ba461b3d15900ff50f6b.mp4",
      "Grenade": "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/33550fee410c5a55ea8832f41827a12aaddb686f.mp4",
      "Ultimate": "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/252cf8ad86b6aca6210ba93ea856f52708476eba.mp4",
    },
    "jett": {
      "Ability1": "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/4cbc968f05713579aae9464c5a16dc3f6863f943.mp4",
      "Ability2":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/ec6b3cf1f8ac09d597b0193de1d7bb81335b40e4.mp4",
      "Grenade": "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/3353597819f0c032d56ff947d9762368b4ee6c6b.mp4",
      "Ultimate": "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/667770571300e065b332617e5c8f2e009ed88928.mp4",
    },
    "raze": {
      "Ability1": "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/82028c5e9ae38b59660dbf9f57f341f1c20c5480.mp4",
      "Ability2":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/d75fd65435a84906bb3e8ad0b97c505e7359697b.mp4",
      "Grenade": "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/c824fe8e08a4f36be2273aa456819d2c2b6cd6b0.mp4",
      "Ultimate": "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/7281a34566f12d202dee3d43e0fa0bf0b4271d60.mp4",
    },
    "skye":{
      "Ability1":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/3256cb83ad3563516497864209ea585c595cd8df.mp4",
      "Ability2":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/64edfd7af8a7125dd9c981c52fdc60f9560b821b.mp4",
      "Grenade":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/d64273e31bf2c4d16c52acc2f461e9accdb7c7f9.mp4",
      "Ultimate":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/82ab63d9255f9fbbea7c13e00cd46b09ff90d25b.mp4",
    },
    "yoru":{
      "Ability1":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/295ab26ef6097d28da0bef9c9b4c6185a80071c8.mp4",
      "Ability2":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/be352287c5704d82d1acbff5ecdee5187755d235.mp4",
      "Grenade":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/ef008c8e848a054f88e88f173c03279a45a1c796.mp4",
      "Ultimate":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/9ca7fac6ec9514fa06b9785aad2ead0c3fba0eec.mp4",
    },
    "astra":{
      "Ability1":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/e54ed10355d571c15ef2ee5a0897cca06851fd56.mp4",
      "Ability2":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/2aafadb8cef8c1ab2894a657c23988e921b006c8.mp4",
      "Grenade":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/3439c939846214067561746668bfd96805efc225.mp4",
      "Ultimate":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/6bed3444d432f27cdac08f3be1dad2760be7052f.mp4",
    },
    "kay-o":{
      "Ability1":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/9ad839fef2fd8d16d9608f8a6efd709091f0b74a.mp4",
      "Ability2":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/dbccb81297a30a9ddc92ec1883c832298f014504.mp4",
      "Grenade":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/292e5319f9cd0aa7eee01af47413f4009236f87e.mp4",
      "Ultimate":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/d9e35cc5d68e533df2d6e15a93471a5c073b0471.mp4",
    },
    "harbor":{
      "Ability1":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/7e56441c47781a35a5893cc7ceadcfa6c23b1ee2.mp4",
      "Ability2":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/6494d70cdea21aa4cb59b16d0f0b95c9432d709b.mp4",
      "Grenade":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/eb767e57ea6e86cfb0992c92522ba8d606db8223.mp4",
      "Ultimate":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/7a0d8e7b1457dd4df4f09da842e72273b0621f41.mp4",
    },
    "fade":{
      "Ability1":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/ed5b27f8f8acf6420d5f0e30938e963a204cfeca.mp4",
      "Ability2":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/2ee3d74b1105ab3cd996821fb07e4d6aa5c77c1a.mp4",
      "Grenade":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/d401c0074081fd609fa08710174f27fc216c5b92.mp4",
      "Ultimate":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/fd638db2f5041f8bc09f311af2c460cec579edcd.mp4",
    },
    "neon":{
      "Ability1":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/db28dddd3cf49297ca4c10c1898e4d3702af9d6f.mp4",
      "Ability2":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/a1c82c1a3aa3676bbff05dae9af8fdd8f2f25fb7.mp4",
      "Grenade":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/c1ba9d2ec4c567f6b27ddeab512ed245d5706e6b.mp4",
      "Ultimate":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/917de7be4f9bad96b54f47a4de6f91c323a57a6a.mp4",
    },
    "chamber":{
      "Ability1":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/745571f61d83d880c42278a35a072cdd8b7bfa12.mp4",
      "Ability2":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/6d191f3734a8170d99f66642041da9f33240d319.mp4",
      "Grenade":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/245fa173c5d3677e3838d52fb155b6366d19c91b.mp4",
      "Ultimate":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/49f14376a65d54586c350e7fe863ba30911032a0.mp4",
    },
    "clove":{
      "Ability1":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/71b28c3a8e3b6f29a2523f2cada52f2ea5a1eab0.mp4",
      "Ability2":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/f74f0d7b96cae0bcf51e97ad99883a370508a381.mp4",
      "Grenade":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/4adb022f083d3887f73d23f60de71cccb45e6d83.mp4",
      "Ultimate":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/b9e4ee59e2e2a492ec5a76f71c2161faa6f03981.mp4",
    },
    "iso":{
      "Ability1":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/17503f71b58f654d583a66e29dab75460677576f.mp4",
      "Ability2":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/11ad2731215ec978c89fdb675aaf3b591c3c3c55.mp4",
      "Grenade":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/5e331c774ffde4e8e0c45a8844b0237b7d75ba3b.mp4",
      "Ultimate":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/6fbd2b0e16ac3bda095094770ce6b1d403fc3832.mp4",
    },
    "deadlock":{
      "Ability1":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/e2c77e5b49fc3b53a7c625eb7646e51e7094dc52.mp4",
      "Ability2":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/a9dc93d62c1ae6c51b12ed1e84a5d96c678677f9.mp4",
      "Grenade":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/d7576f43161214699762f1858e2fc8e2d3112077.mp4",
      "Ultimate":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/b995bab386bd58541eacfe0e065a808081c0b9ea.mp4",
    },
    "gekko":{
      "Ability1":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/b995bab386bd58541eacfe0e065a808081c0b9ea.mp4",
      "Ability2":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/f3a565e0cde441f1754eeadda2427020a795d4a0.mp4",
      "Grenade":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/85f2c3958091bf4b8fb475c8bda0dcb10a409fbc.mp4",
      "Ultimate":"https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/85f2c3958091bf4b8fb475c8bda0dcb10a409fbc.mp4",
    },

  
  };
  document.title = agent.displayName;


  return (
    <div className="agent-details container mt-4">
      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>Voltar</button>

      <div className="row">
        <div className="col-md-6">
          <h1>{agent.displayName}</h1>
          <img src={agent.fullPortrait} alt={agent.displayName} className="agent-full-portrait" />
          <p>{agent.description}</p>
          <h2>Habilidades</h2>
          <div className="abilities-list">
            {agent.abilities.filter(ability => ["Ability1", "Ability2", "Grenade", "Ultimate"].includes(ability.slot)).map((ability, index) => (
              <div 
                key={ability.slot} 
                className={`ability ${selectedAbility && selectedAbility.slot === ability.slot ? 'active' : ''}`} 
                onClick={() => handleAbilityClick(ability, index)}
              >
                <img src={ability.displayIcon} alt={ability.displayName} className="ability-icon" />
                <h3>{ability.displayName}</h3>
                <p className='px-4' style={{color:"rgba(255, 255, 255, 0.7)"}}>{ability.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-6">
          {selectedAbility ? (
            <div className="ability-video">
              <h2>{selectedAbility.displayName} - Vídeo</h2>
              {selectedAbility.videoUrl ? (
                <video
                  key={selectedAbility.slot}
                  src={selectedAbility.videoUrl}
                  width="100%"
                  height="400px"
                  autoPlay
                  loop
                  playsInline
                  title={selectedAbility.displayName}
                ></video>
              ) : (
                <p>Vídeo não disponível</p>
              )}
            </div>
          ) : (
            <div className="select-ability-prompt">
              <h3>Selecione uma habilidade para ver o vídeo</h3>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
