import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, actionCreator } from '../modules';
import TodoComponent, { Todo } from '../components/Todo';

const todosSelector = (state: RootState) => state.todos.todos;

const count = 1;

const TodoContainer = () => {
  const [text, updateText] = useState<string>('');

  const dispatch = useDispatch();

  const changeText = (e: ChangeEvent<HTMLInputElement>) => {
    updateText(e.target.value);
  };

  const addTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text) {
      dispatch(actionCreator.todos.addTodo({ text }));
      updateText('');
    }
  };

  const toggleTodo = (id: number) => {
    dispatch(actionCreator.todos.toggleTodo({ id }));
  };

  const todos: Todo[] = useSelector(todosSelector);

  return (
    <TodoComponent
      count={count}
      todos={todos}
      text={text}
      changeText={changeText}
      addTodo={addTodo}
      toggleTodo={toggleTodo}
    />
  );
};

export default TodoContainer;
