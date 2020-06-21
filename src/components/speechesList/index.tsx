import React, {useState} from 'react';
import Styles from './styles'
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
  const [buttonState, setButtonState] = useState('visible')
  const timeOfSpeech = 2
  

  function handleSpeechList(){
    setDelegations([...delegations, {position: 7, flag: 'icon', name: 'Japão'}])
    setButtonState('unvisible')
  }
  return(
    <Styles>

      <ul>
        {delegations.map(delegation=>(
          <div>
            <li key={delegation.position}>{delegation.name}</li>
            <span>{`faltam aproximadamente ${delegation.position * timeOfSpeech} minutos`}</span>
          </div>
        ))}
       
      </ul>
      <button id={buttonState} onClick={handleSpeechList}>Inscreva-se na lista</button>
    </Styles>
  );
}

export default SpeechesList;