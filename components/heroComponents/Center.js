import { Button } from "../"
import { useRouter } from "next/router"

const Center = ({ price, title, link }) => {
  const router = useRouter()
  function navigate() {
    router.push(link)
  }
  return (
    <div>
      <p className="text-4xl xl:text-5xl font-bold tracking-widest leading-none">
        {title}
      </p>
      <p className="py-6 tracking-wide">
        A PARTIR DE <span>R${price} /dia</span>
      </p>
      <Button onClick={navigate} title="Alugue agora" />
    </div>
  )
}

export default Center
