import React from 'react';

const style = {
  backgroundColor: '#5b7444',
  position: 'fixed',
  left: 0,
  bottom: 0,
  width: '100%'
}

const Footer = () => {
  return (
    <footer class="footer mt-auto py-3" style={style}>
      <div class="container">
        <span class="text-muted">Copyrite Us 2021</span>
      </div>
    </footer>
  )
}

export default Footer;