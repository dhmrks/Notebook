import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'react-bootstrap'
import { Route, Routes, Navigate } from 'react-router-dom'

import Home from './components/Home'
import Note from './components/Note'
import NewNote from './components/NewNote'
import EditNote from './components/EditNote'

const App = () => {

    return (
        <Container className="my-4">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new" element={<NewNote />} />
                <Route path="/:id">
                    <Route index element={<Note />} />
                    <Route path="edit" element={<EditNote />} />
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Container>
    )
}

export default App