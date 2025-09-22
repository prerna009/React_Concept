import { Box, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";

export default function MuiSkeleton() {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setData([
                { id: 1, name: "John Doe", email: "john@example.com" },
                { id: 2, name: "Jane Smith", email: "jane@example.com" },
                { id: 3, name: "Sam Wilson", email: "sam@example.com" },
                { id: 4, name: "Alice Brown", email: "alice@example.com" },
                { id: 5, name: "Bob Green", email: "bob@example.com" },
                { id: 6, name: "Charlie Black", email: "charlie@example.com" },
            ]);
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <Box sx={{ width: "100vh", margin: "20px"}}>
            {loading ? (
                <>
                <Skeleton variant="text" height={40} />
                <Skeleton variant="rectangular" height={100} sx={{ mt:1 }} />
                <Skeleton variant="circular" width={40} height={40} sx={{ mt:1 }} />
                </>
            ) : (
                <Box>
                    <h3>MUI Skeleton Example</h3>
                    <ul>
                        {data.map((item) => (
                            <li key={item.id}>{item.name} - ({item.email})</li>
                        ))}
                    </ul>
                </Box>
            )}
        </Box>
    );
}