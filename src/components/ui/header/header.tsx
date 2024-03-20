import { Cpu } from 'lucide-react'

const Header = () => {
  return (
    <header className="w-full h-fit p-4 bg-bluePrimary lg:rounded-md flex items-center gap-4 justify-center lg:justify-end">
      <Cpu size={32} color="#749fbc" />
      <h1 className="text-right text-lg lg:text-2xl font-bold text-white">
        PIERCE TECHNOLOGY CHALLENGE
      </h1>
    </header>
  )
}

export default Header
