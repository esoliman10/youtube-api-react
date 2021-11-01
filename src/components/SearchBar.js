import React from "react";

class SearchBar extends React.Component {
  state = { searchInput: '' }

  onInputChange = event => {
    this.setState({ searchInput: event.target.value });
  }

  onFormSubmit = event => {
    event.preventDefault(); //prevents the form from refreshing after 'Enter'

    // TODO: Make sure we call callback from parent component
    this.props.onFormSubmit(this.state.searchInput);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Team Bahay Video Search</label>
            <input 
              type="text" 
              value={this.state.searchInput} 
              onChange={this.onInputChange}
              // or remove the onInputChange (function) handler then code below
              // onChange={e => this.setState({ searchInput: e.target.value })}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;
