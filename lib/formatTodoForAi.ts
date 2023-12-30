type TypedColumn = string;

const formatTodoForAi = (board: Board) => {
  const flatArray: { [key in TypedColumn]: Todo[] } = {};

  for (const [key, value] of board.columns.entries()) {
    flatArray[key] = value.todos;
  }

  const flatArrayCounted = Object.entries(flatArray).reduce(
    (map, [key, value]) => {
      map[key as TypedColumn] = value.length;
      return map;
    },
    {} as { [key in TypedColumn]: number }
  );

  return flatArrayCounted;
};

export default formatTodoForAi;
