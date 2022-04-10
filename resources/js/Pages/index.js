import React, { useEffect } from "react";

const Dashboard = ({shopId}) => {

    useEffect(() => {
        console.log("shopId", shopId)
    },[]);


    return <h1>Scroll to top Shopify App</h1>;
};

export default Dashboard;
