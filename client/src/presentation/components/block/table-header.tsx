/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { format } from 'date-fns';
import { CSVLink } from 'react-csv';
import { THeaderData, TTaskListArray } from '../../../types/table';
import { fromPairs } from 'ramda';
type TProps = {
  headerData: THeaderData;
  dataList: TTaskListArray;
};

const TableHeader: React.FC<TProps> = ({ headerData, dataList }) => {
  const pair = headerData.map((header) => Object.values(header) as any);
  const header = fromPairs(pair) as any;
  const today = format(new Date(), 'yyyyMMdd');

  return (
    <thead className="table-fixed bg-slate-900 text-white">
      <tr>
        <th className="w-1/12 border-2 border-solid py-2 text-xs">{header.user}</th>
        <th className="w-1/12 border-2 border-solid py-2 text-xs">{header.projectName}</th>
        <th className="w-5/12 border-2 border-solid py-2 text-xs">{header.workContents}</th>
        <th className="w-1/12 border-2 border-solid py-2 text-xs">{header.personDay}</th>
        <th className="w-1/12 border-2 border-solid py-2 text-xs">{header.requester}</th>
        <th className="w-1/12 border-2 border-solid py-2 text-xs">{header.progress}</th>
        <th className="w-3/12 border-2 border-solid py-2 text-xs">{header.note}</th>
        <th className="border-2 border-solid py-2 text-xs">{header.delete}</th>
        <th className="w-1/12 border-2 border-solid py-2 text-xs">
          <div className="cursor-pointer text-sm hover:text-blue-700">
            {/* TODO:CSV機能を使えるよう修正する */}
            <CSVLink filename={`task_progress_${today}.csv`} data={dataList} headers={headerData}>
              <FontAwesomeIcon icon={faFileArrowDown} />
            </CSVLink>
          </div>
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
