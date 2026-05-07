function Feature() {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* 타이틀 */}
        <h2 className="text-3xl font-bold text-center">Our Features</h2>

        {/* 카드 영역 */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 카드 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold">Fast</h3>
            <p className="mt-2 text-gray-500">빠르고 효율적인 웹 환경 제공</p>
          </div>

          {/* 카드 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold">Responsive</h3>
            <p className="mt-2 text-gray-500">모든 디바이스에서 최적화</p>
          </div>

          {/* 카드 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold">Modern</h3>
            <p className="mt-2 text-gray-500">최신 기술 기반 UI/UX</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
