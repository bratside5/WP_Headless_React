import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ProductPage () {
  const { id } = useParams()
  useEffect(() => {
    fetchItem()
  }, [])
  const [item, setItem] = useState({
    acf: {}
  })

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `http://api.igbot.local/wp-json/wp/v2/products/${id}`
    )
    const item = await fetchItem.json()
    setItem(item)
    console.log(item.x_featured_media)
  }

  return (
    <div>
      <h1>{item.acf.title}</h1>
      <p>{item.acf.subheading}</p>
      <img src={item.x_featured_media} alt={item.acf.title} />
      <p>{item.acf.product_description}</p>
      <p>{item.acf.price}</p>
    </div>
  )
}

export default ProductPage
