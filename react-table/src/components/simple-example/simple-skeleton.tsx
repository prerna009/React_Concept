import { useEffect, useState } from "react";
import "./skeleton.css";

export default function SimpleSkeletonExample() {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setData([
                { id: 1, name: 'Prerna' },
                { id: 2, name: 'Sumeet' },
                { id: 3, name: 'Sandy' },
            ]);
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <div className="container-fluid mt-4">
            <h2>Skeleton Loader Example</h2>
            <ul className="list-group mt-3">
                {loading ? Array.from({ length: 3 }).map((_, idx) => (
                    <li key={idx} className="list-group-item">
                        <div className="skeleton"></div>
                    </li>
                )) : data.map((item) => (
                    <li key={item.id} className="list-group-item">{item.name}</li>
                ))}
            </ul>
        </div>
    );
}