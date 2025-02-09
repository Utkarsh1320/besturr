/* eslint-disable react/prop-types */
import { Layout, Row, Col, Typography, Avatar, Tooltip } from 'antd';
import { Content } from 'antd/es/layout/layout';
import FeatureContainer from './FeatureContainer';

const { Header } = Layout;
const { Title } = Typography;

// Sample user data - In a real app, this would come from props or API
const users = [
    { id: 1, name: 'John Doe', avatar: 'https://xsgames.co/randomusers/avatar.php?g=male' },
    { id: 2, name: 'Sarah Miller', avatar: 'https://xsgames.co/randomusers/avatar.php?g=female' },
    { id: 3, name: 'Mike Ross', avatar: 'https://xsgames.co/randomusers/avatar.php?g=male' },
    { id: 4, name: 'Emma Wilson', avatar: 'https://xsgames.co/randomusers/avatar.php?g=female' },
    { id: 5, name: 'whats Wilson', avatar: 'https://xsgames.co/randomusers/avatar.php?g=female' },
];

/** 
 * Renders a group of user avatars with tooltips.
 */
const RenderUserAvatars = ({ users }) => (
    <Avatar.Group
        maxCount={2}
        maxStyle={{ color: '#fff', backgroundColor: '#333', padding: '1em' }}
    >
        {users.map(({ id, name, avatar }) => (
            <Tooltip key={id} title={name} placement="top" style={{ backgroundColor: "#434343" }}>
                <Avatar src={avatar} style={{ border: '2px solid #1f1f1f' }}>
                    {name.split(' ').map(n => n[0]).join('')}
                </Avatar>
            </Tooltip>
        ))}
    </Avatar.Group>
);

const Board = () => {
    return (
        <Layout style={{ height: '100vh', backgroundColor: '#1f1f1f' }}>
            <Header style={{ backgroundColor: '#1f1f1f', padding: '0 20px' }}>
                <Row justify="space-between" align="middle">
                    <Col>
                        <Title level={3} style={{ color: 'white', margin: 0 }}>Week 1</Title>
                    </Col>
                    <Col>
                        <Row align="middle" gutter={12}>
                            <Col>
                                <span style={{ color: 'white' }}>People Assigned</span>
                            </Col>
                            <Col>
                                <RenderUserAvatars users={users} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Header>
            <Content><FeatureContainer /></Content>
        </Layout>
    );
};

export default Board;
