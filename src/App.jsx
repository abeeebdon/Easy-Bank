import { Button } from '../components/ui/button'
import Header from './component/Header'
import Section1 from '../components/Section1'
const App = () => {
  return (
    <main>
      <Header />
      <Section1 />
      <Btncomponent />
      <div>
        <Button>Click me</Button>
      </div>
    </main>
  )
}
export default App
