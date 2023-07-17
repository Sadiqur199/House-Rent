import React from 'react';
import { Table, Button } from 'react-bootstrap';

function OwnerDashboard() {
  // Implement the Owner Dashboard functionality here

  return (
    <div>
      <h2>Owner Dashboard</h2>
      <Button>Add New House</Button>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            {/* Other table headers */}
          </tr>
        </thead>
        <tbody>
          {/* Render the list of owned houses */}
        </tbody>
      </Table>
    </div>
  );
}

export default OwnerDashboard;
