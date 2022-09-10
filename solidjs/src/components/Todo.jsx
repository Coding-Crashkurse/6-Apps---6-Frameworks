const Todo = ({ todo }) => {
  return (
    <li style={{ listStyle: "none", textAlign: "left" }}>
      <a href="" style={{ textDecoration: "none" }}>
        {todo}
      </a>
    </li>
  );
};

export default Todo;
