import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


const PackageTable = () => {
    const packages = [


        {
            name: 'Madurai, Rameswaram, Kanyakumari',
            price: '₹ 10,000*',
            days: '3 Nights / 4 Days',
            inclusions: 'Hotels, Car, Sightseeing, Meals',
            id: 1,
        },
        {
            name: 'Mysore, Ooty, Wayanad',
            price: '₹ 11,500*',
            days: '5 Nights / 6 Days',
            inclusions: 'Hotels, Car, Meals',
            id: 2,
        },
        {
            name: 'Kumbakonam, Thanjuvar, Rameswaram, Kanyakumari, Kodaikanal, Ooty',
            price: '₹  28,100*',
            days: '7 Nights / 8 Days',
            inclusions: 'Hotels, Sightseeing, Meals',
            id: 3,
        },
        {
            name: 'Kanyakumari, Rameswaram, Madurai',
            price: '₹ 17,650*',
            days: '4 Nights / 5 Days',
            inclusions: 'Hotels, Car, Sightseeing, Meals',
            id: 4,
        },
        {
            name: 'Bangalore, Mysore, Ooty, Kodaikanal',
            price: '₹ 8,335*',
            days: '6 Nights / 7 Days',
            inclusions: 'Hotels, Car, Sightseeing, Meals',
            id: 5,
        },

    ];

    const handleGetQuotes = (id, e) => {

        e.target.preventdefault()
    };

    return (
        <Table striped bordered hover className="packages-table mt-3  text-start fw-light ">
            <thead>
                <tr>
                    <th width="23%">Packages</th>
                    <th width="13%">Price</th>
                    <th width="18%">Days</th>
                    <th className="d-none d-md-table-cell" width="31%">
                        Inclusion
                    </th>
                    <th width="17%">  Details</th>
                </tr>
            </thead>
            <tbody>
                {packages.map((packageItem) => (
                    <tr key={packageItem.id}>
                        <td>{packageItem.name}</td>
                        <td>{packageItem.price}</td>
                        <td className="d-none d-md-table-cell">{packageItem.days}</td>
                        <td className="d-table-cell d-md-none">{packageItem.days}</td>
                        <td className="d-none d-md-table-cell">{packageItem.inclusions}</td>
                        <td>
                            <Button
                                variant="primary"
                                style={{ border: 'none' }}
                                onClick={(e) => handleGetQuotes(packageItem.id)}
                            >
                                <b>View Details &gt;</b>
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default PackageTable;
