import React, {useState} from 'react';
import Styles from './styles'


const Docs: React.FC = () => {
 
  const [privateDocs, setPrivateDocs] = useState([
    {name: 'Documento1', 
    link: 'https://docs.google.com/document/d/1FYlvqzYqU8xQj-FQSFTdzIGH4hpxkZVzQhg6ewiwJQI/edit', 
    icon: 'icone'},
    {name: 'Documento2', 
    link: 'https://docs.google.com/document/d/1FYlvqzYqU8xQj-FQSFTdzIGH4hpxkZVzQhg6ewiwJQI/edit', 
    icon: 'icone'},
    {name: 'Documento3', 
    link: 'https://docs.google.com/document/d/1FYlvqzYqU8xQj-FQSFTdzIGH4hpxkZVzQhg6ewiwJQI/edit', 
    icon: 'icone'}
  ])
  const [publicDocs, setPublicDocs] = useState([
    {name: 'Documento1', 
    link: 'https://docs.google.com/document/d/1FYlvqzYqU8xQj-FQSFTdzIGH4hpxkZVzQhg6ewiwJQI/edit', 
    icon: 'icone'},
    {name: 'Documento2', 
    link: 'https://docs.google.com/document/d/1FYlvqzYqU8xQj-FQSFTdzIGH4hpxkZVzQhg6ewiwJQI/edit', 
    icon: 'icone'},
    {name: 'Documento3', 
    link: 'https://docs.google.com/document/d/1FYlvqzYqU8xQj-FQSFTdzIGH4hpxkZVzQhg6ewiwJQI/edit', 
    icon: 'icone'}
  ])
  
  return (
    <Styles>
      <div id="privateDocs">
      <h3>Documentos privados</h3>
      <ul>
        {privateDocs.map(doc=>(
          <div>
            <li>{doc.name}</li>
            <a target="_blank" href={doc.link}>{doc.icon}</a>
          </div>
        ))}
      </ul>
      </div>
      <div id="publicDocs">
      <h3>Documentos públicos</h3>
      <ul>
        {publicDocs.map(doc=>(
          <div>
            <li>{doc.name}</li>
            <a target="_blank" href={doc.link}>{doc.icon}</a>
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