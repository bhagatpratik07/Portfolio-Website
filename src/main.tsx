import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import NavBar from "./components/NavBar/NavBar.tsx";
import Footer from "./components/Footer/Footer.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <NavBar />
    <App />
    <Footer />
  </>
);
