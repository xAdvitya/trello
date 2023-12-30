import { NextResponse } from 'next/server';
import openai from '@/openai';

export async function POST(request: Request) {
  const { todos } = await request.json();
  console.log(todos);
  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: `when responding, welcome the user as Advitya , limit the response to 200 chars`,
      },
      {
        role: 'user',
        content: `provide the summary of following todos.count how many todos are in each category such as todo,in progress and done, then tell the user to have a productive day ! here is the data: ${JSON.stringify(
          todos
        )}`,
      },
    ],
  });

  const { choices } = completion;

  console.log(`data is ${choices}`);

  const data = choices[0].message.content;

  return NextResponse.json(data);
}
