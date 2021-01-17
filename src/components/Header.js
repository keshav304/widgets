import React from 'react';
import Link from './Link'

const Header = () => {
    return (
        <div className="ui secondry pointing menu">
            <Link href="/" className="item">
                Accordion
            </Link>
            <Link href="/translate" className="item">
                Translate
            </Link>
            <Link href="/dropdown" className="item">
                Dropdown
            </Link>
            <Link href="/list" className="item">
                Search
            </Link>
        </div>
    );
};

export default Header;