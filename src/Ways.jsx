import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Inicio from './telas/Inicio';
import VisualizarVagas from './telas/VisualizarVagas'
import CadastroReserva from './telas/CadastroReserva';


const Ways = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/visualizar-vaga/:id" element={<VisualizarVagas />}/>
        <Route path='/cadastro-reserva' element={<CadastroReserva/>} />
      </Routes>
    </Router>
  )
}


export default Ways