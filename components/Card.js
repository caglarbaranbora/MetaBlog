export default function Card({ article, category }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden p-4 flex flex-col">
      <div>
        {article.urlToImage ? (
          <div>
            <img
              src={article.urlToImage}
              alt={article.title}
              className="rounded-lg shadow-lg mb-8 w-full h-[250px] object-fill"
            />
            <span className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded-full uppercase mt-2">
              {category}
            </span>
          </div>
        ) : (
          <div>
            <img
              src="../assets/News.png"
              alt={article.title}
              className="rounded-lg shadow-lg mb-8 w-full h-[250px] object-scale-down"
            />
            <span className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded-full uppercase mt-2">
              {category}
            </span>
          </div>
        )}
        <h2 className="text-xl font-semibold">{article.title}</h2>
        <p className="text-gray-700">{article.description}</p>
      </div>
      <div className="flex w-full justify-between items-center mt-4">
        {article.author ? (
          <div className="flex items-center my-4">
            <img src="../assets/user.png" className="rounded-full h-8 w-8 " />
            <h3 className="font-bold">{article.author}</h3>
          </div>
        ) : (
          <div className="flex items-center my-4">
            <img src="../assets/user.png" className="rounded-full h-8 w-8 " />
            <h3 className="font-bold">Unknown Author</h3>
          </div>
        )}
      </div>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-900 font-bold mt-auto"
      >
        Read More
      </a>
    </div>
  );
}
