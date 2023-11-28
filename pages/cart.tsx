import React from 'react'
import { Provider } from 'react-redux'
import CartDetail from '../components/Carts/CartDetail'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { store } from '../redux/store'

const cart_detail = () => {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <CartDetail />
        <Footer />
      </Provider>
    </div>
  )
}

export default cart_detail