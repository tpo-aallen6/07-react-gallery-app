/* global fetch */

import React, { useEffect, useState } from 'react'
import GalleryItem from './GalleryItem'

const Gallery = (props) => {
  const [images, setData] = useState([])

  useEffect(() => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${props.apiKey}&tags=${props.searchTerm}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        setData(responseData.photos.photo)
      })
      .catch(err => console.log('Error fetching data', err))
  }, [props])

  return (
    <div className='photo-container'>
      <ul>
        {images.map(item => (
           <GalleryItem
             title={item.title}
             server={item.server}
             secret={item.secret}
             id={item.id}
             key={item.id}
            />
         ))}​​
      </ul>
    </div>
  )
}

export default Gallery
