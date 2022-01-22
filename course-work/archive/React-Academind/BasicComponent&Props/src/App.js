import "./styles.css";
import Card from "./components/Card";

export default function App() {
  const img = "https://picsum.photos/200";
  const title = "image's title";
  return (
    <div className="App">
      <h1>Hello React</h1>
      <Card img={img} title={title} />
    </div>
  );
}
