import './App.css'
import Leafwriter from '@cwrc/leafwriter'

function App() {
  console.log(Leafwriter)

  const container = document.getElementById('#leaf-writer');
  const editor = new Leafwriter.Leafwriter(container); //it must be an HTML ELEMENT (i.e., a div) 

  editor.init({
    document: {
      xml: '<xml></xml>' // Required (string)},
    }
  });

  return (
    <>
      <div id="leaf-writer"></div>
    </>
  )
}

export default App
