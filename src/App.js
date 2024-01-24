import { useState } from 'react';

function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [email, setEmail] = useState('');

  const [user, setUser] = useState({});


  function handleRegister(event){
    event.preventDefault(); // para não atualizar a página.
    
    alert('Usuário registrado com sucesso!');

    setUser({
      nome: nome,
      idade: idade,
      email: email,
    })    
  }

  return (
    <div>
      <h1>Cadastrando usuário</h1>

      <form onSubmit={handleRegister}>
        <label>Nome: </label> <br/>
        <input 
        placeholder='Digite seu nome'
        value={nome}
        onChange={ (event) => setNome(event.target.value) }
        /> <br/>

        <label>Idade: </label> <br/>
        <input 
        placeholder='Digite sua idade'
        value={idade}
        onChange={ (event) => setIdade(event.target.value) }
        /> <br/>

        <label>Email: </label> <br/>
        <input 
        placeholder='Digite seu e-mail' 
        value={email}
        onChange={ (event) => setEmail(event.target.value) }
        /> <br/> <br/>

        <button type='submit'>Registrar</button>
      </form>      

      <br/> <br/>

      <div>
        <span>Bem vindo: {user.nome}</span> <br/>
        <span>Idade: {user.idade}</span> <br/>
        <span>Email: {user.email}</span> <br/>

      </div>
    </div>
  );
}

export default App;
