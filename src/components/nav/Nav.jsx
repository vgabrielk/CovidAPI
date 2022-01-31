import './Nav.css'

const Nav = () => {
    return ( 

        <>
        <div className="header">
        <div className="nav">
            <div className="logo">
                <img src='https://www.un.org/sites/un2.un.org/files/covid-19.svg' alt="Covid-19 logo" />
            </div>
            <ul>
                <li> <a href="/">Home</a> </li>
                <li> <a href="#stats">Estatísticas</a> </li>
                <li> <a href="#footer">Rodapé</a> </li>
            </ul>
        </div>
        </div>
        </>
     );
}
 
export default Nav;
