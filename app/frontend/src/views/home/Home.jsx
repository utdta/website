import React from 'react'
import logo from './logo.png'
import Widget from './Widget'
import { CryptoPricesWidget } from './widgets'

const style = {
  root: {
    display: "grid",
    gridTemplateColumns: "1fr 3fr 1fr"
  },
  largeLogo: {
    display: "block",
    margin: "auto",
    height: "300px"
  },
  nameHeader: {
    textAlign: "center",
    fontSize: "4rem",
    margin: "20px 0px"
  },
  dividingLine: {
    backgroundColor: "white",
    height: "5px"
  },
  logoAndTitle: {
    display: "grid",
    gridTemplateColumns: "1fr 3fr",
  }
}

const testComponent = <p>Hello, world!</p>

class Home extends React.Component{
  render() {
    return (
      <div style={style.root}>
        <div></div>
        <div>
          <div style={style.logoAndTitle}>
            <img src={logo} alt="Logo" style={style.largeLogo}/>
            <h1 style={style.nameHeader}>University of Toronto Decentralized Tech Association</h1>
          </div>
          <div style={style.dividingLine}></div>
          <Widget height="600px" width="300px" title="Upcoming Events" bodyComponent={testComponent}/>
          <Widget height="600px" width="300px" title="Cryptocurrencies" bodyComponent={<CryptoPricesWidget />}/>
          <Widget height="600px" width="300px" bodyComponent={testComponent}/>
        </div>

        <div></div>
      </div>
    )
  }
}

export default Home
