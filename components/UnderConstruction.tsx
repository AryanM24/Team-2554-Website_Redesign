import { Construction } from "lucide-react"

interface UnderConstructionProps {
  title?: string
  message?: string
}

export default function UnderConstruction({
  title = "Under Construction",
  message = "The operations programming team will bring you this page soon!",
}: UnderConstructionProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-800 text-white ">
      <Construction className="w-16 h-16 mb-4 text-yellow-400" />
      <h1 className="text-3xl font-bold mb-2 text-center">{title}</h1>
      <p className="text-lg text-center max-w-md">{message}</p>
    </div>
  )
}

