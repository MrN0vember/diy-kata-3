const getEmployerRole = (employeeName, employees) => {
    const employee = employees.filter(employee => employee.name === employeeName)
    const roleInCompany = employee[0];
   return roleInCompany.role;
   
};


module.exports = getEmployerRole;
