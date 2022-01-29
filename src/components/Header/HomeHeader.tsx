import { Link } from 'react-router-dom';

export default function HomeHeader() {
    return (
        <header className="homeHeader">
            <div className="innerCol">
                <Link to="/" className="pill-button bg-gray">
                    <span className="ml-0.5em mr-0.5em">Te Wāhi Auaha</span>
                </Link>
                <nav>
                    <Link to="/about" className='pill-button ml-0.6em mr-0.6em'>
                        About
                    </Link>
                    <a href="https://learn.tewahi.com" className="pill-button bg-yellow ml-0.6em mr-0.6em">
                        Launch Docs
                    </a>
                </nav>
            </div>
        </header>
    )
}