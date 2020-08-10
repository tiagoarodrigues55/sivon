import React, {useState, FormEvent, ChangeEvent} from 'react';
import Styles from './styles'
// import { Container } from './styles';
interface Props{
  moderator?: boolean
}
const Actions: React.FC<Props> = ({moderator}) => {
  // Dois selects, um com as questões e outro com as moções
  // caixa de texto
  // botão de envio
  const [selectedAction, setSelectedAction] = useState({type:'ação', action: ''})
  const [formData, setFormData] = useState({
    text: ''
  })
  const moções = [
    {value:'tempo>', text:'aumento do tempo de discurso'},
    {value:'tempo<', text:'diminuição do tempo de discurso'},
    {value:'>lista', text:'abertura da lista de discursos'},
    {value:'<lista', text:'fechamento da lista de discursos'},
    {value:'>seção', text:'abrir seção'},
    {value:'<seção', text:'fechar seção'}
  ]
  const questões = [
    {value: 'ordem', text:'ordem'}, 
    {value:'pp', text:'privilégio pessoal'}, 
    {value:'dúvida', text:'dúvida'}
  ]
  const placeholder = `descreva sua ${selectedAction.type} para analisarmos a relevância`

  function handleSubmit(event: FormEvent){

    // const {text} = formData
    // const action = selectedAction.action
    alert(`${selectedAction.type} enviada com sucesso!`)
  }
  function handleInputChange(event: ChangeEvent<HTMLInputElement>){
    const {value} = event.target
    setFormData({text: value})
  }
  function handleSelectAction(event: ChangeEvent<HTMLSelectElement>){
    const action = event.target.value
    const type = event.target.className
    setSelectedAction({type, action})
  }
  if (moderator){
    return (
      <Styles className="components">
        <div>
          <ul>
            <li>Moção para adiamento da sessão - Brasil</li>
            <li>Questão de privilégio pessoal - Japão</li>
            <li>Questão de dúvida - Nigéria</li>
            <li>Moção para abertura da lista - Estônia</li>
          </ul>
        </div>
      </Styles>
      )
  }
  return (
  <Styles className="components">
  <form onSubmit={handleSubmit}>
    <select className="moção" value={selectedAction.type==='moção'?selectedAction.action:''} onChange={handleSelectAction} id="moção">
    <option  value=''>Escolha um tipo de moção</option>

    {moções.map(moc=>(
      <option value={moc.value}>{moc.text}</option>
    ))}
    </select>
    <select className="questão" value={selectedAction.type==='questão'?selectedAction.action:''} onChange={handleSelectAction} id="questão">
    <option value=''>Escolha um tipo de questão</option>

    {questões.map(quest=>(
      <option value={quest.value}>{quest.text}</option>
    ))}
    </select>
    <input type="text" onChange={handleInputChange} placeholder={placeholder}/>
  </form>
  </Styles>
  )
}

export default Actions;