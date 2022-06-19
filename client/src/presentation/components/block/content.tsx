import React from 'react';
import { CSVDownload } from 'react-csv';
import { headerData } from '../../helper/table-header';
import TableBody from './table-body';
import TableHeader from './table-header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCsv } from '@fortawesome/free-solid-svg-icons';
const Content: React.FC = () => {
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

  return (
    <div className="flex h-screen w-screen text-gray-700">
      <div className="flex flex-grow flex-col">
        {/* csv start 不要なら削除*/}
        <div className=" flex h-6 border-b border-gray-300">
          <div className="absolute top-0 right-1 cursor-pointer">
            <FontAwesomeIcon icon={faFileCsv} />
            <CSVDownload headers={headerData} data={rowData} target="_blank" />
          </div>
        </div>
        {/* end */}
        <div className="flex flex-grow flex-col ">
          <table className="table-auto">
            <TableHeader headerData={headerData} />
            <TableBody />
          </table>
        </div>
      </div>
    </div>
  );
};

export default Content;
