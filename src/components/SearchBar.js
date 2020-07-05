import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <label>Image Search</label>
          <input
            className="field"
            type="text"
            onChange={(e) => console.log(e.target.value)}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
