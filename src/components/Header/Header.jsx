const Header = () => {
//prevent Default é um método javascript que previne que a página seja recarregada quando 
//faço o envio de um form 
const HanddleSubmit = (event)=>{
  event.preventDefault();
}

  return (
    <header className="Header">
      <h1>DNC Movie List</h1>
      <form onSubmit={HanddleSubmit}>
        <input type="text" placeholder="Pesquise por filmes" />
      </form>
    </header>
  )
}

export default Header