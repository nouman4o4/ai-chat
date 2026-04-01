"use client"

import Sidebar from "@/components/Sidebar"
import {
  Brain,
  FileText,
  ImageIcon,
  Languages,
  Music,
  Paperclip,
  Search,
  Send,
} from "lucide-react"
import { FormEvent, useEffect, useRef, useState } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import MarkdownRenderer from "@/components/MarkDownRenderer"

const promptActions = [
  { icon: Paperclip, label: "Attach" },
  { icon: Search, label: "Search" },
  { icon: Brain, label: "Reason" },
]

const quickActions = [
  { icon: ImageIcon, label: "Generate Image" },
  { icon: FileText, label: "Summarize Text" },
  { icon: Music, label: "Create Audio" },
  { icon: Languages, label: "Translate" },
]

export default function Chat() {
  const [input, setInput] = useState("")

  const bottomRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  })

  const isLoading = status === "submitted" || status === "streaming"

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!input.trim() || isLoading) return
    sendMessage({ text: input })
    setInput("")
    requestAnimationFrame(() => {
      inputRef.current?.focus()
    })
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [messages])

  // getMEssageText --
  const getMessageText = (message: any) => {
    if (typeof message.content === "string") return message.content

    if (Array.isArray(message.parts)) {
      return message.parts
        .filter((part: any) => part.type === "text")
        .map((part: any) => part.text)
        .join("")
    }

    return ""
  }

  // useEffect --
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const renderInput = (compact?: boolean) => (
    <div
      className={
        compact
          ? "border-t border-b border-white/10 bg-[#0b1220]/90 px-6 py-4 backdrop-blur"
          : "w-full max-w-2xl bg-[#0f172a] border border-white/10 rounded-2xl p-4 shadow-xl"
      }
    >
      <form
        onSubmit={onSubmit}
        className={`${compact ? "" : "mb-4"} flex items-center gap-2`}
      >
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.currentTarget.value)}
          name="prompt"
          placeholder={
            isLoading ? "Nomi is thinking..." : "Ask Nomi anything..."
          }
          readOnly={isLoading}
          className={`flex h-11 w-full rounded-xl border border-white/15 bg-transparent px-4 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-white/30 disabled:opacity-60 ${
            compact ? "h-12" : ""
          }`}
        />

        <button
          type="submit"
          aria-label="Send prompt"
          disabled={!input.trim() || isLoading}
          className={`inline-flex ${
            compact ? "h-12" : "h-11"
          } w-12 items-center justify-center rounded-xl bg-linear-to-r from-cyan-400 to-blue-600 text-black font-semibold shadow-[0_12px_40px_-18px_rgba(34,211,238,0.9)] transition hover:scale-[1.02] hover:shadow-[0_16px_50px_-18px_rgba(59,130,246,0.8)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a] disabled:opacity-50 disabled:hover:scale-100`}
        >
          <Send className="h-4 w-4" />
        </button>
      </form>

      {error && (
        <p className="mb-3 text-sm text-red-400 text-left">
          Something went wrong. Please try again.
        </p>
      )}

      {!compact ? (
        <div className="flex gap-2 flex-wrap">
          {promptActions.map((action) => (
            <button
              key={action.label}
              type="button"
              className="inline-flex h-8 items-center justify-center whitespace-nowrap rounded-xl border border-white/15 bg-transparent px-3 text-sm font-medium transition-colors hover:bg-white/5 disabled:pointer-events-none disabled:opacity-50"
            >
              <action.icon className="w-4 h-4 mr-1" />
              {action.label}
            </button>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  )

  return (
    <div className="flex h-[calc(100vh-70px)] bg-[#0b1220] text-white w-full">
      <Sidebar />

      <div className="flex w-full">
        {messages.length === 0 ? (
          <section className="flex-1 flex flex-col items-center justify-center text-center px-6">
            <div className="w-20 h-20 rounded-full bg-linear-to-br from-cyan-300 via-blue-500 to-indigo-600 shadow-xl mb-6" />

            <h1 className="text-3xl font-semibold mb-6">
              How can Nomi help today?
            </h1>

            {renderInput(false)}

            <div className="flex gap-3 flex-wrap justify-center mt-6">
              {quickActions.map((action) => (
                <button
                  key={action.label}
                  type="button"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0f172a] border border-white/10 hover:bg-[#162033] transition"
                >
                  <action.icon className="w-4 h-4" />
                  {action.label}
                </button>
              ))}
            </div>

            <p className="text-xs text-muted-foreground mt-10">
              Nomi AI may generate incorrect info. Verify important results.
            </p>
          </section>
        ) : (
          <section className="flex-1 flex flex-col">
            <div className="flex-1 overflow-y-auto px-20 py-8 space-y-8">
              {messages.map((message) =>
                message.role === "user" ? (
                  <div key={message.id} className="flex justify-end">
                    <div className="max-w-3xl rounded-2xl border border-white/10 bg-linear-to-br from-cyan-400/10 via-blue-500/10 to-transparent px-4 py-3 shadow shadow-cyan-500/15">
                      <p className="text-white text-left whitespace-pre-wrap">
                        <MarkdownRenderer content={getMessageText(message)} />
                      </p>
                    </div>
                  </div>
                ) : (
                  <div key={message.id} className="flex justify-start w-full ">
                    <div className=" px-4 py-3">
                      <p className="text-white text-left whitespace-pre-wrap">
                        <MarkdownRenderer content={getMessageText(message)} />
                      </p>
                    </div>
                  </div>
                ),
              )}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-3xl px-4 py-3">
                    <p className="text-lg text-zinc-400 text-left animate-pulse">
                      Nomi is thinking...
                    </p>
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {renderInput(true)}

            <p className="text-xs text-center text-muted-foreground my-1">
              Nomi AI may generate incorrect info. Verify important results.
            </p>
          </section>
        )}
      </div>
    </div>
  )
}
