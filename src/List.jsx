function List({ list, removeItem }) {
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => removeItem(index)}>삭제</button>
        </li>
      ))}
    </ul>
  );
}

export default List;
