const Header = (props) => {
//prevent Default é um método javascript que previne que a página seja recarregada quando 
//faço o envio de um form 
const HanddleSubmit = (event)=>{
  event.preventDefault();
  const searchValue = event.target[0].value;
  props.onSubmit(searchValue);
  event.target[0].value = '';
}
  return (
    <header className="Header">
      <h1>DNC Movie List</h1>
      <form onSubmit={HanddleSubmit}>
        <input type="text" placeholder="Pesquise por filmes" />
        <button type="submit">Pesquisar</button>
      </form>
    </header>
  )
}

export default Header