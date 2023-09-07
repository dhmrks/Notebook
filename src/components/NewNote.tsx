import NoteForm from './NoteForm'

import { NewNotesProps } from '../types/NoteTypes'

const NewNote = ({ onSubmit }: NewNotesProps) => {
    
    return (
        <>
            <div className="mb-4">NewNote</div>
            <NoteForm onSubmit={onSubmit}/>
        </>
    )
}

export default NewNote