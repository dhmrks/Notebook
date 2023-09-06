// import { Link } from 'react-router-dom'
// import CreatableReactSelect from 'react-select/creatable'
import { Col, Row, Form, Button, Stack } from 'react-bootstrap'

const NoteForm = () => {

    const handleSumbit = () => {
        console.log('handleSumbit')
    }

    return (
        <Form onSubmit={handleSumbit}>
            <Stack gap={4}>
                <Row>
                    <Col>
                        <Form.Group controlId='title'>
                            <Form.Label>Title</Form.Label>
                            <Form.Control required />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId='Tags'>
                            <Form.Label>Tags</Form.Label>
                            <Form.Control required />
                        </Form.Group>
                    </Col>
                </Row>
            </Stack>
            <Row>
                <Form.Group controlId='markdown'>
                    <Form.Label>Body</Form.Label>
                    <Form.Control required as="textarea" rows={10} />
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