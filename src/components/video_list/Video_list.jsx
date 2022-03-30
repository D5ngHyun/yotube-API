import React from 'react'
import Video_item from '../video_item/Video_item'

function Video_list(props) {
  return (
    <ul>
        {
        props.videos.map(video => <Video_item video={video} key={video.id} />)
        }
    </ul>
  )
}

export default Video_list