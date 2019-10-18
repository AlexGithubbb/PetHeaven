import React, { Component } from 'react';
import './App.css';
import AddAppointments from './components/AddAppointments';
import ListAppointments from './components/ListAppointments';
import SearchAppointments from './components/SearchAppointments';
import { without } from 'lodash';
class App extends Component {
  state = {
    myAppointments: [],
    lastIndex: 0,
    orderBy: 'petName',
    orderDir: 'desc',
    queryText: 'S'
  };

  async componentDidMount() {
    const res = await fetch('./data.json');
    const data = await res.json();
    // const item = data.map(({ aptDate, petName, ownerName, aptNotes }) => {
    //   return { aptDate, petName, ownerName, aptNotes };
    // });
    const apts = data.map(item => {
      item.aptId = this.state.lastIndex;
      this.setState({ lastIndex: this.state.lastIndex + 1 });
      return item;
    });
    // console.log(item);
    this.setState({ myAppointments: apts });
    console.log(this.state.myAppointments);
  }

  addAppointment = item => {
    item.aptId = this.state.lastIndex;
    let tempApts = this.state.myAppointments;
    tempApts.unshift(item);
    this.setState({
      myAppointments: tempApts,
      lastIndex: this.state.lastIndex + 1
    });
  };

  // deleteAppointment = id => {
  // filter way
  // const filteredList = this.state.myAppointments.filter(item => item.aptId !== id);
  // this.setState({ myAppointments: filteredList });
  // };

  deleteAppointment = item => {
    // lodash way
    let tempApts = this.state.myAppointments;
    tempApts = without(tempApts, item);
    this.setState({ myAppointments: tempApts });
  };
  changeOrder = (orderBy, orderDir) => {
    this.setState({ orderBy, orderDir });
  };

  searchAppointments = e => {
    const queryText = e.target.value;
    this.setState({ queryText });
  };

  render() {
    let order;
    let filteredApts = this.state.myAppointments;
    if (this.state.orderDir === 'asc') {
      order = 1;
    } else {
      order = -1;
    }

    filteredApts = filteredApts
      .sort((a, b) => {
        if (
          a[this.state.orderBy].toLowerCase() <
          b[this.state.orderBy].toLowerCase()
        ) {
          return -1 * order;
        } else {
          return 1 * order;
        }
      })
      .filter(item => {
        return (
          item.petName
            .toLowerCase()
            .includes(this.state.queryText.toLowerCase()) ||
          item.aptNotes
            .toLowerCase()
            .includes(this.state.queryText.toLowerCase()) ||
          item.ownerName
            .toLowerCase()
            .includes(this.state.queryText.toLowerCase())
        );
      });

    return (
      <main className='page bg-white' id='petratings'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='container'>
                <AddAppointments addAppointment={this.addAppointment} />
                <SearchAppointments
                  orderBy={this.state.orderBy}
                  orderDir={this.state.orderDir}
                  changeOrder={this.changeOrder}
                  searchAppointments={this.searchAppointments}
                />
                <ListAppointments
                  deleteAppointment={this.deleteAppointment}
                  ListAppointments={filteredApts}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
