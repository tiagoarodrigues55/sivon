import React, {useState} from 'react';

// import { Container } from './styles';

const SpeechesList: React.FC = () => {
  //lista com nomes estáticos + tempo estimado
  //botão para inscrição + tempo estimado
  const [delegations, setDelegations] = useState([
    {position:1 ,flag:'icon', name: 'Nova Zelândia'},
    {position:2 ,flag:'icon', name: 'Estados Unidos'},
    {position:3 ,flag:'icon', name: 'Nigéria'},
    {position:4 ,flag:'icon', name: 'Síria'},
    {position:5 ,flag:'icon', name: 'Geórgia'},
    {position:6 ,flag:'icon', name: 'Brasil'}
  ])
  
  const timeOfSpeech = 2

  function handleSpeechList(){
    //usar a lógica do theme switch para colocar um novo pais a lista
  }
  return(
    <div>
      <h2>{`Tempo dos discursos: ${timeOfSpeech} minutos`}</h2>
      <ul>
        {delegations.map(delegation=>(
          <div>
            <li key={delegation.position}>{delegation.name}</li>
            <span>{`faltam aproximadamente ${delegation.position * timeOfSpeech} minutos`}</span>
          </div>
        ))}
        <li className="gambiarra" key={7}>Japão</li>
        <span className="gambiarra">faltam aproximadamente 14 minutos</span>
      </ul>
      <button onClick={handleSpeechList} >Inscreva-se na lista</button>
    </div>
  );
}

export default SpeechesList;