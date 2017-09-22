import React, { Component } from 'react'
// import React and pull off the property: 'Component'

// React, { Component } is the same as doing:
//  const Component = React.Component
// This is just syntactic sugar

class SearchBar extends Component {
  // A STATE - a plain JS object that is used to record and react to user events
  //         - each class based component has its own state object (functional components do not have states)
  //         - whenever a component state changes the component rerenders along with its children
  
  constructor(props) {
    super(props)
    this.state = { term: '' }
  }

  // this is the syntax we use to define methods in a JSX class
  // we always define a render method inside a class component
  //     and return some JSX
  render() {
    //this.state.term = event.target.value // BAD!! NOT CORRECT!!
    return (
      <div className="search-bar">
        <input   
          value = {this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    )
  }

  onInputChange(term) {
    this.setState({term})
    this.props.onSearchTermChange(term)
  } 
}

export default SearchBar
