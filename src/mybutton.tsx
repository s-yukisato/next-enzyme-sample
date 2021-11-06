import React, { useState } from 'react'

const MyButton = () => {
  const [label, setLabel] = useState('--')
  return (
    <div>
      <p id='label'>{label}</p>
      <button id='btn' onClick={() => setLabel('OK')}>ClickMe</button>
    </div>
  )
}

export default MyButton