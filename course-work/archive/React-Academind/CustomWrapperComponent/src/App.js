import "./styles.css";
import Box from "./components/Box";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Box>
        {/* Box can be used as Wrapper */}
        <p>I can write anything in here</p>
        <Footer />
      </Box>
    </div>
  );
}
