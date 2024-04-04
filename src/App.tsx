import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, redirect, Navigate } from "react-router-dom";

import Login from "./pages/login/Login";
import Manager from './pages/manager/Main';
import Product from './pages/manager/product/Product';
import ExportGoods from './pages/manager/product/ExportGoods';
import Employee from './pages/manager/employee/Employee';
import Dashboard from './pages/manager/dashboard/Dashboard';
import Transaction from './pages/manager/transaction/Transaction';
import TransactionOut from './pages/manager/transaction/TransactionOut';
import Supplier from './pages/manager/supplier/Supplier';
import Customer from './pages/manager/customer/Customer';
import Promotion from './pages/manager/promotion/Promotion';
import Report from './pages/manager/report/Report';
import Register from './pages/register/Register';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="login/*" element={<Login />} />
          <Route path="register/*" element={<Register />} />
          <Route path="quan-ly/*" element={<Manager />} >
            <Route path="hanghoa/*" element={<Product />} />
            <Route path="nhap-hang/*" element={<ExportGoods />} />
            <Route path="nhanvien/*" element={<Employee />} />
            <Route path="giaodich/nhap/*" element={<Transaction />} />
            <Route path="giaodich/xuat/*" element={<TransactionOut />} />
            <Route path="doitac/*" element={<Customer />} />
            <Route path="khuyenmai/*" element={<Promotion />} />
            <Route path="baocao/*" element={<Report />} />
          </Route>
          <Route path="*" element={
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          } />

        </Routes>
      </div >
    </BrowserRouter >

  );
}

export default App;
