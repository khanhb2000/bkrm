import React, { Component, useEffect, useState } from 'react';
import './component.css'
import { Navigate, Link, Router, Route, Routes, useNavigate, BrowserRouter, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as IconOpen } from '../../icon/btn-openExpand.svg';
import { ReactComponent as IconClose } from '../../icon/btn-closeExpand.svg';

import type { RadioChangeEvent } from 'antd';
import { Input, Radio, Space } from 'antd';

export function FilterBox({title,type}:{title:string,type:string}) {
    const [expand,setExpand]=useState(false);  
    
    useEffect(() => {
  }, []);
  //useSelector, useNavigate

/*<Radio value={4}>
          More...
          {valueTongban === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
        </Radio>*/

  ///////// CHI NHANH ///////////
  const [valueChinhanh, setValueChinhanh] = useState(1);
  const onChangeChinhanh = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValueChinhanh(e.target.value);
  };
  const noidungChinhanh = () => (
    <div className='expand'>
    <Radio.Group onChange={onChangeChinhanh} value={valueChinhanh}>
      <Space direction="vertical">
        <Radio value={1}>Chi nhánh 1</Radio>
        <Radio value={2}>Chi nhánh 2</Radio>
      </Space>
    </Radio.Group>
  </div>
);

///////// TONG BAN ///////////
const [valueTongban, setValueTongban] = useState();
const onChangeTongban = (e: RadioChangeEvent) => {
  console.log('radio checked', e.target.value);
  setValueTongban(e.target.value);
};
const noidungTongban = () => (
  <div className='expand'>
    <Radio.Group onChange={onChangeTongban} value={valueTongban}>
      <Space direction="vertical">
        <Radio value={1}>&lt; 500.000</Radio>
        <Radio value={2}>500.000 - 1.000.000</Radio>
        <Radio value={3}>1.000.000 - 5.000.000</Radio>
        <Radio value={4}>5.000.000 - 10.000.000</Radio>
        <Radio value={5}>&gt; 10.000.000</Radio>
      </Space>
    </Radio.Group>
  </div>
);

///////// SO LUONG ///////////
const [valueSoluong, setValueSoluong] = useState();
const onChangeSoluong = (e: RadioChangeEvent) => {
  console.log('radio checked', e.target.value);
  setValueSoluong(e.target.value);
};
const noidungSoluong = () => (
  <div className='expand'>
    <Radio.Group onChange={onChangeSoluong} value={valueSoluong}>
      <Space direction="vertical">
        <Radio value={1}>&lt; 100</Radio>
        <Radio value={2}>100 - 500</Radio>
        <Radio value={3}>&gt; 500</Radio>
      </Space>
    </Radio.Group>
  </div>
);

///////// GIOI TINH ///////////
const [valueGioitinh, setValueGioitinh] = useState(1);
const onChangeGioitinh = (e: RadioChangeEvent) => {
  console.log('radio checked', e.target.value);
  setValueGioitinh(e.target.value);
};
const noidungGioitinh = () => (
  <div className='expand'>
  <Radio.Group onChange={onChangeGioitinh} value={valueGioitinh}>
    <Space direction="vertical">
      <Radio value={1}>Tất cả</Radio>
      <Radio value={2}>Nam</Radio>
      <Radio value={3}>Nữ</Radio>
    </Space>
  </Radio.Group>
</div>
);

///////// CHUC DANH ///////////
const [valueChucdanh, setValueChucdanh] = useState(1);
const onChangeChucdanh = (e: RadioChangeEvent) => {
  console.log('radio checked', e.target.value);
  setValueChucdanh(e.target.value);
};
const noidungChucdanh = () => (
  <div className='expand'>
  <Radio.Group onChange={onChangeChucdanh} value={valueChucdanh}>
    <Space direction="vertical">
      <Radio value={1}>Tất cả</Radio>
      <Radio value={2}>Quản lý chi nhánh</Radio>
      <Radio value={3}>Quản lý kho</Radio>
      <Radio value={4}>Nhân viên kho</Radio>
    </Space>
  </Radio.Group>
</div>
);

    return (
      <div className='filterBox'>
        <div className='filterBox-title' onClick={()=>setExpand(!expand)}>
        {title}
        {expand?<IconClose />:<IconOpen/>}
        </div>
        {expand && <div className='filterBox-content'>
        {{
          'store': noidungChinhanh(),
          'amount': noidungTongban(),
          'num': noidungSoluong(),
          'gender': noidungGioitinh(),
          'role': noidungChucdanh()
        }[type]}
        </div>
        }
        </div>
    );

}
