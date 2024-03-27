function calculateTax(basicSalary) {
    const taxRates = [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 15000, 20000, Infinity];
    const taxValues = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.5, 2, 3];
  
    let tax = 0;
  
    for (let i = 10; i > 0 && basicSalary > taxRates[i]; i--) {
      tax += (taxValues[i] * (taxRates[i] - taxRates[i - 1]));
    }
  
    return tax;
}

function calculateNHIFDeductions(basicSalary) {
    const nhifRates = [0, 150, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 15000, Infinity];
    const nhifValues = [0, 150, 300, 400, 500, 600, 750, 900, 1050, 1200, 1350, 1500, 1650, 1800, 1950, 2100, 2250, 2400, 2550, 2700, 3000, 3300, 3600, 3900, 4200, 4500, 7500, 8500];
  
    let nhifDeductions = 0;
  
    for (let i = 1; i < nhifRates.length - 1 && basicSalary > nhifRates[i]; i++) {
      nhifDeductions = nhifValues[i];
    }
  
    return nhifDeductions;
}

function calculateNSSFDeductions(basicSalary) {
    const nssfRate = 0.06;
  
    return basicSalary * nssfRate;
}

function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const tax = calculateTax(grossSalary);
    const nhifDeductions = calculateNHIFDeductions(grossSalary);
    const nssfDeductions = calculateNSSFDeductions(grossSalary);
  
    return grossSalary - tax - nhifDeductions - nssfDeductions;
}

const basicSalary = 5000;
const benefits = 1000;
const netSalary = calculateNetSalary(basicSalary, benefits);

console.log(`The net salary for a basic salary of ${basicSalary} and benefits of ${benefits} is ${netSalary}`);
