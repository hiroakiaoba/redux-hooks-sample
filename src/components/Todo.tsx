/** @jsx jsx */
import { FC, ChangeEvent, FormEvent } from 'react';
import { jsx, css } from '@emotion/core';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoProps {
  count: number;
  todos: Todo[];
  addTodo: (e: FormEvent<HTMLFormElement>) => void;
  text: string;
  changeText: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Todo: FC<TodoProps> = ({
  count = 0,
  todos = [],
  addTodo,
  text,
  changeText,
}) => {
  return (
    <div>
      <div>counter: {count}</div>
      <form onSubmit={addTodo}>
        <input onChange={changeText} value={text} />
        <button type="submit">Add</button>
      </form>
      <div
        css={css`
          color: skyblue;
        `}
      >
        Todo List:{' '}
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} data-id={todo.id}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
