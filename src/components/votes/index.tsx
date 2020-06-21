import React, {useState} from 'react';
import NewVote from './NewVote'
import LastVote from './LastVote'
import Styles from './styles'


const Votes: React.FC = () => {

  const [voteState, setVoteState] = useState({name:'Last vote', LastState: 'able', NewState: 'disable'})
  function handleVoteState(){
    if(voteState.name === 'Last vote'){
      setVoteState({name: 'New vote', LastState: 'disable', NewState: 'able'})
    }else{
      setVoteState({name: 'Last vote', LastState: 'able', NewState: 'disable'})
    }
  }
  return (
    <Styles>
      <div id="button">
  <button onClick={handleVoteState} >{voteState.name}</button>
      </div>
      <NewVote status={voteState.NewState} />
      <LastVote status={voteState.LastState}/>
    </Styles>
  )
}

export default Votes;