import { Link } from "react-router-dom";
// import posts from "../data/posts";
import { useEffect, useState } from "react";
import { fetchPosts } from "../api/posts";

function Posts() {
  // const posts = [
  //   { id: 1, title: "첫 번째 글", desc: "리액트로 만든 웹사이트입니다" },
  //   { id: 2, title: "두 번째 글", desc: "Tailwind를 적용했습니다" },
  //   { id: 3, title: "세 번째 글", desc: "포트폴리오용 프로젝트입니다" },
  // ];

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);

  // 페이지당 게시글 수
  const postsPerPage = 3;

  useEffect(() => {
    fetchPosts().then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className="text-center py-20">로딩중...</div>;
  }

  // 마지막 인덱스
  const indexOfLastPost = currentPage * postsPerPage;

  // 첫 인덱스
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // 현재 페이지 데이터
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // 총 페이지 수
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* 타이틀 */}
        <h2 className="text-3xl font-bold text-center">Latest Posts</h2>

        {/* 리스트 */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentPosts.map((post) => (
            <Link
              to={`/detail/${post.id}`}
              key={post.id}
              className="block border p-6 rounded-xl hover:shadow-lg hover:-translate-y-1 transition"
            >
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="mt-2 text-gray-500">{post.desc}</p>
            </Link>
          ))}
        </div>

        {/* 페이지 버튼 */}
        <div className="flex justify-center gap-2 mt-10">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 rounded-lg border
                ${
                  currentPage === index + 1 ? "bg-black text-white" : "bg-white"
                }
              `}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Posts;
