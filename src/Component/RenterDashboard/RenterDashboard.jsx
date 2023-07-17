import React from 'react';
import { Table, Button } from 'react-bootstrap';

function RenterDashboard() {
  // Implement the Renter Dashboard functionality here

  return (
    <div>
      <h2>Renter Dashboard</h2>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            {/* Other table headers */}
          </tr>
        </thead>
        <tbody>
          {/* Render the list of booked houses */}
        </tbody>
      </Table>
    </div>
  );
}

export default RenterDashboard;
