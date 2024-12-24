import Switch from "../components/Switch";
import SearchBar from "../components/SearchBar";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md dark:bg-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold dark:text-white">MetaBlog</h1>
        <ul className="flex space-x-10">
          <li>
            <a href="/" className="text-gray-700 hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="/blog" className="text-gray-700 hover:text-blue-500">
              Blog
            </a>
          </li>
          <li>
            <a href="/singlePost" className="text-gray-700 hover:text-blue-500">
              Single Post
            </a>
          </li>
          <li>
            <a href="/Pages" className="text-gray-700 hover:text-blue-500">
              Pages
            </a>
          </li>
          <li>
            <a href="/contact" className="text-gray-700 hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <Switch />
          <SearchBar />
        </div>
      </div>
    </nav>
  );
}
