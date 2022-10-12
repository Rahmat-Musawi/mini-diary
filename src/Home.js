import DiaryList from "./components/DiaryList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: diaries,
    isPending,
    error,
  } = useFetch("http://localhost:8000/diaries");

  return (
    <div className="home">
      {error && <div>{error} </div>}
      {isPending && <div>Loading...</div>}
      {diaries && <DiaryList diaries={diaries} title="ALL CONTENTS" />}
    </div>
  );
};

export default Home;
