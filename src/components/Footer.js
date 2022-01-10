import React from 'react'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='socials'>
                <a href="https://github.com/troydomio" target="_blank"><img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/042017/untitled-2_5.png?itok=IlsUnu37" alt="github"/></a>

                <a href="https://www.linkedin.com/in/troydomio/" target="_blank"><img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-512.png" alt="linkedin"/></a>

                <a href='https://twitter.com/TroyDomio' target="_blank"><img src="https://i.pinimg.com/originals/fc/6c/5e/fc6c5e3c36506985097f7238de63871d.jpg" alt="twitter"/></a>
            </div>
            <div className='credit'>
            Build with ❤️ by Troy Domio using <a href="https://reactjs.org/" target="_blank">React</a> and <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank">CSS</a>
            </div>
        </div>
    )
}
