import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TasksStructure } from "../../data/types";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: [] as TasksStructure,
  reducers: {
    loadTasks: (
      currentTasks: TasksStructure,
      action: PayloadAction<TasksStructure>
    ) => [...action.payload],
  },
});

export const { loadTasks: loadTasksActionCreator } = tasksSlice.actions;
