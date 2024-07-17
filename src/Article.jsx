import { useParams } from "react-router-dom";
import React from "react";

const Article = () => {
  const { id } = useParams();
  const article = JSON.parse(localStorage.getItem("__data__") ?? "[]")?.find(
    (article) => article.id == id,
  );

  console.log(article);

  return (
    <div className="article_container">
      <div className="article_title">{article?.title}</div>
      <div className="byline_container">
        <div className="byline">{article?.byline}</div>
      </div>
      <div className="article_abstract">{article?.abstract}</div>
      <img
        width="100%"
        src={article?.media?.[0]?.["media-metadata"]?.[2]?.url}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};

export default Article;
