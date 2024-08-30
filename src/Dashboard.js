import React from 'react';
import { useParams } from 'react-router-dom';

const Dashboard = () => {
  const { name } = useParams(); // Access the 'name' parameter from the URL

  return (
    <div>
      <center>
        <h4>mallike and gayathri: {name}</h4>
      </center>
    </div>
  );
};

export default Dashboard;
