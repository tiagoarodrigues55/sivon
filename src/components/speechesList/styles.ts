import styled from 'styled-components'

//Colocar limite de espaço junto a uma barra de rolagem
export default styled.div`
grid-area: SL;
display: flex;
flex-direction: column;
border: solid 1px gray;
margin:0;


align-items: center;
li{
  list-style: none;
  margin-top: 7px;
}
#unvisible{
  display:none;
}
button{
  width:50%;
  height:10%; 
  align-self: flex-start;
  background-color: green;
}

`