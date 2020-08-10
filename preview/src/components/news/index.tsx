import React, {useState} from 'react';
import Article from './Article'
import OrganizeNew from './OrganizeNew'
import Styles from './styles'

interface Props{
  moderator?: boolean
}
const News: React.FC<Props> = ({moderator}) => {
  //feed com notícias estáticas (iframe)
  //anúncios fixados da mesa
  const [articles, setArticles] = useState([
    {title: 'Macacos invadem a sede da ONU', introduction: 'Na última seção do comitê, macacos invadiram a sede, deixando vários feridos. Até o momento não temos óbitos'},
    {title: 'Macacos invadem a sede da ONU', introduction: 'Na última seção do comitê, macacos invadiram a sede, deixando vários feridos. Até o momento não temos óbitos'},
   
    
  ])
  const [organizeNews, setOrganizeNews] = useState([
    {title: 'Coffee break', communicate: 'O coffee break será as 10:30'},
    {title: 'Falta de decoro', communicate: 'A mesa reitera que todos os delegados mantenham o dresscode completo'}
  ])
  if(moderator){
    return (
      <Styles className="components">
        {articles.map(article=>(
          <div className="article">
          <Article 
          title={article.title} 
          introduction={article.introduction} />
  
          <div className="separator"></div>
          </div>
         
        ))}
        {organizeNews.map(organizeNew=>(
          <div id="mesa" className="article">
          <OrganizeNew title={organizeNew.title} communicate={organizeNew.communicate} />
          <div className="separator"></div>
          </div>
  
  
        ))}
      </Styles>
    )
  }
  return (
    <Styles className="components">
      {articles.map(article=>(
        <div className="article">
        <Article 
        title={article.title} 
        introduction={article.introduction} />

        <div className="separator"></div>
        </div>
       
      ))}
      {organizeNews.map(organizeNew=>(
        <div id="mesa" className="article">
        <OrganizeNew title={organizeNew.title} communicate={organizeNew.communicate} />
        <div className="separator"></div>
        </div>


      ))}
    </Styles>
  )
}

export default News;