import React from 'react';


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleInputChange(e) {
    console.log('target value', e.target.value);
    this.setState({
      value: e.target.value
    });
    this.props.handleSearchInputChange(e.target.value);
  }

  render() {
    console.log('props', this.props.handleSearchInputChange);
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          value={this.props.query}
          onClick={this.handleInputChange.bind(this)} //update props.data to be the new search result based on q
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

export default Search;
