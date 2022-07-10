import React from "react";
import "./App.css";
import Homepage from "./landingpage/Homepage";
import Nav from "./landingpage/Nav";
import Authbuttons from "./landingpage/AuthButtons";
import Header from "./landingpage/Header";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="grid md:grid-cols-5">
          <Nav />
          <main className="px-12 py-6 md:col-span-4 bg-cyan-50">
            <Authbuttons />
            <Header />
            <Homepage />
          </main>
        </div>
      </>
    );
  }
}

export default App;
