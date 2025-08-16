import { createRoot } from "react-dom/client";
import Body from "./components/Body.js";
import Header from "./components/Header.js";

/**
 * Food ordering app
 * App layout component
 * Header component - logo, nav items(home, about us, cart)
 * Body component - search, restaurant cards component - res name, img, rating, cuisine
 * Footer component - contact us
 */


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<AppLayout />);
