import React, { Component } from 'react';
import TableRow from './TableRow';
import '../task5/css5/Task5.css';
//import '../taskCSS/Table.css';

class StockList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  tabRow() {
    if (this.props.data instanceof Array) {
      return this.props.data.map(function (object, i) {
        return <TableRow obj={object} key={i} />;
      })
    }
  };

  render() {
    return (
      <div>
        <table className="modelCar">
          <thead>
            <tr>
              <th>ID</th>
              <th>Наименование</th>
            </tr>
          </thead>
          <tbody>
            {this.tabRow()}
          </tbody>
        </table>
      </div>
    );
  }
}
export default StockList;
