import React, {useCallback, useState, useMemo} from 'react';
import './SortableTable.scss';
// import { debounce } from "../../implementationsForJSApi/debounce";

enum SortOder {
  Asc = 'asc',
  Des = 'des',
}

const data1 = [
  {Name: ' Alfreds Futterkiste', City: 'Berlin', Country: 'Germany'},
  {
    Name: 'Ana Trujillo Emparedados y helados',
    City: 'México D.F.',
    Country: 'Mexico',
  },
  {
    Name: ' Antonio Moreno Taquería',
    City: 'México D.F.',
    Country: 'Mexico',
  },
  {Name: 'Around the Horn', City: 'London', Country: 'UK'},
  {Name: 'B\'s Beverages', City: 'London', Country: 'UK'},
  {Name: 'Berglunds snabbköp', City: 'Luleå', Country: 'Sweden'},
  {Name: 'Blauer See Delikatessen', City: 'Mannheim', Country: 'Germany'},
  {Name: 'Blondel père et fils', City: 'Strasbourg', Country: 'France'},
  {Name: 'Bólido Comidas preparadas', City: 'Madrid', Country: 'Spain'},
  {Name: 'Bon app\'', City: 'Marseille', Country: 'France'},
  {Name: 'Bottom-Dollar Marketse', City: 'Tsawassen', Country: 'Canada'},
  {
    Name: 'Cactus Comidas para llevar',
    City: 'Buenos Aires',
    Country: 'Argentina',
  },
  {
    Name: 'Centro comercial Moctezuma',
    City: 'México D.F.',
    Country: 'Mexico',
  },
  {Name: 'Chop-suey Chinese', City: 'Bern', Country: 'Switzerland'},
  {Name: 'Comércio Mineiro', City: 'São Paulo', Country: 'Brazil'},
];

export interface SortableTableProps {
  data: Array<{ [s: string]: string | number }>;
}

export const SortableTable: React.FC<SortableTableProps> = ({data}) => {
  const keys: string[] = useMemo(() => {
    return Object.keys(data[0]);
  }, []);
  const [sortKey, setSortKey] = useState(keys[0]);
  const [sortOrder, setSortOrder] = useState<SortOder>(SortOder.Asc);

  const createHeaders = useCallback(() => {
    return keys.map((key: string, index: number) => {
      return (
        <th
          className={key === sortKey ? sortOrder : undefined}
          key={index}
          onClick={() => {
            if (key !== sortKey) {
              setSortKey(key);
              setSortOrder(SortOder.Asc);
            } else {
              setSortOrder(
                sortOrder === SortOder.Asc ? SortOder.Des : SortOder.Asc,
              );
            }
          }}
        >
          {key}
        </th>
      );
    });
  }, [sortOrder, sortKey]);

  const comparator =
    (sortKey: string, sortOrder: string) =>
      (
          d1: { [x: string]: string | number },
          d2: { [x: string]: string | number },
      ) => {
        const sign = sortOrder === 'asc' ? 1 : -1;
        if (typeof d1[sortKey] === 'string') {
          return (
            sign * (d1[sortKey] as string).localeCompare(d2[sortKey] as string)
          );
        } else {
          return sign * ((d1[sortKey] as number) - (d2[sortKey] as number));
        }
      };

  const createCells = (
      datum: { [s: string]: string | number } | ArrayLike<string>,
  ) => Object.values(datum).map((v, index) => <td key={index}>{v}</td>);

  const createRows = () => {
    const active = (ind: number) => ((ind + 1) % 2 ? 'row--gray' : '');
    return data.sort(comparator(sortKey, sortOrder)).map((datum, ind) => (
      <tr className={active(ind)} key={ind}>
        {createCells(datum)}
      </tr>
    ));
  };

  function debounce(func: any, timeout = 300) {
    let timer: NodeJS.Timeout;
    return (...args: any) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        // eslint-disable-next-line prefer-spread
        func.apply(null, args);
      }, timeout);
    };
  }

  function saveInput() {
    console.log('Saving data');
  }

  // 每次点header 都会有 console.log
  const processChange = useCallback(
      debounce(() => saveInput(), 2000),
      [],
  );

  return (
    <table className="sortable-table" onClick={processChange}>
      <thead>{createHeaders()}</thead>
      <tbody className="sortable-table__body">{createRows()}</tbody>
    </table>
  );
};

export const SortableTableDemo: React.FC = () => {
  return <SortableTable data={data1}></SortableTable>;
};

export default SortableTable;
