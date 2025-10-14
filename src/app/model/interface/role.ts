export interface APIResponseResult{
    message: string,
    result: boolean,
    data: any
}

export interface IRoles{
    roleId: number,
    role: string
}

export interface IDesignations{
    designationId: number,
    designation: string
}

export interface IEmployee{
    empName: string,
    empId: string,
    empCode: string,
    empEmailId: string,
    empDesignation: string,
    role: string
}