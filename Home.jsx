import { useNavigate } from "react-router-dom";

function Home() {
  
  const navigate = useNavigate();

  function move() {
    navigate("/about");
  }

  return (
    <>
    <input type="text" />
      <h1>Home</h1>
      <button onClick={move}>Go to About</button>
    </>
  );
}

export default Home;