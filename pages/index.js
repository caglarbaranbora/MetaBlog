import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Ad from "../components/Ad";
import Footer from "../components/Footer";
import fetchNews from "../utils/fetchNews";
import Categories from "../components/Categories";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("general");
  const [visibleCount, setVisibleCount] = useState(9);

  useEffect(() => {
    const fetchArticles = async () => {
      const fetchedArticles = await fetchNews(category);
      setArticles(fetchedArticles);
      setVisibleCount(9);
    };

    fetchArticles();
  }, [category]);

  const [heroArticle, ...otherArticles] = articles;

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 9);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors">
      <NavBar />

      <div className="container mx-auto px-4 py-8">
        <Categories onCategoryChange={handleCategoryChange} />

        {heroArticle && <Hero article={heroArticle} category={category} />}
      </div>

      <Ad />

      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherArticles.slice(0, visibleCount).map((article, index) => (
            <Card key={index} article={article} category={category} />
          ))}
        </div>
      </section>
      <div className="flex justify-center mb-5">
        {visibleCount < otherArticles.length && (
          <button
            onClick={handleShowMore}
            className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-900 transition justify-center"
          >
            Daha Fazla Göster
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
}
