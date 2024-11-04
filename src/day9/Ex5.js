//Ex5.js
import { LoginProvider } from './ex5/LoginContext'
import Header from './ex5/Header'
import MainComp from './ex5/MainComp'
import Footer from './ex5/Footer'

export default function Ex5 () {
   return (
      <div className="Wrapper">
         <LoginProvider>
            <Header />
            <MainComp />
            <Footer />
         </LoginProvider>
      </div>
   )
}