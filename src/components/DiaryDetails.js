import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../useFetch";

const DiaryDetails = () => {
  const { id } = useParams();
  const {
    data: diary,
    error,
    isPending,
  } = useFetch("http://localhost:8000/diaries/" + id);
  const navigate = useNavigate();

  const handleDiaryDelete = () => {
    fetch("http://localhost:8000/diaries/" + diary.id, {
      method: "DELETE",
    }).then(() => {
      navigate(-1);
    });
  };

  return (
    <div className="diary-details">
      {isPending && <div>Loading... </div>}
      {error && <div>{error}</div>}
      {diary && (
        <article>
          <h2>{diary.title}</h2>
          <p>Written by {diary.author}</p>
          <div>{diary.body}</div>
          <button onClick={handleDiaryDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default DiaryDetails;
