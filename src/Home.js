import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// useState: [constante que define o estado, setContante que altera o estado] = useState('valor inicial')
function Home(){
    const [input, setInput] = useState('');

    //const [tarefas, setTarefas] = useState(['Tarefa1', 'Tarefa2']); 
    
    // ***** component did mount (quando o componente montar na tela faz algo)
    const [tarefas, setTarefas] = useState(() =>{
        const tarefasStorage = localStorage.getItem('@tarefa');
        
        return tarefasStorage ? JSON.parse(tarefasStorage) : [];
    });
    /*useEffect(() =>{
        const tarefasStorage = localStorage.getItem('@tarefa'); // busco se tem algo no localStorage, armazena na const.

        if(tarefasStorage){
            //se tiver algo, joga denro da useState setTarefas.
            setTarefas(JSON.parse(tarefasStorage));
        }

        // ***** component did unmount
        /* return () =>{
            // Quando o componente for desmontado (ao sair da página por exemplo), executa o return.
        }

    }, []);*/
    // ********************************************************************************

    // ***** component update (passando um parâmetro pra ele, e quando esse parâmetro sofrer alteração ele chama ali dentro)
    // useEffect: Assim que o componente é renderizado (carregado) na tela, chama a função useEffect. Se houver um valor no array do 2o argumento da arrow function, e ele sofrer alteração, vai chamar a função.
    useEffect(() =>{
        localStorage.setItem('@tarefa', JSON.stringify(tarefas));
    }, [tarefas]);


    function handleRegister(event){
        event.preventDefault(); // para não atualizar a página.

        setTarefas([...tarefas, input]);
        setInput('');
    }

    return (
        <div>
            <Link to="/sobre">Sobre</Link>  
            <h1>Cadastrando tarefas</h1>            
            <form onSubmit={handleRegister}>
                <label>Tarefa: </label> <br/>
                <input 
                placeholder='Digite uma tarefa'
                value={input}
                onChange={ (event) => setInput(event.target.value) }
                /> <br/> <br/>

                <button type='submit'>Registrar</button>
            </form>            
            <br/>

            <Link to="/produto/123">Acessar produto 123</Link> <br/> <br/>

            <ul>        
                {tarefas.map( 
                    tarefa => ( 
                        <li key={tarefa}> {tarefa} </li> 
                    )
                )}      
            </ul>

        </div>
    );
}

export default Home;