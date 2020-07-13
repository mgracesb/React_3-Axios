import React from "react";
import unsplash from "../api/service";
import "../stylesheet.css";
import SearchBar from "./SearchBar";
import Display from "./Display";
import Logo from "../images/unsplash.png";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    const images = this.state.images;
    return (
      <>
        <header>
          <h1 className="h1">Image Search connected to</h1>
          <img className="logo" src={Logo} alt="unsplash logo" />
        </header>
        <div className="ui container " tyle={{ marginTop: "10px" }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <Display images={images} />
        </div>
      </>
    );
  }
}

export default App;
