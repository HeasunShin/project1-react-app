import { useParams, useNavigate } from "react-router-dom";
// import posts from "../data/posts";
import { useEffect, useState } from "react";
import { fetchPosts } from "../api/posts";

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);

  // id는 문자열 → 숫자로 변환 필요
  // const post = posts.find((item) => item.id === Number(id));

  // if (!post) {
  //   return <div className="p-10">게시글 없음</div>;
  // }

  useEffect(() => {
    fetchPosts().then((data) => {
      const found = data.find((item) => item.id === Number(id));
      setPost(found);
    });
  }, [id]);

  if (!post) {
    return <div className="p-10">로딩중...</div>;
  }

  return (
    <div className="p-10">
      {/* 뒤로가기 버튼 */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 border rounded-lg hover:bg-gray-100"
      >
        ← 뒤로가기
      </button>

      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="mt-4 text-gray-500">{post.desc}</p>
    </div>
  );
}

export default Detail;
