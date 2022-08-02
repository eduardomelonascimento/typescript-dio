/* 
   Como podemos rodar isso em um arquivo .ts sem causar erros? 

   let employee = {};
   employee.code = 10;
   employee.name = "John";
*/

type employee = {
  name: string;
  code: number;
};

let techLead: employee = {
  name: "Eduardo",
  code: 865211,
};
