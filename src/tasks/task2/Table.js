import React, { useState, useMemo } from 'react';
import '../taskCSS/Table.css';
//import ProductTable from './ProductTable'; 

const UseSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = useState(config);

    const sortedItems = useMemo(() => {
        let sortableItems = [...items];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
        ) {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return { items: sortedItems, requestSort, sortConfig };
};

const ProductTable = (props) => {
    const { items, requestSort, sortConfig } = UseSortableData(props.products);
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    return (
        <div>
            <h3>Задание № 2</h3>
            <table className="table1">
                <caption>Продукты</caption>
                <thead>
                    <tr>
                        <th>
                            <button
                                type="button"
                                onClick={() => requestSort('name')}
                                className={getClassNamesFor('name')}
                            >
                                Наименование
                        </button>
                        </th>
                        <th>
                            <button
                                type="button"
                                onClick={() => requestSort('price')}
                                className={getClassNamesFor('price')}
                            >
                                Цена
                        </button>
                        </th>
                        <th>
                            <button
                                type="button"
                                onClick={() => requestSort('stock')}
                                className={getClassNamesFor('stock')}
                            >
                                Срок годности
                         </button>
                        </th>
                    </tr>
                </thead>
                <tbody >
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.stock}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default function Table() {
    return (
        <div >
            <ProductTable
                products={[
                    { id: 1, name: 'Хлеб пшеничный', price: 13, stock: 3 },
                    { id: 2, name: 'Mолоко пастеризованное', price: 20, stock: 5 },
                    { id: 3, name: 'Картофель', price: 10, stock: 90 },
                    { id: 4, name: 'Филе куриное', price: 120, stock: 4 },
                    { id: 5, name: 'Сельдь маринованная', price: 75, stock: 20 },
                    { id: 6, name: 'Рис', price: 18, stock: 120 },
                    { id: 7, name: 'Яблоки', price: 17, stock: 60 },
                    { id: 8, name: 'Печень куриная', price: 55, stock: 2 },
                ]}
            />
        </div>
    );
}

