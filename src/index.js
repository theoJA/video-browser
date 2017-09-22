import _ from 'lodash'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyCC9xBGeyHewUlJ1I02CqM5rabdIuMhCsc'

// Create a new component. This component should produce some HTML
class App extends Component {

  constructor(props) {
    
    super(props) // App extends Component so it has to pass in props into 
                //   the parent's (Component) constructor
                // Otherwise it can't use 'this'
    
    this.state = { 
      videos: [],
      selectedVideo: null 
    }

    this.videoSearch('surfboards')
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, videos => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      }) //{videos} is equivalent to: this.setState({ videos: videos})
    })
  }

  render() {

    // this is a good way to throttle user input 
    // in other words, it eliminates laggy search results by slowing down the frequency at which a search occurs
    const videoSearch = _.debounce( (term) => { this.videoSearch(term) }, 300)
    // debounce takes the inner function and returns a new function that can only be called
    //   once every 300 miliseconds (as given in the inner function)

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
        //  The lines in VideoList represents the property that we're 
        //    passing on to VideoList. So now VideoList will have 
        //    the properties, 'onVideoSelect' and 'videos'
          onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
          videos={this.state.videos} />
      </div>
    )
  }
}


// Take this component's generated HTML and put it on the page (in the DOM)
// NOTE --> self closing tag in JSX <App />

// Initially we were passing in a class into: ReactDOM.render(App)
// We have to pass in an instance of that class instead
// We create an instance of a class by wrapping it in JSX tags

// However we must also specify the target container which can be
//  specified in the 2nd param of .render
ReactDOM.render(<App />, document.querySelector('.container'))