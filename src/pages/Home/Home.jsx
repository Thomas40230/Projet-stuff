import "./Home.css";
import Card from "../../components/Card/Card";

function Home() {
  
  return (
  <main className="home_main">
    <h1 className="main_title">Select a map to improve yourself !</h1>
      <h2 className="pool_title">Active map pool</h2>
        <Card actif/>
      <h2 className="pool_title">Reserve map pool</h2>
        <Card />
  </main>
  )
}

export default Home;