import './style.css' ; 

const Header = ({title,descr}) => {
    return(
<header className="root">
    <div className="forest"></div>
    <div className="container">
    { title && <h1>{title}This is title</h1> }
    {descr && <p>{descr}This is Description!</p> }
    </div>
</header>
    )
}

export default Header;