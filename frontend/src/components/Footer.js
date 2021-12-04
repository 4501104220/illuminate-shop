import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const Footer = () => {
    return (
        <footer style={{'backgroundColor':'#1a84b1', 'color':'#ffffff'}}>
            <Container>
                <Col>
                    <Col className='text-center xs="2"' style={{'fontSize':30}}>
                        Nhóm Illuminate
                    </Col>
                    <Row style={{height: "120px"}} className="align-items-center">
                        <Col></Col>
                        <Col xs="auto" lg="auto" md="auto">
                            Trần Quốc Thắng - 4501104220 <br/>
                            Lý Hoàng Long - 4501104129 <br/>
                            Đặng Phan Hoàng Sang - 4501104197 <br/>
                            Chan Hồng Vỹ - 4501104284 <br/>
                            Lê Thị Thanh Huyền - 4501104098 <br/>
                        </Col> <Col></Col>
                    </Row>
                </Col>
            </Container>
        </footer>
    )
}

export default Footer
