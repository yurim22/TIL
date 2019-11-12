import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
	//Fragment는, JSX를 감싸고 싶은데 따로 DOM 엘리먼트를 만들고 싶지 않을 때
	const TodoList = todos.map(todo => (
		<TodoItem
			id={todo.id}
			key={todo.id}
			checked={todo.checked}
			text={todo.text}
		/>
	));
		//배열에 key가 설정되어있다면,
		//배열을 그대로 렌더링 할 수도 있습니다
	return TodoList;
};

export default TodoList;