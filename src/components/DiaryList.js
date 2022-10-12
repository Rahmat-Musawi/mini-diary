import { Link } from "react-router-dom";

const DiaryList = ({ diaries, title }) => {
  return (
    <div className="diary-list">
      <h1>{title}</h1>

      {diaries.map((diary) => (
        <div className="diary-preview" key={diary.id}>
          <Link to={`/diaries/${diary.id}`}>
            <h2>{diary.title}</h2>
            <p>
              Created on: {diary.day}, by {diary.author}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DiaryList;
