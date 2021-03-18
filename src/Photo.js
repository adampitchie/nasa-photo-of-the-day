import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const StyledH1 = styled.h1`
  color: 'blue';
`;

const StyledDiv = styled.div`
  color: 'blue';
`;

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
    <StyledDiv>
      <StyledH1>Photo of the Day</StyledH1>
      <img src={photo} />
    </StyledDiv>
  )
}