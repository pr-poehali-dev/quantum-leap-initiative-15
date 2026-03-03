import { create } from "zustand"

type Role = "student" | "parent" | "teacher" | "admin" | null
type AppType = "dashboard" | "courses" | "catalog" | "analytics" | "chat" | "profile" | "admin" | null

interface UIState {
  role: Role
  osOpen: boolean
  activeApp: AppType
  setRole: (role: Role) => void
  openOS: (app?: AppType) => void
  closeOS: () => void
  setActiveApp: (app: AppType) => void
  logout: () => void
}

export const useUIStore = create<UIState>((set) => ({
  role: null,
  osOpen: false,
  activeApp: null,
  setRole: (role) => set({ role, osOpen: true, activeApp: "dashboard" }),
  openOS: (app = null) => set({ osOpen: true, activeApp: app }),
  closeOS: () => set({ osOpen: false, activeApp: null }),
  setActiveApp: (app) => set({ activeApp: app }),
  logout: () => set({ role: null, osOpen: false, activeApp: null }),
}))
