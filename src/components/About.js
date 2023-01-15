// import React from 'react'

// const About = () => {
//   return <div>This is About page</div>
// }

// export default About
import React from 'react'

export default function About(props) {
  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
  }

  return (
    <div className='container'>
      <h1
        className='my-3'
        style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}
      >
        About Us
      </h1>
      <div className='accordion' id='accordionExample'>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingOne'>
            <button
              className='accordion-button'
              type='button'
              style={myStyle}
              data-bs-toggle='collapse'
              data-bs-target='#collapseOne'
              aria-expanded='true'
              aria-controls='collapseOne'
            >
              <strong>Store your Notes</strong>
            </button>
          </h2>
          <div
            id='collapseOne'
            className='accordion-collapse collapse show'
            aria-labelledby='headingOne'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body' style={myStyle}>
              iNotebook allows you to create your personal account using your
              E-mail and Password. And, here you can store all of your notes and
              to-do lists. You can also update and delete them as per your
              requirements.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingTwo'>
            <button
              className='accordion-button collapsed'
              style={myStyle}
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseTwo'
              aria-expanded='false'
              aria-controls='collapseTwo'
            >
              <strong>Free to use </strong>
            </button>
          </h2>
          <div
            id='collapseTwo'
            className='accordion-collapse collapse'
            aria-labelledby='headingTwo'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body' style={myStyle}>
              iNotebook is a free and secured note storing tool which provides
              personal account creation and CRUD(create, read, update and
              delete) operations on the notes.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingThree'>
            <button
              className='accordion-button collapsed'
              style={myStyle}
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseThree'
              aria-expanded='false'
              aria-controls='collapseThree'
            >
              <strong>Browser Compatible </strong>
            </button>
          </h2>
          <div
            id='collapseThree'
            className='accordion-collapse collapse'
            aria-labelledby='headingThree'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body' style={myStyle}>
              This notes taking software works in any web browsers such as
              Chrome, Firefox, Internet Explorer, Safari, Opera.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
