import { Layout, Row, Col, Typography } from 'antd';

const { Header } = Layout;
const { Title } = Typography;

const Board = () => {
    return (
        <Layout style={{ height: '100vh', backgroundColor: '#1f1f1f' }}>
            <Header style={{ backgroundColor: '#1f1f1f', padding: '0 20px' }}>
                <Row justify="space-between" align="middle">
                    <Col>
                        <Title level={3} style={{ color: 'white', margin: 0 }}>Week 1</Title>
                    </Col>
                    <Col>
                        <span style={{ color: 'white' }}>People Assigned</span>
                    </Col>
                </Row>
            </Header>
        </Layout>
    );
};

export default Board;
