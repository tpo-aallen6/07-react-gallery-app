import React from 'react'

function GalleryItem (props) {
  return (
    <li>
      <img key={props.id} alt={props.title} src={`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} />
    </li>
  )
}

export default GalleryItem
