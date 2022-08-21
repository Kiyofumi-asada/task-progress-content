import React from 'react';
import { format } from 'date-fns';
import { fromPairs } from 'ramda';
import { THeaderData, TTaskListArray } from '../../types/task';
import { CSVLink } from 'react-csv';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

type TProps = {
  headerData: THeaderData;
  taskList: TTaskListArray;
};

const TableHeader: React.FC<TProps> = ({ headerData, taskList }) => {
  //variable
  const pair = headerData.map((header) => Object.values(header) as any);
  const header = fromPairs(pair) as any;
  const today = format(new Date(), 'yyyyMMdd');

  return (
    <thead className="table-fixed bg-slate-900 text-white">
      <tr>
        <th className="w-1/12 border-2 border-solid py-1 text-xs">{header.user}</th>
        <th className="w-1/12 border-2 border-solid py-1 text-xs">{header.projectName}</th>
        <th className="w-5/12 border-2 border-solid py-1 text-xs">{header.workContents}</th>
        <th className="w-1/12 border-2 border-solid py-1 text-xs">{header.personDay}</th>
        <th className="w-1/12 border-2 border-solid py-1 text-xs">{header.requester}</th>
        <th className="w-1/12 border-2 border-solid py-1 text-xs">{header.progress}</th>
        <th className="w-3/12 border-2 border-solid py-1 text-xs">{header.note}</th>
        <th className="border-2 border-solid py-1 text-xs">{header.delete}</th>
        {/* csv機能追加時に実装
            <CSVLink filename={`task_progress_${today}.csv`} data={taskList} headers={headerData}>
              <FontAwesomeIcon icon={faFileArrowDown} />
            </CSVLink> */}
      </tr>
    </thead>
  );
};

export default TableHeader;
