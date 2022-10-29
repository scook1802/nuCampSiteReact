import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col xs={{ size: 4, offset: 1 }} sm='2'>
                        <h5>this will be site navigation!</h5>
                    </Col>
                    <Col xs='6' sm='3' className='text-center'>
                        <a role='button' className='btn btn-link' href='tel:+12065551234'>
                            <i className='fa fa-phone' /> 1-206-555-1234
                        </a>
                        <br />
                        <a role='button'className='btn btn-link' href='mailto:notreal@notreal.co'>
                            <i className='fa fa-envelope-o' /> campsites@nucamp.co
                        </a>
                    </Col>
                    <Col sm='4' className='text-center'>
                        <a role='button' className='btn btn-link' href='tel:+12065551234'>
                            <i className='fa fa-phone' /> 1-206-555-1234
                        </a>
                        <br />
                        <a role='button' className='btn btn-link' href='mailto:notreal@notreal.co'>
                            <i className='fa fa-envelope-o' /> campsites@nucamp.co
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;