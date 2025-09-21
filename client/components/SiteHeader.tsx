import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const linkBase =
    "px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground";
  const linkActive = "bg-primary text-primary-foreground";
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="text-xl font-extrabold tracking-tight">KStream</div>
          <nav className="hidden md:flex items-center gap-2">
            <NavLink to="/" end className={({ isActive }) => cn(linkBase, isActive && linkActive)}>
              Inicio
            </NavLink>
            <NavLink to="/explorar" className={({ isActive }) => cn(linkBase, isActive && linkActive)}>
              Explorar
            </NavLink>
            <NavLink to="/lista" className={({ isActive }) => cn(linkBase, isActive && linkActive)}>
              Mi lista
            </NavLink>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="search"
            placeholder="Buscar"
            className="h-9 w-44 rounded-md border bg-background px-3 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring md:w-64"
          />
        </div>
      </div>
    </header>
  );
}
