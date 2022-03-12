import * as React from "react";
import './style.scss';
import { Table, Form, Button, Modal, Input, InputNumber } from "antd";
import { Data, pageStore } from "./store";
import "antd/dist/antd.css";
import { observer } from 'mobx-react';


@observer export default class App extends React.Component {
  componentDidMount() {
    pageStore.loadData();
  }
  render() {
    return (
      <>
        {this.renderTable()}
        {this.renderModal()}
      </>
    )
  }
  renderTable() {
    let columns = [
      {
        title: "姓名",
        dataIndex: "name",
        key: 'name'
      },
      {
        title: "id",
        dataIndex: "id",
        key: 'id'
      },
      {
        title: '操作',
        key: "action",
        render: (recore: Data) => {
          return (
            <Button type="primary" onClick={() => {
              pageStore.currentInfo = recore;
              pageStore.visible = true;
            }}>编辑</Button>
          )
        }
      }
    ];

    return (
      <Table
        key={pageStore.dataSource?.length}
        loading={pageStore.loading}
        rowKey="id"
        pagination={false}
        columns={columns}
        dataSource={pageStore.dataSource?.slice()}
      />
    )
  }
  renderModal() {
    return (
      <Modal
        title="查看"
        visible={pageStore.visible}
        footer={null}
        onCancel={() => pageStore.visible = false}
      >
        <Form
          initialValues={{
            ...pageStore.currentInfo
          }}
        >
          <Form.Item name='name' label="姓名">
            <Input />
          </Form.Item>
          <Form.Item name='id' label="id">
            <InputNumber />
          </Form.Item>
        </Form>
      </Modal>
    )
  }
}