import Table, { ColumnsType, TableProps } from "rc-table";
import "./table.scss";

interface RowData {
  name?: string;
  age?: number;
  address?: string;
  key?: string;
}

interface CustomColumnType extends ColumnsType<RowData> {
  render?: (text: string, record: RowData, index: number) => React.ReactNode;
}

interface ExtendedTableProps extends TableProps<RowData> {
  columns?: CustomColumnType[];
  data?: RowData[];
}

const TableComponent: React.FC<ExtendedTableProps> = ({
  columns,
  data,
  ...restProps
}) => {
  return <div className="table_holder"><Table columns={columns} data={data} {...restProps} /></div>;
};

export default TableComponent;
