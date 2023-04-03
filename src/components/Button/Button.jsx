import React from 'react';

const Button = (props) => {
    const { children, isRed } = props
    const styles = {
        backgroundColor: isRed ? "#FF3030" : "#FF9900",
        borderRadius: "4px",
        height: "48px",
        border: 0,
        fontWeight: 400,
        fontSize: "17px",
        lineHeight: "20px",
        letterSpacing: "0.005em",
        color: "#FFFFFF",
        marginTop: "20px",
        cursor: "pointer"
    }

    return <button style={styles}>{children}</button>;
};

export default Button;