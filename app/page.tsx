import { LoginButton } from "@/components/auth/login-button"
import { Button } from "@/components/ui/button"
export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center text-center bg-blue-400">
        <div className="space-y-6">
          <div>
            <h1 className="text-6xl text-white ">Auth</h1>
            <p className="text-white text-xl">A simple authentication service</p>
          </div>
          <div>
           <LoginButton><Button variant={"secondary"} size="lg">Sign in</Button></LoginButton>
          </div>
        </div>
        
    </main>
  )
}
