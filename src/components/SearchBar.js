import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui action input">
          <label className="field" htmlFor="field"></label>
          <input
            placeholder="Search..."
            id="field"
            className="field"
            type="text"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
          <button
            className="ui button"
            value={this.state.term}
            onClick={(e) => this.setState({ term: e.target.value })}
          >
            <i className="search icon"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
