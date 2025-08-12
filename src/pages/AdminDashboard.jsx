import { NavLink } from 'react-router-dom'

function AdminDashboard() {
    // Static data for demo (replace with API calls in a real app)
    const totalUsers = 150;
    const totalProducts = 45;
    const recentOrders = [
        { id: 1, user: "John Doe", date: "2025-08-05", amount: 89.99 },
        { id: 2, user: "Jane Smith", date: "2025-08-04", amount: 129.99 },
    ];

    return (
        <div className="min-h-[calc(100vh-4rem)] bg-muted-white-light dark:bg-muted-white-dark flex items-center justify-center p-4">
            <div className="w-full max-w-4xl p-6 bg-white dark:bg-neutral-beige-dark rounded-xl shadow-lg">
                <h1 className="text-3xl font-display text-soft-black-light dark:text-soft-black-dark mb-6">Admin Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-muted-white-light dark:bg-muted-white-dark p-4 rounded-lg shadow-md">
                        <h2 className="text-xl text-warm-gray-light dark:text-warm-gray-dark">Total Users</h2>
                        <p className="text-2xl font-semibold text-soft-black-light dark:text-soft-black-dark">{totalUsers}</p>
                    </div>
                    <div className="bg-muted-white-light dark:bg-muted-white-dark p-4 rounded-lg shadow-md">
                        <h2 className="text-xl text-warm-gray-light dark:text-warm-gray-dark">Total Products</h2>
                        <p className="text-2xl font-semibold text-soft-black-light dark:text-soft-black-dark">{totalProducts}</p>
                    </div>
                </div>
                <div className="mb-6">
                    <h2 className="text-xl font-display text-soft-black-light dark:text-soft-black-dark mb-4">Recent Orders</h2>
                    <div className="bg-muted-white-light dark:bg-muted-white-dark p-4 rounded-lg shadow-md">
                        {recentOrders.length > 0 ? (
                            <ul className="space-y-2">
                                {recentOrders.map((order) => (
                                    <li key={order.id} className="flex justify-between text-warm-gray-light dark:text-warm-gray-dark">
                                        <span>{order.user} - {order.date}</span>
                                        <span>${order.amount}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-warm-gray-light dark:text-warm-gray-dark">No recent orders.</p>
                        )}
                    </div>
                </div>
                <NavLink
                    to="/login"
                    className="inline-block bg-soft-black-light dark:bg-soft-black-dark text-muted-white-light dark:text-muted-white-dark px-6 py-2 rounded-full hover:bg-accent-gold-light dark:hover:bg-accent-gold-dark transition-colors"
                >
                    Logout
                </NavLink>
            </div>
        </div>
    )
}

export default AdminDashboard