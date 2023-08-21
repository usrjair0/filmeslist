const Header = () => {
  return (
    <header className="Header">
      <h1>DNC Movie List</h1>
      <form onSubmit={'handleSubmit'}>
        <input type="text" placeholder="Pesquise por filmes" />
      </form>
    </header>
  )
}

export default Header