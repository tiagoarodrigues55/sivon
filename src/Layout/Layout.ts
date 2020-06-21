import styled from 'styled-components'



// VD - Video
// SL - SpeechesList
// NS - News
// At - Actions
// CH - Chat
// VT - Votes
// DC - Docs

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 520px auto 540px ;
  grid-template-rows: 240px 110px 170px auto;
  grid-template-areas:
   
  
  'VD SL NS '
  'VD SL CH '
  'AT SL CH '
  'VT DC DC '
  
  ;
  height: 100vh;
`;