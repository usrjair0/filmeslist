const Header = () => {

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