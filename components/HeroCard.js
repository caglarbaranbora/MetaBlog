export default function HeroCard({ article, category }) {
  return (
    <div className="absolute bottom-8 left-8 bg-white bg-opacity-80 p-4 mx-10 rounded-lg shadow-md text-left h-[250px] w-[500px] ">
      <span className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded-full uppercase mt-2">
        {category}
      </span>
      <h2 className="text-2xl font-bold mt-2">{article.title}</h2>
      <div className="flex items-center mt-4">
        <img src="../assets/user.png" className="rounded-full h-8 w-8" />
        <h3 className="mt-2 text-sm text-gray-700">
          {article.author} &bull;
          {new Date(article.publishedAt).toLocaleDateString()}
        </h3>
      </div>
    </div>
  );
}
