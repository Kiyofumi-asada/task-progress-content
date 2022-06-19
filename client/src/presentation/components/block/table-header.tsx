/* eslint-disable @typescript-eslint/no-explicit-any */
import { fromPairs } from 'ramda';
import React from 'react';
import { THeaderData } from '../../../types/table-header';

type TProps = {
  headerData: THeaderData;
};

const TableHeader: React.FC<TProps> = ({ headerData }) => {
  const pair = headerData.map((header) => Object.values(header) as any);
  const header = fromPairs(pair) as any;
  return (
    <thead className="bg-blue-300">
      <tr>
        <th className="border-x-2 px-2 py-2 text-xs">{header.member}</th>
        <th className="border-x-2 px-2 py-2 text-xs">{header.projectName}</th>
        <th className="border-x-2 px-2 py-2 text-xs">{header.workContents}</th>
        <th className="border-x-2 px-2 py-2 text-xs">{header.personDay}</th>
        <th className="border-x-2 px-2 py-2 text-xs">{header.requester}</th>
        <th className="border-x-2 px-2 py-2 text-xs">{header.progress}</th>
        <th className="border-x-2 px-2 py-2 text-xs">{header.note}</th>
        <th className="border-x-2 px-2 py-2 text-xs">{header.delete}</th>
        <th className="border-x-2 px-2 py-2 text-xs">{header.save}</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
