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
                <div>
                    <i className="fa-sharp fa-regular fa-envelope icons"></i>
                    <p>Mail</p>
                </div>
                <div>
                    <i className="fa-brands fa-linkedin-in icons"></i>
                    <p>LinkedIn</p>
                </div>
                <div>
                    <i className="fa-solid fa-phone icons"></i>
                    <p>Phone</p>
                </div>
            </div>

        </header>
    )

}

export default Header