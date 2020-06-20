import React, {useState} from 'react';
import Article from './Article'
import OrganizeNew from './OrganizeNew'


const News: React.FC = () => {
  //feed com notícias estáticas (iframe)
  //anúncios fixados da mesa
  const [articles, setArticles] = useState([
    {title: 'Eai', subTitle: 'Eai', introduction: 'Eai'},
    {title: 'Eai', subTitle: 'Eai', introduction: 'Eai'},
    {title: 'Eai', subTitle: 'Eai', introduction: 'Eai'},
    {title: 'Eai', subTitle: 'Eai', introduction: 'Eai'},
    {title: 'Eai', subTitle: 'Eai', introduction: 'Eai'},
  ])
  const [organizeNews, setOrganizeNews] = useState([
    {title: 'Coffee break', communicate: 'O coffee break será as 10:30'},
    {title: 'Falta de decoro', communicate: 'A mesa reitera que todos os delegados mantenham o dresscode completo'}
  ])
  return (
    <div>
      {articles.map(article=>(
        <Article 
        title={article.title} 
        subTitle={article.subTitle} 
        introduction={article.introduction} />
      ))}
      {organizeNews.map(organizeNew=>(
        <OrganizeNew title={organizeNew.title} communicate={organizeNew.communicate} />
      ))}
    </div>
  )
}

export default News;