const Button = () => {

    const scrollTo = () =>{
        window.scroll({
            top:600,
            behavior:'smooth'
        })
    }
    return ( 

        <>
            <button onClick={scrollTo} className="button-app">
                Ver estatísticas...
            </button>
        </>
     );
}
 
export default Button;