import React from 'react'
import ArticleContent from './article-content';
import ArticlesList from '../components/ArticlesList';

const ArticleListPage = () => (
    <React.Fragment>
    <h1>Article List</h1>
    <ArticlesList articles={ArticleContent} />

    </React.Fragment>
    
)


export default ArticleListPage;