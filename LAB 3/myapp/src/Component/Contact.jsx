import { Container, Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <Container className="py-5" id="contact">

      <h2 className="text-center mb-4 fw-bold">
        Get In Touch
      </h2>

      <Form className="w-50 mx-auto shadow p-4 rounded">

        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Your Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="How can I help you?"
          />
        </Form.Group>

        <Button variant="primary" className="w-100">
          Send Message
        </Button>

      </Form>

    </Container>
  );
}

export default Contact;