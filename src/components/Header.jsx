import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* 로고 */}
        <h1 className="text-xl font-bold">MyBrand</h1>

        {/* 메뉴 */}
        <nav className="flex gap-6 text-sm">
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link to="/detail" className="hover:text-blue-500">
            Detail
          </Link>
          <Link to="/login" className="hover:text-blue-500">
            Login
          </Link>
        </nav>

        {/* 버튼 */}
        <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
          Login
        </button>
      </div>
    </header>
  );
}

export default Header;
