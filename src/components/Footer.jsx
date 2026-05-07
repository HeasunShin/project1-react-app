function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center">
        {/* 로고 / 이름 */}
        <h2 className="text-lg font-semibold">MyBrand</h2>

        {/* 메뉴 */}
        <div className="mt-4 flex justify-center gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-black">
            About
          </a>
          <a href="#" className="hover:text-black">
            Contact
          </a>
          <a href="#" className="hover:text-black">
            Privacy
          </a>
        </div>

        {/* 카피라이트 */}
        <p className="mt-6 text-sm text-gray-400">
          © 2026 MyBrand. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
