import { Counter } from "../components/Counter"
import { Header } from "../components/Header"

export const HomePage = () => {
  return (
    <main>
      <Header heading={"Word Counter"} subheading={"Free online character and word counter"} />
      <Counter />
    </main>
  )
}
