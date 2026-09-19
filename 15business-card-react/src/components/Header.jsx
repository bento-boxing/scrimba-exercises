import reactLogoPath from '../assets/react.svg'

export function Header() {
    return (
        <header className='header'>
            <img className='header__image' src={reactLogoPath} alt='React Logo' />
            <h1 className='header__name'>bento-boxing</h1>
            <h2 className='header__title'>Frontend Developer</h2>
            <a className='header__website' href='../../index.html'>bento-boxing.website</a>

            <section className='header__links'>
                <a className='links__link' href='mailto:bentoboxing@example123.com'>
                    <i className="fa-solid fa-envelope"></i>
                    Email
                </a>
                <a className='links__link links__link--blue' href='https://linkedin.com'>
                    <i className="fa-brands fa-linkedin"></i>
                    LinkedIn
                </a>
            </section>
        </header>
    )
}
