export default function Card({ article }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={article.urlToImage}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{article.title}</h3>
        <p className="text-sm text-gray-600">{article.description}</p>
        <a
          href={article.url}
          target="_blank"
          className="text-blue-500 text-sm mt-2 block"
        >
          Read more
        </a>
      </div>
    </div>
  );
}
