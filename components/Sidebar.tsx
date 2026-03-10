import { Home, Compass, FileText, History, Settings } from "lucide-react"

const items = [
  { icon: Home, label: "New Chat" },
  { icon: Compass, label: "Explore" },
  { icon: FileText, label: "Templates" },
  { icon: History, label: "History" },
]

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#070d18] border-r border-white/5 flex flex-col justify-between">
      <div>
        <div className="p-4 text-lg font-semibold">Nomi's AI</div>

        <nav className="space-y-1 px-2">
          {items.map((item, i) => (
            <button
              key={i}
              type="button"
              className="inline-flex h-10 w-full items-center justify-start whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-white disabled:pointer-events-none disabled:opacity-50"
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="p-3 space-y-3">
        <div className="rounded-xl bg-[#0f172a] p-3 text-sm">
          <p className="font-medium">Starter Plan</p>
          <p className="text-muted-foreground text-xs">
            Upgrade for more power
          </p>
          <button
            type="button"
            className="mt-2 inline-flex h-8 w-full items-center justify-center whitespace-nowrap rounded-md bg-white px-3 text-sm font-medium text-black transition-colors hover:bg-white/90 disabled:pointer-events-none disabled:opacity-50"
          >
            Upgrade
          </button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-full items-center justify-start whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-white/5 disabled:pointer-events-none disabled:opacity-50"
        >
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </button>
      </div>
    </aside>
  )
}
