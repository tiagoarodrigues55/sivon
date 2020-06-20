import React from 'react';

// import { Container } from './styles';
interface Props{
  title: string,
  subTitle: string,
  introduction: string,
}

const Article: React.FC<Props> = ({title, subTitle, introduction}) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <h3>{introduction}</h3>
    </div>
  );
}

export default Article;