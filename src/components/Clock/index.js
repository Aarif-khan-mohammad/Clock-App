import React from 'react'
import { useState , useEffect } from 'react'
import { ClockContainer , Heading , ClockImage , ClockTime } from './styledComponents'

const Clock = () => {
    const [date , setDate] = useState(new Date())
    useEffect(()=> {
        const timerId = setInterval(()=>{
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(timerId)
        }
    } , [])
  return (
    <ClockContainer>
      <Heading>Clock</Heading>
      <ClockImage src="https://assets.ccbp.in/frontend/hooks/clock-img.png" alt="clock" />
      <ClockTime>{date.toLocaleTimeString()}</ClockTime>
    </ClockContainer>
  )
}

export default Clock