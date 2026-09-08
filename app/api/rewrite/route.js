import Anthropic from "@anthropic-ai/sdk";
const client = new Anthropic();

export async function POST(req) {
  try {
    const { text, tone } = await req.json();
    if (!text || !text.trim() || !tone) {
      return new Response(
        JSON.stringify({ output: "Missing text or tone in the request." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }
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
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ output: "Failed to get data from anthropic." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
