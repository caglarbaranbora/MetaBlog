import HeroCard from "./HeroCard";
export default function Hero({ article }) {
  return (
    <section className="relative bg-gray-100">
      <div className="container mx-auto px-4 py-16 text-center items center">
        <img
          src={article.urlToImage}
          alt={article.title}
          className="rounded-lg shadow-lg mb-8"
        />
        <HeroCard article={article} />
      </div>
    </section>
  );
}
