import React from 'react';
import NewVote from './NewVote'
import LastVote from './LastVote'

const Votes: React.FC = () => {
  
  return (
    <div>
      <NewVote/>
      <LastVote/>
    </div>
  )
}

export default Votes;