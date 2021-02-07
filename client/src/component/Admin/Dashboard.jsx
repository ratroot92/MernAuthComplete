import React from 'react'
import AdminCard from './AdminCompoenets/AdminCard'

export default function Dashboard() {
    return (
        <div className="row">
        <div className="col-md-3 col-sm-12 col-xl-4 ">
            <AdminCard title="Admin" count="100" color="success" />
        </div>
        <div className="col-md-3 col-sm-12 col-xl-4 ">
            <AdminCard title="Products" count="100" color="danger" />
        </div>
        <div className="col-md-3 col-sm-12 col-xl-4 ">
            <AdminCard title="Categories" count="100" color="primary" />
        </div>
        <div className="col-md-3 col-sm-12 col-xl-4 ">
            <AdminCard title="Admin" count="100" color="secondary" />
        </div>
        </div>
    )
}
