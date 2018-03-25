import React from 'react'

export default function SafeOutgoingLink (props) {
  if (props.internal) return <a {...props} />
  return <a {...props} target='_blank' rel='noreferrer noopener' />
}
