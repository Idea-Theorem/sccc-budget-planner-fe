import React, { useState } from "react";
import "./index.scss";
import ArrowDown from "../../assets/svgs/svgFiles/ArrowDwon";

interface DataRow {
  label: string;
  projection: string;
  midYear: string;
  yearEnd: string;
  subItems?: DataRow[];
}

const NestedTable = () => {
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const handleIconClick = (index: number) => {
    if (expandedRows.includes(index)) {
      setExpandedRows(expandedRows.filter((row) => row !== index));
    } else {
      setExpandedRows([...expandedRows, index]);
    }
  };

  const isRowExpanded = (index: number) => expandedRows.includes(index);

  return (
    <div className="table-area">
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>
              Projection <span className="month_text">(Jan-Jun)</span>
            </th>
            <th>
              Mid-year <span className="month_text">(July-Dec) </span>
            </th>
            <th>Year-end</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <React.Fragment key={index}>
              <tr>
                <td className="chevron_wrap">
                  <div
                    className="icon-wrap"
                    onClick={() => handleIconClick(index)}
                  >
                    <ArrowDown
                      width="9px"
                      height="5.56px"
                      fillColor="#000000"
                      classname={isRowExpanded(index) ? "expanded" : ""}
                    />
                    {row.label}
                  </div>
                </td>
                <td>{row.projection}</td>
                <td>{row.midYear}</td>
                <td>{row.yearEnd}</td>
              </tr>
              {isRowExpanded(index) && (
                <tr>
                  <td colSpan={4}>
                    <table className="table-down">
                      <tbody>
                        {row.subItems?.map((subItem, subIndex) => (
                          <tr key={subIndex}>
                            <td>{subItem.label}</td>
                            <td>{subItem.projection}</td>
                            <td>{subItem.midYear}</td>
                            <td>{subItem.yearEnd}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
          <tr>
            <td>Total Supplies & Services</td>
            <td>$00,000.00</td>
            <td>$00,000.00</td>
            <td>$00,000.00</td>
          </tr>
          <tr>
            <td>Total Salaries</td>
            <td>$00,000.00</td>
            <td>$00,000.00</td>
            <td>$00,000.00</td>
          </tr>
          <tr>
            <td>Profit</td>
            <td>$00,000.00</td>
            <td>$00,000.00</td>
            <td>$00,000.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const data: DataRow[] = [
  {
    label: "Income",
    projection: "$00,000.00",
    midYear: "$00,000.00",
    yearEnd: "$00,000.00",
    subItems: [
      {
        label: "Courier & Postage",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Printing",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Scholarships",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Courier & Postage",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Office & Computer Supplies",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Program Food",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Recreational Supplies",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Recreational Equipment",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Office Furniture & Equip",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Employee Development",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Program Travel",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Program Admissions",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Telephone",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Contract Staff",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Audit Fees",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Contract Services",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Equipment Rentals",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Advertising & Promotion",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Membership Dues & Meetings",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Fees - Inter Department",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Administration Fees",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Insurance",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Bank Charges & Misc",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Depreciation",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
    ],
  },
  {
    label: "Expense (Supplies & Services)",
    projection: "$00,000.00",
    midYear: "$00,000.00",
    yearEnd: "$00,000.00",
    subItems: [
      {
        label: "Courier & Postage",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Printing",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Scholarships",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Courier & Postage",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Office & Computer Supplies",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Program Food",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Recreational Supplies",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Recreational Equipment",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Office Furniture & Equip",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Employee Development",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Program Travel",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Program Admissions",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Telephone",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Contract Staff",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Audit Fees",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Contract Services",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Equipment Rentals",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Advertising & Promotion",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Membership Dues & Meetings",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Fees - Inter Department",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Administration Fees",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Insurance",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Bank Charges & Misc",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Depreciation",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
    ],
  },
  {
    label: "Expense (Salaries)",
    projection: "$00,000.00",
    midYear: "$00,000.00",
    yearEnd: "$00,000.00",
    subItems: [
      {
        label: "Courier & Postage",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Printing",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Scholarships",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Courier & Postage",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Office & Computer Supplies",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Program Food",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Recreational Supplies",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Recreational Equipment",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Office Furniture & Equip",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Employee Development",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Program Travel",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Program Admissions",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Telephone",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Contract Staff",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Audit Fees",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Contract Services",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Equipment Rentals",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Advertising & Promotion",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Membership Dues & Meetings",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Fees - Inter Department",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Administration Fees",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Insurance",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Bank Charges & Misc",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
      {
        label: "Depreciation",
        projection: "$00,000.00",
        midYear: "$00,000.00",
        yearEnd: "$00,000.00",
      },
    ],
  },
];

export default NestedTable;
