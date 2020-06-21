import React, {useState} from 'react';
import Article from './Article'
import OrganizeNew from './OrganizeNew'
import Styles from './styles'


const News: React.FC = () => {
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
  return (
    <Styles>
      {articles.map(article=>(
        <Article 
        title={article.title} 
        introduction={article.introduction} />
      ))}
      {organizeNews.map(organizeNew=>(
        <OrganizeNew title={organizeNew.title} communicate={organizeNew.communicate} />
      ))}
    </Styles>
  )
}

export default News;