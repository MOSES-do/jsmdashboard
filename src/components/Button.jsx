import PropTypes from 'prop-types';

//passing props from parent to child component ensures reusability across multiple places with diff style features
const Button = ({ bgColor, color, size, text, borderRadius }) => {
    return (
        <button type="button" style={{ backgroundColor: bgColor, color, borderRadius }} className={`text-${size} p-3 hover:drop-shadow-xl`}>Button</button>
    )
}
//eslint requirement not compulsory though
Button.propTypes = {
    bgColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    borderRadius: PropTypes.string.isRequired
}

export default Button;