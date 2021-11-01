import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSearchInputSubmit('diablo 2 best builds');
  }

  onSearchInputSubmit = async searchInput => {
    // console.log(searchInput)
    const response = await youtube.get('/search', {
      params: {
        q: searchInput
      }
    });

    // console.log(response)
    this.setState({ 
      videos: response.data.items, 
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    // console.log('From the App.js', video);
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchInputSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
