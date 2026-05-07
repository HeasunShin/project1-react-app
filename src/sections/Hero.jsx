function Hero() {
  return (
    <section className="w-full py-32 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-6xl font-extrabold leading-tight tracking-tight">
          Modern Web Portfolio
        </h1>

        <p className="mt-6 text-gray-500 text-lg max-w-xl mx-auto">
          React와 Tailwind로 구축한 실무형 웹사이트입니다. 사용자 경험과 구조를
          모두 고려했습니다.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-black text-white px-8 py-3 rounded-full hover:scale-105 transition">
            시작하기
          </button>

          <button className="border px-8 py-3 rounded-full hover:bg-gray-100 transition">
            프로젝트 보기
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
