import { FC, FormEvent, useMemo, useRef, useState } from 'react'

import CreatableReactSelect from 'react-select/creatable'
import { Col, Row, Form, Button, Stack } from 'react-bootstrap'

import { Tag, CreatableTag, NoteFormProps } from '../types/NoteTypes'

const NoteForm: FC<NoteFormProps> = ({ onSubmit }) => {
    const [selectedTags, setSelectedTags] = useState<Tag[]>([])
    const titleRef = useRef<HTMLInputElement>(null)
    const markdownRef = useRef<HTMLTextAreaElement>(null)

    const displayedTags = useMemo(() => {
        return selectedTags.map(tag => { 
            return { label: tag.label, value: tag.id }
        })
    }, [selectedTags])

    const handleChangeTags = (tags: CreatableTag[] ) => {
        const temp = tags.map(tag => {
            return { label: tag.label, id: tag.value }
        })

        setSelectedTags(temp)
    }

    const handleSumbit = (e: FormEvent) => {
        e.preventDefault()

        onSubmit({
            title: titleRef.current!.value,
            markdown: markdownRef.current!.value,
            tags: []
        })
    }

    return (
        <Form onSubmit={handleSumbit}>
            <Stack gap={4}>
                <Row>
                    <Col>
                        <Form.Group controlId='title'>
                            <Form.Label>Title</Form.Label>
                            <Form.Control ref={titleRef} required />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId='Tags'>
                            <Form.Label>Tags</Form.Label>
                            <CreatableReactSelect 
                                isMulti
                                value={displayedTags} 
                                onChange={() => handleChangeTags}
                             />
                        </Form.Group>
                    </Col>
                </Row>
            </Stack>
            <Row>
                <Form.Group controlId='markdown'>
                    <Form.Label>Body</Form.Label>
                    <Form.Control ref={markdownRef} as="textarea" rows={10} required />
                </Form.Group>
            </Row>
            <Stack direction='horizontal' gap={2} className="justify-content-end mt-2">
                <Button type="submit" variant="primary" size="sm">Save</Button>
                <Button type="button" variant="outline-secondary" size="sm">Cancel</Button>
            </Stack>
        </Form>
    )
}

export default NoteForm