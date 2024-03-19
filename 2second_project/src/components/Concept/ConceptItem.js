import CustomLi from "../UI/CustomLi";

const ConceptItem = (props) => {
    return (
        <CustomLi>
          <img src={props.image} alt={props.title} />
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </CustomLi>
    );
}

export default ConceptItem;