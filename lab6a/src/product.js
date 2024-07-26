import './App.css';

function Product (props) {
    return (

    <div className="Card">
    <img src={props.img} alt="products" />
    <div className="Desc">
    <h4>{props.name}</h4>
    <p>{props.desc}</p>
    <h4>{props.price}</h4>
    </div>
    </div>

    );
    }
export default Product