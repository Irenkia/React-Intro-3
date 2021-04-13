import React, { Component } from 'react';
import StockList from './StockList.js';
import UserList from './UserList.js';
import Hoc from './HOC.js';

const StocksData = [
  {
    id: 1,
    name: 'Информация'
  },
  {
    id: 2,
    name: 'Покупка'
  },
  {
    id: 3,
    name: 'Продажа'
  }
];
const UsersData = [
  {
    id: 1,
    name: 'Банк ВТБ'
  },
  {
    id: 2,
    name: 'Сбер Банк'
  },
  {
    id: 3,
    name: 'Тинькофф Банк'
  }
];

const Stocks = Hoc(
  StockList,
  StocksData
);

const Users = Hoc(
  UserList,
  UsersData
);

class DataTask9 extends Component {

  render() {
    return (
      <div>
        <Users></Users>
        <Stocks></Stocks>
      </div>
    )
  }
}

export default DataTask9;

