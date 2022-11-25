import React, { FC, useState, KeyboardEvent } from 'react';
import { Pizza, Variant } from '../types/types';
import PizzaModal from './PizzaModal';

interface PizzaItemProps {
  pizza: Pizza
}

const PizzaItem: FC<PizzaItemProps> = ({ pizza }) => {
  const [variant, setVariant] = useState<Variant>('small');
  const [quantity, setQuantity] = useState(1);
  const [isModalShown, setIsModalShown] = useState(false);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      setIsModalShown(true);
    }
  };

  return (
    <div>
      <div onClick={() => setIsModalShown(true)} role='button' tabIndex={0} onKeyDown={e => handleKeyDown(e)}>
        <h5>{pizza.name}</h5>

        <img
          src={pizza.image}
          className='img-fluid pizza-item'
          alt={pizza.name}
        />
      </div>

      <div className="flex-container d-flex">
        <div className='w-100 m-2'>
          <p>Size</p>
          <select className='form-control' value={variant} onChange={e => setVariant(e.target.value as Variant)}>
            {pizza.variants.map(variantEl => (
              <option key={variantEl} value={variantEl}>{variantEl}</option>
            ))}
          </select>
        </div>

        <div className='w-100 m-2'>
          <p>Quantity</p>
          <select className='form-control' value={quantity} onChange={e => setQuantity(Number(e.target.value))}>
            {Array.from(Array(10).keys()).map(key => (
              <option key={key} value={key + 1}>{key + 1}</option>
            ))}
          </select>
        </div>
      </div>

      <div className='flex-container'>
        <div className='m-1 w-100'>
          <h3 className='mt-2'>Price: {pizza.prices[variant] * quantity} zł</h3>
        </div>

        <div className='m-1 w-100'>
          <button type='button' className='btn'>ADD TO CART</button>
        </div>
      </div>

      <PizzaModal pizza={pizza} isModalShown={isModalShown} onCloseModal={() => setIsModalShown(false)} />
    </div>
  );
};

export default PizzaItem;