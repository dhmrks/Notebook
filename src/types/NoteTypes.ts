type RawNotes = {
     id: string
} & RawNoteData

type RawNoteData = {
    title: string,
    markdown: string,
    tagIds: string[]
}

type Note = {
    id: string
} & NoteData

type Tag = {
    id: string,
    label: string
}

type CreatableTag = {
    value: string,
    label: string
}

type NoteData = {
    title: string,
    markdown: string,
    tags: Tag[]
}

type NoteFormProps = {
    onSubmit: (data: NoteData) => void
}

type NewNotesProps = {
    onSubmit: (data: NoteData ) => void
}

export type {
    Tag,
    Note,
    NoteData,
    RawNotes,
    RawNoteData,
    CreatableTag,
    NoteFormProps,
    NewNotesProps
}