import React from "react";
import { ArticleList } from "../components/Article";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className='wrapper'>
        <ArticleList />
      </div>
    </div>
  );
};

export default Dashboard;
