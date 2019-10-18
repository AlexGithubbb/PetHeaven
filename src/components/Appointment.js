import React, { Fragment } from 'react';
import { FaTimes } from 'react-icons/fa';
import Moment from 'react-moment';

const Appointment = ({ item, deleteAppointment }) => {
  return (
    <Fragment>
      <div className='appointment-list item-list mb-3'>
        <div className='pet-item col media py-3'>
          <div className='mr-3'>
            <button
              className='pet-delete btn btn-sm btn-danger'
              // onClick={() => deleteAppointment(item.aptId)} // apply to 'filter' way
              onClick={() => deleteAppointment(item)} // apply to 'lodash without' method
            >
              <FaTimes />
            </button>
          </div>

          <div className='pet-info media-body'>
            <div className='pet-head d-flex'>
              <span
                className='pet-name'
                contentEditable
                suppressContentEditableWarning
              >
                {/* {item.aptId}--{item.petName} */}
                {item.petName}
              </span>
              <span className='apt-date ml-auto'>
                <Moment
                  date={item.aptDate}
                  parse='YYYY-MM-dd hh:mm'
                  format='MMM d h:mma'
                />
              </span>
            </div>

            <div className='owner-name'>
              <span className='label-item'>Owner: </span>
              <span>{item.ownerName}</span>
            </div>
            <div className='apt-notes'>{item.aptNotes}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Appointment;
