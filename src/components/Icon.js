import React from 'react'

const Icon = (props) => {
    const {
        name,
        // iconColor
        background,
    } = props;

    return (
        <span className={`material-icons custom-icon ${!background ? 'no-background' : ''}`}>
            {name}
        </span>
    )
}

export default Icon
