export default function HeroCard({ article }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <h2>{article.title}</h2>
    </div>
  );
}
