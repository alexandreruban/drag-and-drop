const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out garbage" },
    "task-2": { id: "task-2", content: "Watch favourite show" },
    "task-3": { id: "task-3", content: "Charge phone" },
    "task-4": { id: "task-4", content: "Cook dinner" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    }
  },
  // Facilitate reordering of columns
  columnOrder: ["column-1"]
}

export default initialData;

// Example of a result when you drop :
//
// const result = {
//   draggableId: "task-1",
//   type: "TYPE",
//   reason: "DROP",
//   source: {
//     droppableId: "column-1",
//     index: 0,
//   },
//   destination: {
//     droppableId: "column-1",
//     index: 1,
//   },
// }
// The destination can be null when the use drops outsite of a list

// Example of values used in callbacks onDragStart, onDragUpdate, onDragEnd
//
// onDragStart
// const start = {
//   draggableId: "task-1",
//   type: "TYPE",
//   source: {
//     droppableId: "column-1",
//     index: 0,
//   }
// }
//
// onDragUpdate
// const update = {
//   ...start,
//   destination: {
//     droppableId: "column-1",
//     index: 1,
//   }
// }
//
// onDragEnd
// const result = {
//   ...update,
//   reason: "DROP"
// }

// Example of snapshots for draggable and droppable items
//
// Draggable
// const draggableSnapshot = {
//   isDragging: true,
//   draggingOver: "column-1",
// }
//
// Drappable
// const droppableSnapshot = {
//   isDraggingOver: true,
//   draggingOverWith: "task-1",
// }
