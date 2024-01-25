import { useState } from 'react';

function App2() {
    const [input, setInput] = useState('');
    const [tarefas, setTarefas] = useState([
        'Tarefa1',
        'Tarefa2'
    ]);    


    function handleRegister(event){
        event.preventDefault(); // para não atualizar a página.

        setTarefas([...tarefas, input]);
        setInput('');
    }

    return (
        <div>
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

            <ul>        
                {tarefas.map( 
                    tarefa => ( 
                        <li key={tarefa}>{tarefa}</li> 
                    )
                )}      
            </ul>

        </div>
    );
}

export default App2;
