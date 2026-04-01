import { convertToModelMessages, streamText } from "ai"
import { groq } from "@ai-sdk/groq"

export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { messages } = body

    if (!messages || !Array.isArray(messages)) {
      return Response.json(
        { error: "Invalid messages format" },
        { status: 400 },
      )
    }

    const result = streamText({
      model: groq("openai/gpt-oss-20b"),
      messages: await convertToModelMessages(messages),
      system: "You are a helpful AI assistant called Nomi.",
    })

    return result.toUIMessageStreamResponse()
  } catch (error) {
    console.error("Chat API Error:", error)

    return Response.json(
      { error: "Something went wrong while generating response." },
      { status: 500 },
    )
  }
}
// model: groq("openai/gpt-oss-20b"),
