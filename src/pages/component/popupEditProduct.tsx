import { useDispatch, useSelector } from "react-redux";
//import './popupscreen.css'
import { Button, Checkbox, Col, Form, Input, Modal, Row, Upload, message } from "antd";
import React, { FormEvent, useEffect, useState } from "react";

import { Rule } from 'antd/lib/form';

import { PlusOutlined } from "@ant-design/icons";
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { useParams } from "react-router-dom";
//import axios from "axios";

interface DataType {
    key: React.Key;
    Id: string;
    name: string;
    giavon: string;
    giaban: string;
    slnhap: number;
    tonkho: number;
  };

export default function ProductInformationPopupScreen({ isPopup, setPopup, data, componentDisabled, setComponentDisabled }: { isPopup?: boolean, setPopup?: any, data?: DataType, componentDisabled?: boolean, setComponentDisabled?: any }) {
    const { id } = useParams();
    // watch value in form
    const [form] = Form.useForm();
    const [checkForm] = Form.useForm();
    const formData = new FormData();
    //const [componentDisabled, setComponentDisabled] = useState(data?.isBlocked );
    //var componentDisabled = data?.isBlocked ?? false;
    //get data
    //const data = cookies.get("token")?.information

    const handleCancel = () => {
        form.resetFields();
        checkForm.resetFields();
        setPopup(false);
    }

    

    const handleOk = () => {
        
        form
            .validateFields()
            .then((values) => {
                console.log(values);
            })
    }

    return (
        <Modal
            title="Thông tin"
            open={isPopup}
            onCancel={handleCancel}
            footer={[
                <Button onClick={handleCancel} type="default" key="back">
                    Huỷ
                </Button>,
                <Button onClick={handleOk} type="primary" htmlType="submit" key="submit">
                    Lưu
                </Button>
            ]}
        >
            <Form
                form={form}
                disabled={componentDisabled}
            >
                <Row>
                    <Col span={24}>
                        <Form.Item
                            label="Tên"
                            name="name"
                            rules={[{ required: true, message: 'Please input your name!' }]}
                            initialValue={data?.name}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            label="Tồn"
                            name="tonkho"
                            //rules={[{ required: true, message: 'Please input your phone number!' }]}
                            initialValue={data?.tonkho}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            label="SL nhập"
                            name="slnhap"
                            //rules={[{ required: true, message: 'Please input your phone number!' }]}
                            initialValue={data?.slnhap}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Form.Item
                            label="Giá vốn"
                            name="giavon"
                            //rules={[{ required: true, message: 'Please input your email!' }]}
                            initialValue={data?.giavon}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            label="Giá bán"
                            name="giaban"
                            //rules={[{ required: true, message: 'Please input this!' }]}
                            initialValue={data?.giaban}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Modal >
    )
}