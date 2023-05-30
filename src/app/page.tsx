'use client'

import './page.css'
import QRCode from 'react-qr-code';

export default function Home() {

  function handleClick() {
    navigator.clipboard.writeText('copiado')
      .then(() => alert('qrcode copiado!'))
      .catch((error) => console.error(error))
  }

  return (
    <main className='card'>
      <div className='card__qr-code-container'>
        <QRCode
          className='card__qr-code'
          value='https://github.com/pabloccard' 
          bgColor='transparent' 
          fgColor='#FFFFFF'
        />

        <button className='card__button-copy' onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#FFF" viewBox="0 0 256 256"><path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"></path></svg>
        </button>
      </div>

      <h1 className='card__title'>Improve your front-end skills by building projects</h1>
      <p className='card__description'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </main>
  )
}
