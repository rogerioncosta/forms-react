import { useParams } from 'react-router-dom';
import './style.css';

function Produto(){

    const { id } = useParams();
    // const spanStyle = {color: 'white', backgroundColor: 'grayLight', borderRadius: '4px', padding: '1px'};

    return(
        <div>
            <h1>Detalhes do Produto</h1>
            <p> Produto <span> {id} </span> </p>
        </div>        
    )
}

export default Produto;