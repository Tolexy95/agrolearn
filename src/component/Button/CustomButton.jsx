const CustomButton = ({ labelText = "button", ...props }) => {
    return (
        <button
            className={ `btn w-full ${props.className} ` }
            onClick={ props.onClick }
        >
            { props.icon ? <props.icon className={ `w-5 h-5` } /> : '' } <span>{ labelText }</span>
        </button>
    )
}
export default CustomButton;