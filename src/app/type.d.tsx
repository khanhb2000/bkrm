export type LoginState = {
  "message": string | null,
  "isSuccess": boolean,
  "errors": {/*
          "Password": string[]|null;
          UserName: string[]|null;
          AccountInformation: string[]|null;
          ConfirmPassword:string[]|null;*/
  } | string[] | null,
  "token": string | undefined,
  "userInformation"?: null, //UserInformationLoginState |
  "customerInformation"?: null, //CustomerInformationLoginState |
  "role": null, //RoleState |
  "permission"?: undefined | string[] | null,
  "errorServer"?: string

};
/*
export type UserInformationLoginState = {
  "id": string,
  "name": string | null,
  "citizenId": string | null,
  "userName": string | null,
  "normalizedUserName": string,
  "email": string | null,
  "normalizedEmail": string | null,
  "emailConfirmed": boolean,
  "phoneNumber": string | null,
  "phoneNumberConfirmed": boolean,
  "twoFactorEnabled": boolean,
  "lockoutEnd": string | null,
  "lockoutEnabled": boolean,
  "isBlocked": boolean,
  "salesManager": {} | null,
  "customers": [],
  "roles": RoleState[],
};

export type MenuState = {
  "isOpen": boolean,
  "userRole": RoleState,
};*/

export type ProductState = {
  productId: string;
  productName: string;
  giavon: string;
  giaban: string;
  slnhap: number;
  tonkho: number;
};

export type ProductListState = ProductState[];

export type EmployeeState = {
  empId: string;
  empName: string;
  phone: string;
  gender: string;
  chinhanh: string;
  chucdanh: string;
};

export type EmployeeListState = EmployeeState[];

export type CustomerState = {
  cusId: string;
  cusName: string;
  phone: string;
  gender: string;
  email: string;
  tongchitieu: string;
};

export type CustomerListState = CustomerState[];
