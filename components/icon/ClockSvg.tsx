const ClockSvg = ({ ...rest }) => {
    return (
        <svg width="40" height="40" {...rest} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 33.7246C27.5799 33.7246 33.7246 27.5799 33.7246 20C33.7246 12.4201 27.5799 6.27539 20 6.27539C12.4201 6.27539 6.27539 12.4201 6.27539 20C6.27539 27.5799 12.4201 33.7246 20 33.7246Z" fill="#028478" stroke="#028478" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M20 13.1385V20.7633L23.8124 24.5757" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    );
}

export default ClockSvg;