import styled from 'styled-components'


export default styled.div`
grid-area: CH;
display: flex;
align-items: center;
  ul{
    display: flex;
    float: right;
    flex-direction: column;
  }
  li{
    list-style: none;
  }
div#chat{
  height: 100%;
  width: 70%;

  h2{
    text-align: center;
  width:100%;
  margin:0;
border:solid 1px black;
  }
}
section{
  border: solid 1px black;
  height: 100%;
  border-radius: 2px;
  width: 100%;
}
form{
  margin:0;
  height: 100%;
}

div#messages{
  height: 70%;
}
input{
  align-self:baseline;
  width:96%;
  padding:5px;
  border-radius:2px;
  border: solid 1px black;
  margin-bottom: 5px;
}
`