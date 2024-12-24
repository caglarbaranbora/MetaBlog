import HeroCard from "./HeroCard";
export default function Hero({ article, category }) {
  return (
    <section className="relative">
      <div className="container mx-auto px-4 py-4 text-center items-center relative">
        {article.urlToImage ? (
          <img
            src={article.urlToImage}
            alt={article.title}
            className="rounded-lg shadow-lg mb-8 w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
          />
        ) : (
          <img
            src="../public/News.png"
            alt={article.title}
            className="rounded-lg shadow-lg mb-8 w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover"
          />
        )}
        <HeroCard article={article} category={category} />
      </div>
    </section>
  );
}
