import React from 'react';
import Appointment from './Appointment';

const ListAppointments = ({ deleteAppointment, ListAppointments }) => {
  const lists = ListAppointments.map(item => {
    return (
      <Appointment
        key={item.aptId}
        item={item}
        deleteAppointment={deleteAppointment}
      />
    );
  });
  return <div className='appointment-list item-list mb-3'>{lists}</div>;
};

export default ListAppointments;
