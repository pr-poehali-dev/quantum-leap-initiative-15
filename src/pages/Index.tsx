import { useUIStore } from "@/lib/ui-store"
import { PlatformOS } from "@/components/PlatformOS"
import { LandingPage } from "@/components/LandingPage"

export default function HomePage() {
  const { osOpen } = useUIStore()

  return (
    <>
      {!osOpen && <LandingPage />}
      <PlatformOS />
    </>
  )
}
