import React, {
  useState,
  useCallback,
  useEffect,
  ChangeEvent,
  FormEvent,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules/index';
import { addTodo as addTodoAction } from '../modules/todos/AddTodo';
import TodoComponent, { Todo } from '../components/Todo';

const todosSelector = (state: RootState) => state.todos;

const count = 1;

const TodoContainer = () => {
  const [text, updateText] = useState<string>('');

  const dispatch = useDispatch();

  const changeText = (e: ChangeEvent<HTMLInputElement>) => {
    updateText(e.target.value);
  };

  const addTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodoAction({ text }));
    updateText('');
  };

  const { todos }: { todos: Todo[] } = useSelector(todosSelector);

  return (
    <TodoComponent
      count={count}
      todos={todos}
      text={text}
      changeText={changeText}
      addTodo={addTodo}
    />
  );
};

export default TodoContainer;
