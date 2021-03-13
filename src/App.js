import HeaderBlock from "./components/HeaderBlock"
import Header from "./components/Header"
import Layout from "./components/Layout"
import Footer from "./components/Footer"



const App = () => {
  return(
    <>
    <HeaderBlock title= "This is new Title"
    descr="This is new description!"
    />
    <HeaderBlock title= "This is new Title"
    hideBackground
    />
    <Header title descr />
     <Layout title ="Layout 1" background/>
     <Layout title ="Layout 2"  backgroundColor = "red"
    />
     <Layout title ="Layout 3" backgroundImage/>
    <Footer />
   

</>
  )
}

export default App;