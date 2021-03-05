/* global fetch */

import React, { useEffect, useState } from 'react'
import GalleryItem from './GalleryItem'

function Gallery (props) {
  const [images, setImageData] = useState([])
  const [header, setHeaderText] = useState('')

  useEffect(() => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${props.apiKey}&tags=${props.searchTerm}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(data => {
        if (data && data.photos && Array.isArray(data.photos.photo) && data.photos.photo.length > 0) {
          setImageData(data.photos.photo)
          setHeaderText(`Images matching "${props.searchTerm}":`)
        } else {
          setImageData([])
          setHeaderText(`Sorry, no images were found matching "${props.searchTerm}"...`)
        }
      })
      .catch(err => {
        setImageData([])
        setHeaderText('Error :^(')
        console.log('Error fetching data', err)
      })
  }, [props])

  return (
    <div className='photo-container'>
      <h2>{header}</h2>
      <ul>
        {
          images.map(item => (
            <GalleryItem
              title={item.title}
              server={item.server}
              secret={item.secret}
              id={item.id}
              key={item.id}
            />
          ))
        }
      </ul>
    </div>
  )
}

export default Gallery
