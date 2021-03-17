import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Photo() {
  const [photo, setPhoto] = useState('')

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      setPhoto(res.data.url)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div>
      <img src={photo}></img>
    </div>
  )
}