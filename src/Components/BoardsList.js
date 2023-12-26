import { Link } from "react-router-dom";
import { useBoards } from "../hooks/boards";

const BoardsList = () => {
  const { data, isLoading } = useBoards();

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div style={{ padding: "4rem 2rem" }}>
      <h1>Boards</h1>
      {!!data?.length ? (
        <ul style={{ listStyle: "none" }}>
          {data.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No boards yet.</p>
      )}
      <ul></ul>
    </div>
  );
};

export default BoardsList;
