import React from 'react';
import { Company } from 'src/data/company.js'

interface CompanyGridProps {
  companies: Company[];
}

const CompanyGridComponent: React.FC<CompanyGridProps> = ({ companies }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {companies.map((company, index) => (
        <div key={index} className="p-4 border border-gray-300 rounded">
          <h2 className="font-bold">{company.company_name}</h2>
          <p>Number of Employees: {company.num_employees}</p>
          <p>Country: {company.country}</p>
        </div>
      ))}
    </div>
  );
};

export default CompanyGridComponent;
