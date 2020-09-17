import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Text from "./components/selection/Text";
import FontSize from "./components/selection/FontSize";
import RecentFonts from "./components/fonts/RecentFonts";
import PopularFonts from "./components/fonts/PopularFonts";
import TrendingFonts from "./components/fonts/TrendingFonts";
import ContextProvider from "./context/Context";

function App() {
  return (
    <>
      <Header />
      <ContextProvider>
        <main className="container min-vh-100">
          <div className="row my-5">
            <div className="col-lg-3">
              <div style={{ position: "sticky", top: "0px" }}>
                <Text />
                <FontSize />
              </div>
            </div>
            <div className="col-lg-9">
              <RecentFonts />
              <TrendingFonts />
              <PopularFonts />
            </div>
          </div>
        </main>
      </ContextProvider>
      <Footer />
    </>
  );
}

export default App;
