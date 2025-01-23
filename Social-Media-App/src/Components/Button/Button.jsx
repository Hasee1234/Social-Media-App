import React from 'react'

export default function Button({title,onClickHandler}) {
  return (
    <button onClick={onClickHandler} style={{backgroundColor:'seagreen', margin:"5px" }}>{title}</button>
  )
}