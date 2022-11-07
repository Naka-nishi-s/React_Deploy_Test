const AddForm = ({ onClick, text, setText }: any) => {
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={onClick}>追加</button>
    </div>
  );
};

export default AddForm;
