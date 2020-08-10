import React, {useState} from 'react';

// import { Container } from './styles';
interface Props{
  status: string
}
const LastVote: React.FC<Props> = ({status}) => {
  // nome 
  // documento em questão 
  // votantes
  // decisão
  const [lastVote, setLastVote] = useState({
    name: 'Moção para a reabertura da lista de discursos',
    favorableVotes: ['Brazil', 'Japão', 'Nigéria', 'Marrocos'],
    againstVotes: ['Estados Unidos', 'Israel'],
    decision: 'passa',
    type: 'moção'
  })
  return (
    <div className="LastVote" id={status}>
      <h1>{lastVote.name}</h1>
      <div id="votes">
      <div id="favorVotes">
      <h2>Votos a favor</h2>
      <ul>
        {lastVote.favorableVotes.map(vote=>(
          <li key={vote}>{vote}</li>
        ))}
      </ul>
      </div>
      <div id="againstVotes">
      <h2>Votos contra</h2>
        <ul>
          {lastVote.againstVotes.map(vote=>(
            <li key={vote}>{vote}</li>
          ))}
        </ul>
      </div>
      </div>
      <div>
      <h3>{`Essa ${lastVote.type} ${lastVote.decision} por ${lastVote.favorableVotes.length} votos a ${lastVote.againstVotes.length}`}</h3>

      </div>

    </div>
  )
}

export default LastVote;