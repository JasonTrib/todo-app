import { v4 as uuidv4 } from 'uuid';

export const initialTodos = [
  { id: uuidv4(), content: 'Do the groceries', done: true },
  { id: uuidv4(), content: 'Walk the dog', done: false },
  { id: uuidv4(), content: 'Water plants', done: true },
  { id: uuidv4(), content: 'Fix leaky pipe', done: false },
  { id: uuidv4(), content: 'Study for exam', done: false },
];
