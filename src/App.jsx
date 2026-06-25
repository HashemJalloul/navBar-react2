import './App.css'
import Nav from './components/Nav/Nav'

function App() {

  return (
    <>
      <h1>Vaccination.ng</h1>
      <Nav
        logo={"Vaccination.ng"}
        items={[
          { link: '#', content: 'Home' },
          { link: '#Services', content: 'Services' },
          { link: '#Schedule', content: 'Schedule' },
          { link: '#FeedBack', content: 'FeedBack' },]}
        btn={'Check Status'}
      />
    </>
  )
}

export default App
