import KPIDetail from './KPIDetail';
import AddTask from './AddTask';
import Modal from 'react-modal';

import React from 'react';

class Popup extends React.Component {
  constructor() {
      super();

      this.state = {
          showModal: true
      };

      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
      this.setState({ showModal: true });
  }

  handleCloseModal() {
      this.setState({ showModal: false });
  }

  render() {
      return (
          <div>
              <button onClick={this.handleOpenModal}>Trigger Modal</button>
              <Modal
                  isOpen={this.state.showModal}
                  contentLabel="Minimal Modal Example"
                  onRequestClose={this.handleCloseModal}
              >
                <h2>AddTask</h2>
                <AddTask />
                  <button onClick={this.handleCloseModal}>Close Modal</button>
              </Modal>
          </div>
      );
  }
}

export default KPIDetail;