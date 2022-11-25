import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Pizza } from '../types/types';

interface PizzaModalProps {
  pizza: Pizza
  isModalShown: boolean
  onCloseModal: () => void
}

const PizzaModal = ({ pizza, isModalShown, onCloseModal }: PizzaModalProps) => (
  <Modal show={isModalShown} onHide={onCloseModal}>
    <Modal.Header closeButton>
      <Modal.Title>{pizza.name}</Modal.Title>
    </Modal.Header>

    <Modal.Body className='d-flex justify-content-center flex-column'>
      <img src={pizza.image} className='img-fluid pizza-item h-100' alt={pizza.name} />
      <p className='text-center'>{pizza.description}</p>
    </Modal.Body>

    <Modal.Footer>
      <Button variant="secondary" onClick={onCloseModal}>Close</Button>
    </Modal.Footer>
  </Modal>
);

export default PizzaModal;