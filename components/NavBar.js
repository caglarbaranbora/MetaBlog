import Switch from "../components/Switch";
import SearchBar from "../components/SearchBar";

export default function Navbar({ onSearch }) {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">MetaBlog</h1>
        <ul className="flex space-x-4">
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
          <li>
            <SearchBar onSearch={onSearch} />
          </li>
        </ul>
        <Switch />
      </div>
    </nav>
  );
}
