import { Col, Row } from "react-bootstrap";

function Footer() {
  return (
    <Row>
        <Col>
            <div className='text-center p-4 bg-success-subtle'>
                © 2024 Copyright: Ovidiu Postoiu
            </div>
        </Col>
    </Row>
  );
}

export default Footer;