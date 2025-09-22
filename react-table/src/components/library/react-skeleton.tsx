import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "../simple-example/skeleton.css"

export default function ReactSkeletonExample() {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setData([
                { id: 1, name: 'Prerna' },
                { id: 2, name: 'John' },
            ]);
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <div className="container-fluid mt-4">
            <h2>React Loading Skeleton Example</h2>
            <ul className="list-group mt-3">
                {loading ? Array.from({ length: 2 }).map((_, idx) => (
                    <li key={idx} className="list-group-item">
                        <Skeleton height={20} width="80%" />
                    </li>
                )) : data.map((item) => (
                    <li key={item.id} className="list-group-item">{item.name}</li>
                ))}
            </ul>
        </div>
    );
}