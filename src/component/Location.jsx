import React from 'react'

const Location = () => {
  return (
    <div className='card p-3 m-3'>
        <header>
            <h2 className='modal-header'>Location :</h2>
        </header>
        <div className='embed-responsive embed-responsive-16by9'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58849.758833344174!2d86.1269019216797!3d22.79839030000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e30efebbb46b%3A0xd2e2a220d876c341!2sTata%20Steel!5e0!3m2!1sen!2sin!4v1751211460731!5m2!1sen!2sin" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}

export default Location
