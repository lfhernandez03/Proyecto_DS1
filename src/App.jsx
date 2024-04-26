import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import {Container1, Container2, ContainerEmp} from './Empleados/empleados'
export default function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<ContainerEmp/>}/>
                <Route path="/make-reservation" element={<Container1/>}/>
                <Route path="/search-reservation" element={<Container2/>}/>
            </Routes>
        </BrowserRouter>
    )
}