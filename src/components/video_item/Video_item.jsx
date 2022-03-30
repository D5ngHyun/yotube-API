import React from 'react'

function Video_item(props) {
  return (
    <div>{props.video.snippet.title}</div>
  )
}

export default Video_item