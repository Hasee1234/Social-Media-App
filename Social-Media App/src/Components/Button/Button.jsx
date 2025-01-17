import React from 'react'

export default function Button({title,onClickHandler}) {
  return (
    <button onClick={onClickHandler} style={{backgroundColor:'seagreen'}}>{title}</button>
  )
}