import React, { ReactElement, useContext, useEffect, useState } from "react";
import './wordpress-newsfeed.scss';
import sanitize from 'sanitize-html';
import BasicButton from "../buttons/basic-button/basic-button";

export interface IWordpressNewsfeedConfiguration {
  url: string;
}

interface IWordpressNews {
  link: string;
  excerpt: string;
  title: string;
  date: string;
  imageUrl: string;
}

export default function WordpressNewsfeed({ data }: { data: IWordpressNewsfeedConfiguration }): ReactElement {

  const [articles, setArticles] = useState(null as IWordpressNews[] | null);
  useEffect(() => {
    fetch(data.url, {
      referrerPolicy: "unsafe-url"
    })
      .then(response => response.json())
      .then(resultData => {
        setArticles((resultData || []).map((i: any) => mapToWordpressNews(i)))
      }).catch();
  }, []);

  return (
    <div className="row articles-wrapper">
      {articles !== null ?
        articles?.map((article, i) => 
          <div key={i} className="col-md-6 article-item">
            <img src={article.imageUrl}/>
            <div className="date">{article.date}</div>
            <h2>{article.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: sanitize(article.excerpt) }} ></p>
            <BasicButton data={{ link: article.link, label: "Read more" }}></BasicButton>
          </div>
        ) :
        [
          getDummyArticleItem(0),
          getDummyArticleItem(1)
        ]
      }
    </div>
  )
}


function getDummyArticleItem(i: number) {
  return (
    <div key={i} className="col-md-6 article-dummy-item ">
      <div className="image-dummy animated-background"></div>
      <div className="date-dummy animated-background"></div>
      <div className="title-dummy animated-background"></div>
      <div className="description-dummy animated-background"></div>
    </div>
  )
}




function mapToWordpressNews(obj: any): IWordpressNews {
  return {
    date: obj.date,
    excerpt: obj.excerpt?.rendered,
    link: obj.link,
    title: obj.title?.rendered,
    imageUrl: obj._embedded['wp:featuredmedia'][0]['media_details'].sizes['medium_large']['source_url']
  }
}
