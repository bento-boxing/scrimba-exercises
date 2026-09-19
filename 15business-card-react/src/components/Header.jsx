import reactLogoPath from '../assets/react.svg'

export function Header() {
    return (
        <header className='header'>
            <img src={reactLogoPath} alt='React Logo' />
            <h1>bento-boxing</h1>
            <h2>Frontend Developer</h2>
            <a href='../../index.html'>bento-boxing.website</a>

            <section className='links'>
                <a href='mailto:bentoboxing@example123.com'>
                    <i className="fa-solid fa-envelope"></i>
                    Email
                </a>
                <a href='https://linkedin.com'>
                    <i className="fa-brands fa-linkedin"></i>
                    LinkedIn
                </a>
            </section>
        </header>
    )
}
