import './style.css' ;

const Layout = ({title, desc, urlBg, colorBg }) => {
   /// const styleRoot = hideBackground ? {hideBackgroundImage: 'none'} : {}
   return (

 <section className="root">
    <div className="wrapper">
        <article>
            <div className="title">
            { title && <h3>{title}</h3> }
                <span className="separator"></span>
            </div>
            <div className="desc full">
            {desc && <p>{desc}</p> }
            </div>
        </article>
    </div>
</section>
)
}

export default Layout;