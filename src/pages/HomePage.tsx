import React from 'react';
import PizzaItem from '../components/PizzaItem';
import pizzas from '../pizzasdata';

const HomePage = () => (
  <div>
    <div className="row d-flex justify-content-center">
      {pizzas.map(pizza => (
        <div
          className="col-md-3 m-5 shadow-lg p-3 mb-5 bg-white rounded"
          key={pizza.name}
          style={{ minWidth: 300, maxWidth: 400 }}
        >
          <PizzaItem pizza={pizza} key={pizza.name} />
        </div>
      ))}
    </div>
  </div>
);

export default HomePage;