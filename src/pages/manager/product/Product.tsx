import React, { useEffect, useState } from 'react';
import './styleProduct.css'
import { Navigate, Link, Router, Route, Routes, useNavigate, BrowserRouter, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as IconEdit } from '../../../icon/btn-edit.svg'
import { ReactComponent as IconDelete } from '../../../icon/btn-delete.svg'

import { Account } from '../../component/account';
import  NavBar  from '../../component/menubar';
import { FilterBox } from '../../component/filterBox';

import { Button, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import ProductInformationPopupScreen from '../../component/popupEditProduct';
import axios from 'axios';

interface DataType {
  key: React.Key;
  Id: string;
  name: string;
  giavon: string;
  giaban: string;
  slnhap: number;
  tonkho: number;
}
const emptydata:DataType ={
  key: "",
  Id: "",
  name: "",
  giavon: "",
  giaban: "",
  slnhap: 0,
  tonkho: 0,
}
let dataShow:DataType=emptydata;


const data: DataType[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    Id: String(i),
    name: "Sản phẩm "+i,
    giavon: '100.000',
    giaban: '500.000',
    slnhap: 50,
    tonkho: 20,
  });
}

export default function Product() {
  const columns: ColumnsType<DataType> = [
    {
      title: 'Mã sản phẩm',
      dataIndex: 'Id',
    },
    {
      title: 'Tên hàng',
      dataIndex: 'name',
    },
    {
      title: 'Giá vốn',
      dataIndex: 'giavon',
    },
    {
      title: 'Giá bán',
      dataIndex: 'giaban',
    },
    {
      title: 'SL nhập',
      dataIndex: 'slnhap',
    },
    {
      title: 'Tồn kho',
      dataIndex: 'tonkho',
    },
    {
      title: '',
      key: 'action',
      width: '112px',
      render: (_, record) => (
        <Space size="small">
          <Button size={"middle"} onClick={() => { dataShow = data[Number(record.productId)]; setIsChangeInformation(!isChangeInformation) }}><IconEdit /></Button>
          <Button size={"middle"} onClick={() => { console.log("Xóa : " + record.productId) }}><IconDelete /></Button>
        </Space>),
  },
  ];

  const [data, setProducts] = useState([]);

  // const data: DataType[] = []; // Assuming DataType is the type of your data
  useEffect(() => {
  }, []);
  //useSelector, useNavigate

  const [isChangeInformation, setIsChangeInformation] = useState(false);
  const [componentDisabled, setComponentDisabled] = useState<boolean>();

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  return (
    /*
    <React.Fragment>
          <ProductInformationPopupScreen
                    isPopup={isChangeInformation}
                    setPopup={setIsChangeInformation}
                    data={dataShow}
                    componentDisabled={componentDisabled}
                    setComponentDisabled={setComponentDisabled}
                />
*/
    <div className='dashboard-container'>
      <ProductInformationPopupScreen
                    isPopup={isChangeInformation}
                    setPopup={setIsChangeInformation}
                    data={dataShow}
                    componentDisabled={componentDisabled}
                    setComponentDisabled={setComponentDisabled}
                />
      <div className='product-container'>
      <div className='filterField'>
        <FilterBox title={"Chi nhánh"} type={"store"} />
        <FilterBox title={"Tổng bán"} type={"amount"} />
        <FilterBox title={"Số lượng"} type={"num"} />
      </div>
      <div className='product-list'>
        <Button type='primary' onClick={() => {dataShow=emptydata;setIsChangeInformation(!isChangeInformation)}} style={{ backgroundColor: "#465d65" }}>Thêm mới</Button>
      <div style={{ marginBottom: 16 }}>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Đã chọn ${selectedRowKeys.length} sản phẩm` : ''}
        </span>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
    </div>
    </div>
    //</React.Fragment>
  );

}
