import React from 'react';
import articleContent from './article-content'
import ArticlesList from '../components/ArticlesList';
import NotFound from './NotFound';

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(article =>  article.name === name);

    if(!article ) return <NotFound />

    const otherArticles = articleContent.filter(article => article.name !== name)

    return (
    <React.Fragment>
    <h1>{article.title}</h1>
    {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
    ))}
        <h3>Other Articles</h3>
        <ArticlesList articles={otherArticles} />
    </React.Fragment>
    
)
    }


export default ArticlePage;