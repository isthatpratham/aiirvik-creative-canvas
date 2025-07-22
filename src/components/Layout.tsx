import { Outlet } from "react-router-dom"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export function Layout() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}