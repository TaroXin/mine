import { useState } from 'react'

export default function () {
  const [count] = useState(0)
  const [message] = useState('this is test message')

  return <div> Hello Blog: {count} - {message} </div>
}
