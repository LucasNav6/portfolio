import * as React from "react"

import { Button } from "@/components/atoms/button"
import { MoonIcon, SunIcon } from "lucide-react"

export function ThemeButton() {
  const [theme, setThemeState] = React.useState<
    "theme-light" | "dark" | "system"
  >("theme-light")

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setThemeState(isDarkMode ? "dark" : "theme-light")
  }, [])

  React.useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    document.documentElement.classList[isDark ? "add" : "remove"]("dark")
  }, [theme])

  return (
    <React.Fragment>
        { theme === "dark" && <Button aria-label="Toogle mode" variant="outline" onClick={() => setThemeState("theme-light")}><SunIcon /></Button>}
        { theme === "theme-light" && <Button aria-label="Toogle mode" variant="outline" onClick={() => setThemeState("dark")}><MoonIcon /></Button>}
    </React.Fragment>
  )
}