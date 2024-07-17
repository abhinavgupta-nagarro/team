import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleList from "./ArticleList.jsx";
import Article from "./Article.jsx";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ArticleList />}></Route>
        <Route path="/article/:id" element={<Article />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
