import React, { useState } from 'react';
import { Table, Divider, Space, Input, Button } from 'antd';
import data from './data';
import Highlighter from 'react-highlight-words';
import { SearchOutlined, DeleteOutlined } from '@ant-design/icons';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        render: (text) => <a style={{ fontSize: "15px", color: "black", fontFamily: "bold" }}>{text}</a>,
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {


            return (
                <>

                    <div style={{ padding: 8 }}>
                        <Input

                            placeholder="Search Here"
                            value={selectedKeys[0]}
                            onChange={e => {
                                setSelectedKeys(e.target.value ? [e.target.value] : []);
                                // confirm({closeDropdown:false})
                            }}
                            onPressEnter={() => { confirm() }}
                            style={{ marginBottom: 8, display: 'block' }}
                        />
                        <Space>
                            <Button
                                type="primary"
                                onClick={() => { confirm() }}
                                icon={<SearchOutlined />}
                                size="small"
                                style={{ width: 90 }}
                            >
                                Search
                            </Button>
                            <Button
                                type='danger'
                                onClick={() => clearFilters()}
                                icon={<DeleteOutlined />}
                                size="small"
                                style={{ width: 90 }}>
                                Reset
                            </Button>
                        </Space>
                    </div>

                </>
            )
        },
        filterIcon: () => {
            return <SearchOutlined style={{ fontSize: "15px" }} />
        },

        onFilter: (value, record) => {
            return record.name.toLowerCase().includes(value.toLowerCase())
        },
    },
    {
        title: 'Age',
        dataIndex: 'age',
        render: (text) => <a>{text} Year</a>,
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];
const Tablecomponent = () => {
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1> Ant Design Table</h1>
            </div>
            <div>

                <Divider />
                <Table
                    columns={columns}
                    dataSource={data}
                />
            </div>
        </>

    );
};
export default Tablecomponent;