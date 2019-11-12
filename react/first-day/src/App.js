import React, { Component } from 'react';
import './App.css';
import CreateForm from './components/CreateForm';
import TodoList from './components/TodoList';

class App extends Component {

  id = 3

  // state의 초깃값을 설정

  state = {
    todos: [
      {
        id: 0,
        text: '앵귤러 배우고 ',
        checked: true
      },
      {
        id: 1,
        text: '리액트 배우고 ',
        checked: false
      },
      {
        id: 2,
        text: '뷰 배우장 ',
        checked: false
      },
    ]
  };

  handelCreate = text => {
    //데이터 만들고

    const todoData = {
      id: this.id++,
      text,
      checked: false
    };

    //데이터 등록
    this.setState({
      todos: this.state.todos.concat(todoData)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>오늘 뭐할까?</h1>
        </div>
        <CreateForm />
        <div className="white-box" >
          <TodoList todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;

//컴포넌트
//: 재사용가능한 UI