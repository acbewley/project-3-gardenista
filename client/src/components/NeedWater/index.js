import React from 'react';
import './style.css'

function NeedWater({children}) {
  return (
    <div className="needs-water">
      {children}
    </div>
  )
}

export default NeedWater;