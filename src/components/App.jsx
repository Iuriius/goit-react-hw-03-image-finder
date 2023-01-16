import React, { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  render() {
    return (
      <>
        <div>
          <Toaster />
        </div>
        <div>HELLO</div>
      </>
    );
  }
}
