import React from 'react';
import News from "./Component//news/news";
import Header from "./Header/Header.jsx";
import Nav from "./Component/nav/nav.jsx";

export default class App extends React.Component {
  state = {
    new_soon: [],
    new_recently: [],
    money: [],
    awards_all: []
  };

  componentDidMount() { //загрузка данных из базы при первой загрузке страницы
    fetch("orders.json")
      .then((response) => response.json()) // конвертируем данные из json формата
      .then((response) => this.setState({ // записываем полученные данные
        new_soon: response.new_soon,
        new_recently: response.new_recently,
        awards_all: response.awards_all,
        money: response.header
      }))
  }

  render() {
    console.log(this.state.awards_all)
    return ( 
      <div >
      <Header awards_all={this.state.awards_all} money={this.state.money}/> 
      <Nav />
      <News new_soon={this.state.new_soon} new_recently={this.state.new_recently}/ >
      </div>
    );
  }
}