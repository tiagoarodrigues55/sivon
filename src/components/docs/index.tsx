import React, {useState} from 'react';
import Styles from './styles'
import {AiFillFileText} from "react-icons/ai";


const Docs: React.FC = () => {
 
  const [privateDocs, setPrivateDocs] = useState([
    {name: 'Documento1', 
    link: 'https://docs.google.com/document/d/1FYlvqzYqU8xQj-FQSFTdzIGH4hpxkZVzQhg6ewiwJQI/edit'},
    {name: 'Documento2', 
    link: 'https://docs.google.com/document/d/1FYlvqzYqU8xQj-FQSFTdzIGH4hpxkZVzQhg6ewiwJQI/edit'},
    {name: 'Documento3', 
    link: 'https://docs.google.com/document/d/1FYlvqzYqU8xQj-FQSFTdzIGH4hpxkZVzQhg6ewiwJQI/edit'}
  ])
  const [publicDocs, setPublicDocs] = useState([
    {name: 'Documento1', 
    link: 'https://docs.google.com/document/d/1FYlvqzYqU8xQj-FQSFTdzIGH4hpxkZVzQhg6ewiwJQI/edit'},
    {name: 'Documento2', 
    link: 'https://docs.google.com/document/d/1FYlvqzYqU8xQj-FQSFTdzIGH4hpxkZVzQhg6ewiwJQI/edit'},
    {name: 'Documento3', 
    link: 'https://docs.google.com/document/d/1FYlvqzYqU8xQj-FQSFTdzIGH4hpxkZVzQhg6ewiwJQI/edit'}
  ])
  
  return (
    <Styles>
      <div id="privateDocs">
      <h3>Documentos privados</h3>
      <ul>
        {privateDocs.map(doc=>(
          <div className="doc">
            <li>{doc.name}
            <a target="_blank" href={doc.link}><AiFillFileText/></a>
            </li>
          </div>
        ))}
      </ul>
      </div>
      <div id="publicDocs">
      <h3>Documentos públicos</h3>
      <ul>
        {publicDocs.map(doc=>(
          <div className="doc">
            <li>{doc.name}
            <a target="_blank" href={doc.link}><AiFillFileText/></a>
            </li>
          </div>
        ))}
      </ul>
      </div>
   
      <a 
      target="_blank" 
      href="https://docs.google.com/document/d/1IYdNxLMLs4f1g2glrxRnS8hQPVVgDjjyB4tyUH4eB6Y/edit" 
      >
        Criar novo documento
        </a>
    </Styles>
  )
}

export default Docs;