/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCsv } from '@fortawesome/free-solid-svg-icons';
import { format } from 'date-fns';
import { fromPairs } from 'ramda';
import { CSVLink } from 'react-csv';
import { THeaderData } from '../../../types/table';

type TProps = {
  headerData: THeaderData;
};
const rowData = [
  {
    user: 'asada',
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

  const today = format(new Date(), 'yyyyMMdd');

  return (
    <thead className="table-fixed bg-slate-400">
      <tr>
        <th className="w-1/12 border-2 border-solid py-2 text-xs">{header.user}</th>
        <th className="w-1/12 border-2 border-solid py-2 text-xs">{header.projectName}</th>
        <th className="w-5/12 border-2 border-solid py-2 text-xs">{header.workContents}</th>
        <th className="w-1/12 border-2 border-solid py-2 text-xs">{header.personDay}</th>
        <th className="w-1/12 border-2 border-solid py-2 text-xs">{header.requester}</th>
        <th className="w-1/12 border-2 border-solid py-2 text-xs">{header.progress}</th>
        <th className="w-3/12 border-2 border-solid py-2 text-xs">{header.note}</th>
        <th className="border-2 border-solid py-2 text-xs">{header.delete}</th>
        <th className="border-2 border-solid py-2 text-xs">
          <div className="cursor-pointer text-sm hover:text-blue-700">
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
