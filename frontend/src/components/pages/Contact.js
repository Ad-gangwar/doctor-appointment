import React from 'react'

export default function Contact() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
      <form className='w-50'>
        <div className="form-group my-3">
          <label for="exampleFormControlTextarea1" className='my-2'>Subject</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="1" placeholder='Let us know how we can help you.'></textarea>
        </div>
        <div className="form-group my-3">
          <label for="exampleFormControlTextarea1" className='my-2'>Your Message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" placeholder='Leave a comment'></textarea>
        </div>
      </form>
      <div>
        <button type='submit' className='btn btn-primary rounded-pill my-2'>Submit</button>
      </div>
    </div>
  )
}
