export const isAuthenticated = (): boolean => {
  if (typeof window === "undefined") return false

  const token = localStorage.getItem("token")
  return !!token
}

// Get authentication token
export const getToken = (): string | null => {
  if (typeof window === "undefined") return null

  return localStorage.getItem("token")
}

// Logout user
export const logout = (): void => {
  if (typeof window === "undefined") return

  localStorage.removeItem("token")
  window.location.href = "/auth/login"
}

// Get remembered email (if any)
export const getRememberedEmail = (): string | null => {
  if (typeof window === "undefined") return null

  return localStorage.getItem("rememberedEmail")
}

