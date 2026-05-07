function Input({ text, setText, addItem }) {
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addItem}>추가</button>
    </div>
  );
}

export default Input;
