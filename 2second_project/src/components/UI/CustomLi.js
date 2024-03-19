import './CustomLi.css';

const CustomLi = (props) => {
    return <li className="customLi">{props.children}</li>;
};

export default CustomLi;