import { Bell, Mail } from "lucide-react"

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b bg-[#0b1220] border-white/5 text-gray-200">
      <div className="text-lg font-bold  text-muted-foreground">
        Nomi's AI Chat
      </div>

      <div className="flex items-center gap-4">
        <Mail className="w-5 h-5 text-muted-foreground" />
        <Bell className="w-5 h-5 text-muted-foreground" />
        <div className="w-8 h-8 rounded-full bg-linear-to-br from-cyan-400 to-blue-600 flex items-center justify-center ">
          <div className="font-bold">N</div>
        </div>
      </div>
    </header>
  )
}
