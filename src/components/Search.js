import React from 'react';


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleInputChange(e) {
    this.props.getYouTubeVideos(e.target.value);
    this.setState({
      value: e.target.value
    });
  }

  render() {
    console.log('searchevent', this.props);
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          value={this.props.query}
          onChange={this.props.handleSearchInputChange.bind(this)}
        />
        <button className="btn hidden-sm-down" onClick={console.log('button clicked', event)}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

export default Search;
