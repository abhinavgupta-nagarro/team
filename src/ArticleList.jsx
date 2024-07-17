import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ArticleList = () => {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=adnCqstbR76nXGZf8oAPjwAffOPGiFGn",
    )
      .then((res) => res.json())
      .then((data) => {
        setArticleList(data?.results ?? []);
        localStorage.setItem("__data__", JSON.stringify(data?.results));
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(articleList);

  return (
    <div>
      <h1 className="header">New York Times</h1>
      <div className="grid">
        {articleList?.map((article) => {
          return (
            <Link
              key={article?.id}
              className="link"
              to={`/article/${article.id}`}
            >
              <div className="title">{article.title}</div>
              <div className="date">{article.published_date}</div>
              <div className="img_container">
                <img
                  width="100%"
                  src={article?.media?.[0]?.["media-metadata"]?.[2]?.url}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ArticleList;
