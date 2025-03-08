import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

// Test 1: Render Todo List and initial todos
test("renders Todo List with initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Learn Jest")).toBeInTheDocument();
});

// Test 2: Add a new todo
test("can add a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("Add a new todo");
  fireEvent.change(input, { target: { value: "New Todo" } });
  fireEvent.click(screen.getByText("Add"));

  expect(screen.getByText("New Todo")).toBeInTheDocument();
});

// Test 3: Toggle todo completion
test("can toggle todo completion", () => {
  render(<TodoList />);
  const todo = screen.getByText("Learn React");
  fireEvent.click(todo);

  expect(todo).toHaveStyle("text-decoration: line-through");
  fireEvent.click(todo);
  expect(todo).toHaveStyle("text-decoration: none");
});

// Test 4: Delete a todo
test("can delete a todo", () => {
  render(<TodoList />);
  const todo = screen.getByText("Learn React");
  const deleteButton = todo.nextElementSibling; // The delete button next to the todo
  fireEvent.click(deleteButton);

  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
