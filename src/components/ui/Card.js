import classes from './Card.module.css';

function Card(props){
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    );

}

export default Card;

// we will inject MeeupItem component in this component using props.children