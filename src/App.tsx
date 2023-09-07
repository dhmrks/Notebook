import { useMemo } from 'react'

import { v4 as uuidV4} from 'uuid'
import { Container } from 'react-bootstrap'
import { Route, Routes, Navigate } from 'react-router-dom'

import Home from './components/Home'
import Note from './components/Note'
import NewNote from './components/NewNote'
import EditNote from './components/EditNote'
import useLocalStorage from './hooks/useLocalStorage'
import { Tag, RawNotes, NoteData } from './types/NoteTypes'

import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
    const [notes, setNotes] = useLocalStorage<RawNotes[]>("NOTES", [])
    const [tags, setTags] = useLocalStorage<Tag[] >("NOTES", [])

    const notesWithTags = useMemo(() => {
        return notes.map(note => {
            return { ...note, tags: tags.filter(tag => note.tagIds.includes(tag.id)) }
        })
    }, [notes, tags])

    const onCreateNote = ({ tags, ...data}: NoteData) => {
        setNotes(prevNotes => {
            return [
                ...prevNotes,
                { ...data, id: uuidV4(), tagIds: tags.map(tag => tag.id) }
            ]
        })
    }

    return (
        <Container className="my-4">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new" element={<NewNote onSubmit={onCreateNote} />} />
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