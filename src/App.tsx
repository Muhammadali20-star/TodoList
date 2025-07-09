import React from 'react'
import Header from './components/Header'
import Footer from './components/footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Footer/>
    </div>
  )
}

export default React.memo(App)