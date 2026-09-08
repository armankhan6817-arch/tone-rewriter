import Anthropic from "@anthropic-ai/sdk";
const client = new Anthropic();

export async function POST(req) {
  const { text, tone } = await req.json();
  const prompt = `Rewrite the following text in a ${tone} tone: and return only the rewritten text without any additional commentary or explanation.\n\n${text} `;
  const response = await client.messages.create({
    model: "claude-haiku-4-5",
    max_tokens: 2048,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });
  return new Response(JSON.stringify({ output: response.content[0].text }), {
    headers: { "Content-Type": "application/json" },
  });
}
