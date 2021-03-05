/* global fetch */

import React, { useEffect, useState } from 'react'
import GalleryItem from './GalleryItem'
import NotFound from './NotFound'

const Gallery = (props) => {
  let pictures
  let header

  const [images, setData] = useState([])

  useEffect(() => {
    console.log('anything')
    console.log(props.apiKey)
    console.log(props.searchTerm)
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${props.apiKey}&tags=${props.searchTerm}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        setData(responseData.photos.photo)
      // const photos = responseData.photos.photo
      // if (photos.length > 0) {
      //   pictures = photos.map(picture =>
      // <GalleryItem
      //   title={picture.title}
      //   server={picture.server}
      //   secret={picture.secret}
      //   id={picture.id}
      //   key={picture.id}
      // />
      //   )
      //   header = 'Results'
      // } else {
      //   pictures = <NotFound />
      //   header = 'No Results Found'
      // }
      })
      .catch(err => console.log('Error fetching data', err))
  }, [])

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
