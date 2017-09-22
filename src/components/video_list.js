import React from 'react'
import VideoListItem from './video_list_item'

// In a functional component, the "props" object is an argument
// In a class based component, the "props" object is available anywhere
//  in any method we define and can be called using "this.props"  
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem 
        onVideoSelect={props.onVideoSelect}
        key={video.etag} 
        video={video} />
    )
  })

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
}  

export default VideoList