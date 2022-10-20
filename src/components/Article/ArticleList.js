import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { getArticles } from "./ArticleList.handler";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        let res = await getArticles();
        setArticles(res.data);
        if (res.status === 200) {
          toast.success("Articles succesfully loaded");
        }
      } catch (error) {
        toast.error(error.message);
      }
    };
    getData();
  }, [articles.length]);

  return (
    <div>
      {articles &&
        articles.map((article, id) => (
          <div key={id}>
            <h2>{article}</h2>
          </div>
        ))}
    </div>
  );
};

export default ArticleList;
