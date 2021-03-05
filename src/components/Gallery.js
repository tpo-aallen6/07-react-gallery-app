import React from 'react'
import GalleryItem from './GalleryItem'
import NotFound from './NotFound'


const Gallery = (props) => {
  const results = props.data
  let pictures
  let header
console.log(props.urlData)
    console.log(props.urlData.match.params.query)  

  if (results.length > 0) {
    pictures = results.map(picture =>
      <GalleryItem
        title={picture.title}
        server={picture.server}
        secret={picture.secret}
        id={picture.id}
        key={picture.id}
      />
    )
    header = 'Results'
  } else {
    pictures = <NotFound />
    header = 'No Results Found'
  }

  return (
    <div className="photo-container">
      <h2>{header}</h2>
      <ul>
        {pictures}
      </ul>
    </div>
  )
}

export default Gallery
