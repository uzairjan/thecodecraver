import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Recents from "./home/Recents";
import Featured from "./Featured";
import Mostvisited from "./Mostvisited";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Recents />
        <Featured />
        <Mostvisited />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
