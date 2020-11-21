import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { useStateValue } from '../../Providers/StateProvider';
import Order from './Order/Order';

import './Orders.css';

const Orders = () => {
    const [{ cart, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        //fetch orders once
        if (user) {
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => {
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()

                    })));
                })
        } else {
            setOrders([]);
        }

    }, [user]);


    return (
        <div className="orders">
            {orders?.map(order => (
                <Order order={order} />
            ))}
        </div>
    )
};

export default Orders;
