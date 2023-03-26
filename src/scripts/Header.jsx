import '../css/Header.css'

function Header(){
    
    return(
        <header>

            <div className="header-photo"></div>
            <div className="basic-info">
                <h2>Mihaila Valentin</h2>
                <h3>Frontend developer</h3>
            </div>
            <h3 className='contact-header'>Contact:</h3>
            <div className="contact-info">
                <i className="fa-sharp fa-regular fa-envelope mail-icon"></i>
                <p>Mail</p>
                <i className="fa-brands fa-linkedin-in linkedin-icon"></i>
                <p>LinkedIn</p>
            </div>

        </header>
    )

}

export default Header