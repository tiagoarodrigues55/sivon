import React, {useState} from 'react';

// import { Container } from './styles';

const LastVote: React.FC = () => {
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
    <div>
      <h1>{lastVote.name}</h1>
      <h2>Votos a favor</h2>
      <ul>
        {lastVote.favorableVotes.map(vote=>(
          <li key={vote}>{vote}</li>
        ))}
      </ul>
      <h2>Votos contra</h2>

      <ul>
        {lastVote.againstVotes.map(vote=>(
          <li key={vote}>{vote}</li>
        ))}
      </ul>
        <h3>{`Essa ${lastVote.type} ${lastVote.decision} por ${lastVote.favorableVotes.length} votos a ${lastVote.againstVotes.length}`}</h3>
    </div>
  )
}

export default LastVote;