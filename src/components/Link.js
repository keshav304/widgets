import React from 'react';

const Link = ({ className, href, children }) => {

    const onClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }

        //prvent full page loading
        event.preventDefault()
        window.history.pushState({}, '', href)

        //communication with route
        const navEvent = new PopStateEvent('popstate')
        window.dispatchEvent(navEvent)
    }
    return (
        <a onClick={onClick} className={className} href={href}>
            {children}
        </a>
    );
};

export default Link;