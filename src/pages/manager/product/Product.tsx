import React, { useEffect, useState } from 'react';
import './styleProduct.css'
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

export default function Product() {
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

  const NavBar0 = () => (
    <header className='navbar'>
      <div className='navbar__title navbar__item'><Logo /></div>
      <div className='navbar__item'><IconTongquan /> Tổng quan</div>
      <div className='navbar__item'><IconHanghoa /> Hàng hóa</div>
      <div className='navbar__item'><IconGiaodich /> Giao dịch</div>
      <div className='navbar__item'><IconDoitac /> Đối tác</div>
      <div className='navbar__item'><IconNV /> Nhân viên</div>
      <div className='navbar__item'><IconKhuyenmai /> Khuyến mãi</div>
      <div className='navbar__item'><IconBaocao /> Báo cáo</div>
      {/*<Account />*/}
      <div className='account-container'>
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M46.757 45.0264C44.1672 40.5264 39.3039 37.5029 33.7492 37.5029L26.2492 37.5029C20.6945 37.5029 15.8312 40.5264 13.2414 45.0264C17.3664 49.6201 23.343 52.5029 29.9992 52.5029C36.6555 52.5029 42.632 49.6084 46.757 45.0264ZM-0.000793458 30.0029C-0.000793457 22.0464 3.15991 14.4158 8.786 8.78973C14.4121 3.16364 22.0427 0.00292969 29.9992 0.00292969C37.9557 0.00292969 45.5863 3.16364 51.2124 8.78973C56.8385 14.4158 59.9992 22.0464 59.9992 30.0029C59.9992 37.9594 56.8385 45.59 51.2124 51.2161C45.5863 56.8422 37.9557 60.0029 29.9992 60.0029C22.0427 60.0029 14.4121 56.8422 8.786 51.2161C3.15991 45.59 -0.000793458 37.9594 -0.000793458 30.0029ZM29.9992 31.8779C32.237 31.8779 34.3831 30.989 35.9654 29.4066C37.5478 27.8243 38.4367 25.6782 38.4367 23.4404C38.4367 21.2027 37.5478 19.0566 35.9654 17.4742C34.3831 15.8919 32.237 15.0029 29.9992 15.0029C27.7614 15.0029 25.6153 15.8919 24.033 17.4742C22.4507 19.0566 21.5617 21.2027 21.5617 23.4404C21.5617 25.6782 22.4507 27.8243 24.033 29.4066C25.6153 30.989 27.7614 31.8779 29.9992 31.8779Z" fill="white" />
    </svg>
    <div className='infor'>
    </div>
    <IconLogout/>
  </div>
    </header>
  );

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
