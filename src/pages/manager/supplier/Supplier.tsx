import React, { useEffect, useState } from 'react';
import './styleSupplier.css'
import { Navigate, Link, Router, Route, Routes, useNavigate, BrowserRouter, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as Logo } from '../../../icon/appLogo.svg'
import { ReactComponent as IconTongquan } from '../../../icon/menu-tongquan.svg'
import { ReactComponent as IconHanghoa } from '../../../icon/menu-hanghoa.svg'
import { ReactComponent as IconGiaodich } from '../../../icon/menu-giaodich.svg'
import { ReactComponent as IconDoitac } from '../../../icon/menu-doitac.svg'
import { ReactComponent as IconNV } from '../../../icon/menu-nhanvien.svg'
import { ReactComponent as IconKhuyenmai } from '../../../icon/menu-khuyenmai.svg'
import { ReactComponent as IconBaocao } from '../../../icon/menu-baocao.svg'
import { ReactComponent as IconLogout } from '../../../icon/logout.svg'

import { Account } from '../../component/account';
import  NavBar  from '../../component/menubar';
import { FilterBox } from '../../component/filterBox';

import { Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import ProductInformationPopupScreen from '../../component/popupEditProduct';

interface DataType {
  key: React.Key;
  productId: string;
  productName: string;
  giavon: string;
  giaban: string;
  slnhap: number;
  tonkho: number;
}
const emptydata:DataType ={
  key: "",
  productId: "",
  productName: "",
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
    productId: String(i),
    productName: "Sản phẩm "+i,
    giavon: '100.000',
    giaban: '500.000',
    slnhap: 50,
    tonkho: 20,
  });
}

export default function Supplier() {
  const columns: ColumnsType<DataType> = [
    {
      title: 'Mã sản phẩm',
      dataIndex: 'productId',
    },
    {
      title: 'Tên hàng',
      dataIndex: 'productName',
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
              <Button size={"middle"} onClick={() => {dataShow=data[Number(record.productId)];setIsChangeInformation(!isChangeInformation)}}>Sửa</Button>
      ),
  },
  ];

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
        Lọc danh sách
      </div>
      <div className='product-list'>
        Nội dung Nhà cung cấp
            </div>
    </div>
    </div>
  );

}
