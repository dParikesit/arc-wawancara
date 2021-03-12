import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';

function Card(props){
  return (
    <>
      <div className="card">
        <div className="card-body"> 
          <img src={props.pics} alt='Foto wawancara kru' className='img-fluid' />
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.date}</p>
          <Modal name={props.name} details={props.details} target={props.target} id={props.id} />
        </div>
      </div>
    </>
  )
}

Card.propTypes = {
  name : PropTypes.string.isRequired,
  date : PropTypes.string.isRequired,
  details : PropTypes.string.isRequired,
  target : PropTypes.string.isRequired,
  id : PropTypes.string.isRequired,
};

Card.defaultProps = {
  name : 'Nama Lengkap',
  date : 'Hari, tanggal tahun',
  details : 'Lorem Ipsum dolor sit amet',
  target : '#exampleModal',
  id : 'exampleModal',
};
export default Card;