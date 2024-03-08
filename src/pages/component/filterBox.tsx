import React, { useState } from 'react';
import { Radio, RadioChangeEvent, Space } from 'antd';
import { ReactComponent as IconOpen } from '../../icon/btn-openExpand.svg';
import { ReactComponent as IconClose } from '../../icon/btn-closeExpand.svg';
import { data } from '../component/data.js'

export function FilterBox({ title, type }: { title: string, type: string }) {
    const [expand, setExpand] = useState(false);

    const [valueChinhanh, setValueChinhanh] = useState(1); // state cho valueChinhanh
    const [valueTongban, setValueTongban] = useState(1); // state cho valueTongban
    const [valueGioitinh, setValueGioitinh] = useState(1); // state cho valueTongban
    const [valueChucdanh, setValueChucdanh] = useState(1); // state cho valueTongban
    const [valueSoluong, setValueSoluong] = useState(1); // state cho valueTongban
    
    const handleToggleExpand = () => {
        setExpand(!expand);
    };

    const handleChangeChinhanh = (e: RadioChangeEvent) => {
      const selectedValue = e.target.value;
      setValueChinhanh(selectedValue); // Cập nhật giá trị state
  
      let filteredData = [];
  
      switch (selectedValue) {
          case 1:
              filteredData = data.filter((item: { branch: string; }) => item.branch === 'Chi nhánh 1');
              break;
          case 2:
              filteredData = data.filter((item: { branch: string; }) => item.branch === 'Chi nhánh 2');
              break;
          default:
              filteredData = data;
              break;
      }
      // Sửa thêm case theo chi nhánh được mở rộng nha
    };
    const handleChangeSoluong = (e: RadioChangeEvent) => {
      const selectedValue = e.target.value;
      setValueSoluong(selectedValue); // Cập nhật giá trị state
  
      let filteredData = [];
  
      switch (selectedValue) {
          case 1:
              filteredData = data.filter((item: { num: number; }) => item.num < 100);
              break;
          case 2:
              filteredData = data.filter((item: { num: number; }) => item.num >= 100 && item.num <=500 );
              break;
          case 3:
              filteredData = data.filter((item: { num: number; }) => item.num > 500);
              break;
          default:
              filteredData = data;
              break;
      }
      // Sửa thêm case theo số lượng
    };
    const handleChangeChucdanh = (e: RadioChangeEvent) => {
      const selectedValue = e.target.value;
      setValueChucdanh(selectedValue); // Cập nhật giá trị state
  
      let filteredData = [];
  
      switch (selectedValue) {
          case 1:
              filteredData = data.filter((item: { branch: string; }) => item.branch === 'Chi nhánh 1');
              break;
          case 2:
              filteredData = data.filter((item: { branch: string; }) => item.branch === 'Chi nhánh 2');
              break;
          default:
              filteredData = data;
              break;
      }
      // Sửa thêm case theo chức danh
    };
    const handleChangeGioitinh = (e: RadioChangeEvent) => {
      const selectedValue = e.target.value;
      setValueGioitinh(selectedValue); // Cập nhật giá trị state
  
      let filteredData = [];
  
      switch (selectedValue) {
          case 1:
              filteredData = data.filter((item: { branch: string; }) => item.branch === 'Chi nhánh 1');
              break;
          case 2:
              filteredData = data.filter((item: { branch: string; }) => item.branch === 'Chi nhánh 2');
              break;
          default:
              filteredData = data;
              break;
      }
    };
    const handleChangeTongban = (e: RadioChangeEvent) => {
      const selectedValue = e.target.value;
      setValueTongban(selectedValue); // Cập nhật giá trị state
  
      let filteredData = [];
  
      switch (selectedValue) {
        case 1:
            filteredData = data.filter((item: { totalSales: number }) => item.totalSales < 500000);
            break;
        case 2:
            filteredData = data.filter((item: { totalSales: number }) => item.totalSales >= 500000 && item.totalSales < 1000000);
            break;
        case 3:
            filteredData = data.filter((item: { totalSales: number }) => item.totalSales >= 1000000 && item.totalSales < 5000000);
            break;
        case 4:
            filteredData = data.filter((item: { totalSales: number }) => item.totalSales >= 5000000 && item.totalSales < 10000000);
            break;
        case 5:
            filteredData = data.filter((item: { totalSales: number }) => item.totalSales >= 10000000);
            break;
        default:
            filteredData = data;
            break;
    }
      // Sửa thêm case theo tổng bán expand
    };

    const renderFilterContent = () => {
        switch (type) {
            case 'store':
                return (
                    <div className='expand'>
                        <Radio.Group onChange={handleChangeChinhanh} value={valueChinhanh}>
                            <Space direction="vertical">
                                <Radio value={1}>Chi nhánh 1</Radio>
                                <Radio value={2}>Chi nhánh 2</Radio>
                            </Space>
                        </Radio.Group>
                    </div>
                );
            case 'amount':
                return (
                    <div className='expand'>
                        <Radio.Group onChange={handleChangeTongban} value={valueTongban}>
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
            case 'num':
                return (
                    <div className='expand'>
                        <Radio.Group onChange={handleChangeSoluong} value={valueSoluong}>
                            <Space direction="vertical">
                                <Radio value={1}>&lt; 100</Radio>
                                <Radio value={2}>100 - 500</Radio>
                                <Radio value={3}>&gt; 500</Radio>
                            </Space>
                        </Radio.Group>
                    </div>
                );
            case 'gender':
                return (
                    <div className='expand'>
                        <Radio.Group onChange={handleChangeGioitinh} value={valueGioitinh}>
                            <Space direction="vertical">
                                <Radio value={1}>Tất cả</Radio>
                                <Radio value={2}>Nam</Radio>
                                <Radio value={3}>Nữ</Radio>
                            </Space>
                        </Radio.Group>
                    </div>
                );
            case 'role':
                return (
                    <div className='expand'>
                        <Radio.Group onChange={handleChangeChucdanh} value={valueChucdanh}>
                            <Space direction="vertical">
                                <Radio value={1}>Tất cả</Radio>
                                <Radio value={2}>Quản lý chi nhánh</Radio>
                                <Radio value={3}>Quản lý kho</Radio>
                                <Radio value={4}>Nhân viên kho</Radio>
                            </Space>
                        </Radio.Group>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className='filterBox'>
            <div className='filterBox-title' onClick={handleToggleExpand}>
                {title}
                {expand ? <IconClose /> : <IconOpen />}
            </div>
            {expand && <div className='filterBox-content'>{renderFilterContent()}</div>}
        </div>
    );
};
