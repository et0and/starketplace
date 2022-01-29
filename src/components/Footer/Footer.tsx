import { Link } from 'react-router-dom';
import Logo from '../Icons/Logo';

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
                        <Logo />
                        <p className=" ml-0.5em">
                            Te Wāhi Auaha
                        </p>
                    </div>
                </Link>
                <nav>
                    <Link to="https://takapuna.school.nz">
                        <div className='toolbar-link'>
                            Takapuna Grammar School
                        </div>
                    </Link>
                    <Link to="mailto:t.hackshaw@tgs.school.nz">
                        <div className="toolbar-link">
                            Contact
                        </div>
                    </Link>
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

                  <a href="https://github.com/urbit/starketplace/issues/new?assignees=&labels=&template=bug_report.md&title=" target="_blank" rel="noreferrer"className="toolbar-link">
                       Bug Reports
                    </a>

                </nav>
            </div>
        </footer>
    )
}

Footer.defaultProps = {
    className: "",
    style: {},
}