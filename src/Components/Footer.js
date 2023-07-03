import React from 'react'

export default function Footer() {
  return (
    <footer className="h-20 py-8 bg-black relative bottom-0 left-0"  >
    <div className='flex flex-row items-center justify-center space-x-10' style={{ margin: "0px auto",position:"absolute",width:"100%"}}>
        {/* <a href="https://anshuman-8.github.io/"><img src="https://img.icons8.com/fluency/30/000000/web.png" alt="Website"/></a> */}
        {/* mail me at: */}
        
        {/* <div className='text-color-white'> Any Suggestions: Mail me At</div> */}
        <a className='mx-5' href="mailto:jvishal0501@gmail.com"><img src="https://img.icons8.com/color/30/000000/gmail-new.png" alt="Gmail"/></a>
        {/* <a href="https://github.com/anshuman-8"><img src="https://img.icons8.com/color/30/000000/github--v1.png" alt="GitHub"/></a> */}
        {/* <a className='mx-5' href="https://twitter.com/Anshuman_8_"><img src="https://img.icons8.com/color/30/000000/twitter--v1.png" alt="Twitter"/></a> */}
        {/* <a href="https://www.linkedin.com/in/anshuman-swain-1529b2219/"><img src="https://img.icons8.com/fluency/30/000000/linkedin.png" alt="LinkedIn"/></a> */}
    </div>
    </footer>
  )
}
