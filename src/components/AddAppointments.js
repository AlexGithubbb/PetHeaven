import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const AddAppointment = props => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState({
    petName: '',
    ownerName: '',
    aptDate: '',
    aptTime: '',
    aptNotes: ''
  });

  const toggleForm = () => {
    setOpen(!open);
  };
  const handleChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    // const {name, value} = target;
    setInput({ ...input, [name]: value });
  };

  const handleAdd = e => {
    e.preventDefault();
    // console.log('submitted');
    // return input;
    let tempApt = {
      petName: input.petName,
      ownerName: input.ownerName,
      aptDate: `${input.aptDate} ${input.aptTime}`,
      aptNotes: input.aptNotes
    };
    // console.log(tempApt);
    props.addAppointment(tempApt);
    setInput({
      petName: '',
      ownerName: '',
      aptDate: '',
      aptTime: '',
      aptNotes: ''
    });
    setOpen(false);
  };
  return (
    <div className={'card textcenter mt-3' + (open ? '' : ' add-appointment')}>
      {/* <div
      className='card textcenter mt-3'
      className={open ? '' : 'add-appointment'}
    > */}
      <div
        className='apt-addheading card-header bg-primary text-white'
        onClick={() => toggleForm()}
      >
        <FaPlus /> Add Appointment
      </div>

      <div className='card-body'>
        <form id='aptForm' noValidate onSubmit={handleAdd}>
          <div className='form-group form-row'>
            <label
              className='col-md-2 col-form-label text-md-right'
              htmlFor='petName'
              readOnly
            >
              Pet Name
            </label>
            <div className='col-md-10'>
              <input
                type='text'
                className='form-control'
                name='petName'
                placeholder="Pet's Name"
                value={input.petName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className='form-group form-row'>
            <label
              className='col-md-2 col-form-label text-md-right'
              htmlFor='ownerName'
            >
              Pet Owner
            </label>
            <div className='col-md-10'>
              <input
                type='text'
                className='form-control'
                name='ownerName'
                placeholder="Owner's Name"
                value={input.ownerName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className='form-group form-row'>
            <label
              className='col-md-2 col-form-label text-md-right'
              htmlFor='aptDate'
            >
              Date
            </label>
            <div className='col-md-4'>
              <input
                type='date'
                className='form-control'
                name='aptDate'
                id='aptDate'
                value={input.aptDate}
                onChange={handleChange}
              />
            </div>
            <label
              className='col-md-2 col-form-label text-md-right'
              htmlFor='aptTime'
            >
              Time
            </label>
            <div className='col-md-4'>
              <input
                type='time'
                className='form-control'
                name='aptTime'
                id='aptTime'
                value={input.aptTime}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className='form-group form-row'>
            <label className='col-md-2 text-md-right' htmlFor='aptNotes'>
              Apt. Notes
            </label>
            <div className='col-md-10'>
              <textarea
                className='form-control'
                rows='4'
                cols='50'
                name='aptNotes'
                id='aptNotes'
                placeholder='Appointment Notes'
                value={input.aptNotes}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className='form-group form-row mb-0'>
            <div className='offset-md-2 col-md-10'>
              <button type='submit' className='btn btn-primary d-block ml-auto'>
                Add Appointment
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAppointment;
