import React from 'react';
import PropTypes from 'prop-types';

function Modal (props){
  return (
    <>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={props.target}>
        Launch demo modal
      </button>
      <div class="modal fade" id={props.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">{props.name}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>{props.details}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Modal.propTypes = {
  name : PropTypes.string.isRequired,
  details : PropTypes.string.isRequired,
  target : PropTypes.string.isRequired,
  id : PropTypes.string.isRequired,
};

Modal.defaultProps = {
  name : 'Nama Lengkap',
  details : 'Lorem Ipsum dolor sit amet',
  target : '#exampleModal',
  id : 'exampleModal',
};
export default Modal;