import formatTodoForAi from './formatTodoForAi';

const fetchSuggestion = async (board: Board) => {
  const todos = formatTodoForAi(board);
  console.log('formated todos >> ', todos);
  // const res = await fetch('/api/generateSummary', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ todos }),
  // });

  // const GPTdata = await res.json();
  const GPTdata = { content: 'mock line chat result' };
  const { content } = GPTdata;

  return content;
};

export default fetchSuggestion;
