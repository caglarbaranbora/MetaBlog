import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function SearchResults({ articles }) {
  const router = useRouter();
  const { q } = router.query; // URL'deki arama sorgusunu al
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    if (q) {
      const filtered = articles.filter((article) =>
        article.title.toLowerCase().includes(q.toLowerCase())
      );
      setFilteredArticles(filtered);
    }
  }, [q, articles]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
          Search Results for "{q}"
        </h1>
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, index) => (
              <Card key={index} article={article} />
            ))}
          </div>
        ) : (
          <p className="text-gray-600 dark:text-gray-400">
            No articles found for your search.
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
}

// Tüm makaleleri sunucu tarafında getirin
export async function getServerSideProps() {
  const response = await fetch(
    "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=7b2457da3068491797454dfd80a159ed"
  );
  const data = await response.json();

  return {
    props: {
      articles: data.articles || [],
    },
  };
}
