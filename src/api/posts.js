export function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "첫 번째 글", desc: "리액트로 만든 웹사이트입니다" },
        { id: 2, title: "두 번째 글", desc: "Tailwind를 적용했습니다" },
        { id: 3, title: "세 번째 글", desc: "포트폴리오용 프로젝트입니다" },
        { id: 4, title: "네 번째 글", desc: "페이지네이션 테스트입니다" },
        { id: 5, title: "다섯 번째 글", desc: "React Router 사용중입니다" },
        { id: 6, title: "여섯 번째 글", desc: "실무 구조 연습중입니다" },
      ]);
    }, 1000);
  });
}
