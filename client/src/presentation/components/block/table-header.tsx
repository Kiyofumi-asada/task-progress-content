/* eslint-disable @typescript-eslint/no-explicit-any */
import { faFileCsv } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from 'date-fns';
import { fromPairs } from 'ramda';
import React from 'react';
import { CSVLink } from 'react-csv';
import { THeaderData } from '../../../types/table-header';

type TProps = {
  headerData: THeaderData;
};
const rowData = [
  {
    member: 'asada',
    projectName: ['nikkei'],
    workContents: '#1234 issue対応',
    personDay: '1.0',
    requester: 'mikami',
    progress: '75%',
    note: 'cb改修',
  },
];

const TableHeader: React.FC<TProps> = ({ headerData }) => {
  const pair = headerData.map((header) => Object.values(header) as any);
  const header = fromPairs(pair) as any;

  const today = format(new Date(), 'yyyy/MM/dd');

  return (
    <thead className="table-fixed bg-blue-300">
      <tr>
        <th className="w-1/12 border-x-2 py-2 text-xs">{header.member}</th>
        <th className="w-1/12 border-x-2 py-2 text-xs">{header.projectName}</th>
        <th className="w-4/12 border-x-2 py-2 text-xs">{header.workContents}</th>
        <th className="w-1/12 border-x-2 py-2 text-xs">{header.personDay}</th>
        <th className="w-1/12 border-x-2 py-2 text-xs">{header.requester}</th>
        <th className="w-1/12 border-x-2 py-2 text-xs">{header.progress}</th>
        <th className="w-2/12 border-x-2 py-2 text-xs">{header.note}</th>
        <th className="w-1/12 border-x-2 py-2 text-xs">{header.delete}</th>
        <th className="w-1/12 border-x-2 py-2 text-xs">
          <div className=" cursor-pointer text-2xl">
            <CSVLink filename={`task_progress_${today}.csv`} data={rowData} headers={headerData}>
              <FontAwesomeIcon icon={faFileCsv} />
            </CSVLink>
          </div>
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
