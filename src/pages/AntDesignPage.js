import React from 'react';
import { MoreOutlined } from '@ant-design/icons';
import { Button, Descriptions, PageHeader, Row, Statistic, Tag, Typography  } from 'antd';

import AntMenu from "../components/AntMenu"

import { useNavigate } from 'react-router-dom';

import "antd/dist/antd.css";

const { Paragraph } = Typography;

const AntDesignPage = () => {

    let navigate = useNavigate();

    return (
        <PageHeader
            title="Ant Design"
            className="site-page-header"
            subTitle="a showcase of Ant Design components"
            onBack={() => window.history.back()}
            tags={[
                <Tag color="green">Dynamic</Tag>,
                <Tag color="blue">Component Based</Tag>,
                <Tag color="red">In Development</Tag>
            ]}
            extra={[
                // <Button key="3">Operation</Button>,
                <Button key="2" type='secondary' onClick={() => navigate("/materialui")}>Material UI</Button>,
                <Button key="1" type="primary" onClick={() => navigate("/")}>
                    Home
                </Button>,
                <AntMenu key="more" />,
            ]}
            style={{backgroundColor: "#D9D9D9"}}
        >
            <br />
            <Descriptions size="small" column={2}>
                <Descriptions.Item label="Created">James Hau</Descriptions.Item>
                <Descriptions.Item label="Remarks">
                    London, United Kingdom
                </Descriptions.Item>
            </Descriptions>
            <br />
            <Row>
                <Statistic title="Status" value="In Development" />
                <Statistic
                    title="Date Created"
                    value="12/07/2022"
                    style={{
                        margin: '0 32px',
                    }}
                />
                <Statistic title="Details" value="Ant Design is the second most used React.js component library." />
            </Row>
        </PageHeader>
    );
}

export default AntDesignPage;