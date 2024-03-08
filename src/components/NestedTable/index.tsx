import { useState } from "react";
import "./index.scss";
import ArrowDown from "../../assets/svgs/svgFiles/ArrowDwon";

const NestedTable = () => {
  const [isTableVisible, setIsTableVisible] = useState(false);

  const handleIconClick = () => {
    setIsTableVisible(!isTableVisible);
  };
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
          <tr>
            <td className="chevron_wrap">
              <div className="icon-wrap" onClick={handleIconClick}>
                <ArrowDown  />
                Income
              </div>
            </td>
            <td>$00,000.00</td>
            <td>$00,000.00</td>
            <td>$00,000.00</td>
          </tr>
          {isTableVisible && (
          <tr>
            <td colSpan={4}>
              <table className="table-down">
                <tbody>
                  <tr>
                    <td>Courier & Postage</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                  </tr>
                  <tr>
                    <td>Printing</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                  </tr>
                  <tr>
                    <td>Scholarships</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                  </tr>
                  <tr>
                    <td>Office & Computer Supplies</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                  </tr>
                  <tr>
                    <td>Program Food</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                  </tr>
                  <tr>
                    <td>Recreational Supplies</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                  </tr>
                  <tr>
                    <td>Recreational Equipment</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                  </tr>
                  <tr>
                    <td>Office Furniture & Equip</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                  </tr>
                  <tr>
                    <td>Employee Development</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                  </tr>
                  <tr>
                    <td>Program Travel</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                  </tr>
                  <tr>
                    <td>Program Admissions</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                  </tr>
                  <tr>
                    <td>Telephone</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                  </tr>
                  <tr>
                    <td>Contract Staff</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                  </tr>
                  <tr>
                    <td>Audit Fees</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                  </tr>
                  <tr>
                    <td>Contract Services</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                  </tr>
                  <tr>
                    <td>Equipment Rentals</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                  </tr>
                  <tr>
                    <td>Advertising & Promotion</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                  </tr>
                  <tr>
                    <td>Membership Dues & Meetings</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                  </tr>
                  <tr>
                    <td>Fees - Inter Department</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                  </tr>
                  <tr>
                    <td>Administration Fees</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                  </tr>
                  <tr>
                    <td>Insurance</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                  </tr>
                  <tr>
                    <td>Bank Charges & Misc</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                  </tr>
                  <tr>
                    <td>Depreciation</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                    <td>$00,000.00</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        )}
          <tr>
            <td>
              <ArrowDown width="9px" height="5.56px" fillColor="#000000" />
              Expense (Supplies & Services)
            </td>
            <td>$00,000.00</td>
            <td>$00,000.00</td>
            <td>$00,000.00</td>
          </tr>
          <tr>
            <td>
              <ArrowDown width="9px" height="5.56px" fillColor="#000000" />
              Expense (Salaries)
            </td>
            <td>$00,000.00</td>
            <td>$00,000.00</td>
            <td>$00,000.00</td>
          </tr>
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

export default NestedTable;
