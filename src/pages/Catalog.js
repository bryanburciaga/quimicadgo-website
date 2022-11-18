import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Catalogo de productos</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {/* <details>
              <summary>Gel</summary>
              <p> */}
            <CardItem
              src='images/gel.jpeg'
              text='Gel antibacterial al 70% base de alcohol etílico '
              label='Gel antibacterial'
              price='$50'
            />
            {/* </p></details>
               <details>
              <summary>Fabuloso</summary>
              <p> */}
            <CardItem
              src='images/fabuloso.jpeg'
              text='Limpiador para pisos 
              Tipo Fabuloso 
              Esencia lavanda'
              label='Fabuloso'
              price='$50'
            />
            {/* </p></details>
             */}
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Bolsas.jpeg'
              text='Bolsas negra Jumbo 90 x 120 cm'
              label='Bolsa Jumbo'
              price='$50'
            />
            <CardItem
              src='images/jabon.jpeg'
              text='Jabón líquido para manos esencia naranja'
              label='Jabón líquido para manos'
              price='$50'
            />
          </ul>

          {/* <h1 className='pedido'>Productos sobre pedido</h1>
          <ul className='cards__items'>
            <CardItem
              src='images/default-placeholder.png'
              text='A app to record your personal Expenses with Python'
              label='Expense-list'
              price='$50'
            />
            <CardItem
              src='images/default-placeholder.png'
              text='An inventory Management App with Node.JS, Express and MongoDB'
              label='Inventory Management'
              price='$50'
            />
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;