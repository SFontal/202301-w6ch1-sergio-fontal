# DATA

## Data Layer

- List of tasks
  - id
  - name
  - isDone

## Data Modifications

- Load tasks
- Toggle isDone task
- Delete tasks

# COMPONENTS

## App

- Shows Header component
- Shows CreateForm
- Shows TasksList component

## Header

- Shows title "To-Do App Redux" in a heading

## CreateForm

- Shows an input to introduce a name of new task
- Shows a submit button that shows "Create task" to create a task
- Sends the name of the new task

## TaskList

- Receives a list of tasks
- Shows a To-Do card component for every task in the list of tasks
- Sends a task to each To-Do card component

## To-Do Card

- Receives a task
- Receives deleteTask action
- Receives toggleTask action
- Shows a To-Do name in a heading
- Shows a button component to delete a task
- Shows a button component to toggle if the task is done or not
- Sends "Delete" to a button component
- Sends deleteTask action to a button component that deletes a task
- Sends "Done" to a button component if the task is not done
- Sends "To do" to a button component if the task is done
- Sends toggleTask action to a button component that change

## Button

- Receives a text
- Receives an action
- Shows the received text inside a button
- On click executes the received action
