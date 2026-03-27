import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Projects() {
  return (
    <Container className="py-5" id="projects">

      <h2 className="text-center mb-5 fw-bold">
        My Recent Work
      </h2>

      <Row>

        <Col lg={4} md={6} className="mb-4">
          <Card className="shadow-sm h-100">
            <Card.Img
              variant="top"
              src="https://picsum.photos/400/200?1"
            />

            <Card.Body>
              <Card.Title>E-Commerce Platform</Card.Title>
              <Card.Text>
                A full-featured store with payment gateway
                and admin dashboard.
              </Card.Text>

              <Button variant="link">
                View Project Details →
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} className="mb-4">
          <Card className="shadow-sm h-100">
            <Card.Img
              variant="top"
              src="https://picsum.photos/400/200?2"
            />

            <Card.Body>
              <Card.Title>Task Management Tool</Card.Title>
              <Card.Text>
                Productivity application with drag and drop
                task management.
              </Card.Text>

              <Button variant="link">
                View Project Details →
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} className="mb-4">
          <Card className="shadow-sm h-100">
            <Card.Img
              variant="top"
              src="https://picsum.photos/400/200?3"
            />

            <Card.Body>
              <Card.Title>Weather Dashboard</Card.Title>
              <Card.Text>
                Weather forecasting application using
                real-time API integration.
              </Card.Text>

              <Button variant="link">
                View Project Details →
              </Button>
            </Card.Body>
          </Card>
        </Col>

      </Row>

    </Container>
  );
}

export default Projects;