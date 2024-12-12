import { useState } from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Ad from "../components/Ad";
import Footer from "../components/Footer";
import fetchNews from "../utils/fetchNews";

export default function Home({ articles }) {
  const [filteredArticles, setFilteredArticles] = useState(articles);

  const handleSearch = (query) => {
    if (query.trim() === "") {
      setFilteredArticles(articles);
    } else {
      const filtered = articles.filter((article) =>
        article.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredArticles(filtered);
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors">
      <NavBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredArticles.map((article, index) => (
          <Hero key={index} article={article} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 container mx-auto px-4 py-8">
        {articles.map((article, index) => (
          <Hero key={index} article={article} />
        ))}
      </div>
      <Ad />
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Latest Post</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Card key={index} article={article} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
export async function getServerSideProps() {
  const articles = await fetchNews();
  return {
    props: {
      articles,
    },
  };
}
