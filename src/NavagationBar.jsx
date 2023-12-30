import './NavagationBar.css'
function NavagationBar(){
    return(
        <>
        <nav>
            <h1 id= "name">
                Samir Sanchez Tejada
            </h1>
            <div>
                <ul id ="navbar">
                    <li><a href="/myportfolio-test/Home">Home</a> </li>
                    <li><a href="/myportfolio-test/More">More</a></li>
                    <li><a href="/myportfolio-test/Stuff">Stuff</a></li>
                    <li><a href="/myportfolio-test/Cool">Cool</a></li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default NavagationBar