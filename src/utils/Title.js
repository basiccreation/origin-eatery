import React from "react"
import styled from "styled-components"

export function Title({ title, message }) {
  return (
    <div>
      <h3>{message}</h3>
      <h1>{title}</h1>
      <div className="underline" />
    </div>
  )
}
