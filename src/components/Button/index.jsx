import React from 'react'

const STYLES = ['button--primary', 'btn--outline']

const SIZES = ['button--large', 'btn--medium', 'btn--mobile', 'btn--wide']

const COLOR = ['button-color--primary', 'button-color--secondary']

const Button = ({ 
    children, 
    type, 
    onClick, 
    buttonStyle, 
    // buttonSize, 
    buttonColor,
    }) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    // const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0]

    const checkButtonColor = STYLES.includes(buttonColor) ? buttonColor : COLOR[0]

    return(
        <button
        onClick={onClick}
        className={`btn ${checkButtonStyle} ${checkButtonColor} ${type}`}
        >
        {children}
        </button>
    )
}

export default Button