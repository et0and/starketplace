import { Link } from 'react-router-dom';

import './Footer.scss'

type FooterProps = {
    className: string,
    style: any,
}

export default function Footer({className, style}:FooterProps) {
    return (
        <footer className={`footer ${className}`} style={{...style}}>
            <div className="innerCol">
                <Link to="/">
                    <div className="toolbar-link">
                        <p className=" ml-0.5em">
                            Te Wāhi Auaha
                        </p>
                    </div>
                </Link>
                <nav>
                    <a href="https://takapuna.school.nz">
                    <div className="toolbar-link">
                            Takapuna Grammar School
                    </div>
                    </a>
                    <a href="mailto:t.hackshaw@tgs.school.nz">
                    <div className="toolbar-link">
                            Contact
                    </div>
                    </a>
                    <Link to="/disclaimer">
                        <div className="toolbar-link">
                            Privacy Policy
                        </div>
                    </Link>
                    <Link to="/tos">
                        <div className="toolbar-link">
                            Terms of Service
                        </div>
                    </Link>

                </nav>
            </div>
        </footer>
    )
}

Footer.defaultProps = {
    className: "",
    style: {},
}