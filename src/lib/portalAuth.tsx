import { createContext, useContext, useState, type ReactNode } from 'react'
import { DEMO_PATIENT, type DemoPatient } from '@/data/portal'

interface PortalAuth {
  patient: DemoPatient | null
  login: (dni: string, code: string) => boolean
  logout: () => void
}

const Ctx = createContext<PortalAuth | null>(null)

// Sesión SIMULADA del portal (sin backend). Solo vive en memoria durante la
// navegación de la demo.
export function PortalProvider({ children }: { children: ReactNode }) {
  const [patient, setPatient] = useState<DemoPatient | null>(null)

  function login(dni: string, code: string) {
    if (dni.trim() === DEMO_PATIENT.dni && code.trim().toUpperCase() === DEMO_PATIENT.code) {
      setPatient(DEMO_PATIENT)
      return true
    }
    return false
  }

  function logout() {
    setPatient(null)
  }

  return <Ctx.Provider value={{ patient, login, logout }}>{children}</Ctx.Provider>
}

export function usePortal() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('usePortal debe usarse dentro de <PortalProvider>')
  return ctx
}
