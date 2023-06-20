import DarkModeSwitcher from "./components/DarkModeSwitcher"
import Logo from "./components/Logo"

export default function NavBar() {
  return (
    <div className="flex flex-wrap items-center justify-between mx-auto p-4">
      <Logo />
      <DarkModeSwitcher />
    </div>
  )
}
