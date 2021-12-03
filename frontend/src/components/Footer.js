import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
          Copyright &copy; Illuminate Team <br/>
          Trần Quốc Thắng - 4501104220 <br/>
          Lý Hoàng Long - 4501104129 <br/>
          Đặng Phan Hoàng Sang - 4501104197 <br/>
          Chan Hồng Vỹ - 4501104284 <br/>
          Lê Thị Thanh Huyền - 4501104098
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
