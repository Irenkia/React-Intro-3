import React from 'react';

function ProductTable(props) {
    const { products } = props;
    return (
        <table>
            <caption>Продукты</caption>
            <thead>
                <tr>
                    <th>Наименование</th>
                    <th>Цена</th>
                    <th>Срок годности</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.stock}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ProductTable;
