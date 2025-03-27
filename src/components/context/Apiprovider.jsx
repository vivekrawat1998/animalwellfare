import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import React from "react";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const apiEndpoints = [
        "/programe/all",       // 1. Program data
        "/ourDonor/all",       // 2. Donor information
        "/gallery/all",        // 3. Gallery images
        "/ourteam/all",        // 4. Team details
        "/vision/all",         // 5. Vision statement
        "/mission/all",        // 6. Mission statement
        "/testimonials/all",   // 7. Testimonials      
        "/address/all",        // 8. Address details
        "/email/all",          // 9. Email information
        "/phone/all",          // 10. Phone numbers
        "/socialmedia/all",    // 11. Social media links
        "/service/all"         // 12. Services offered
    ];
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            try {
                const responses = await Promise.all(
                    apiEndpoints.map((endpoint) =>
                        axios
                            .get(`${BASE_URL}${endpoint}`)
                            .then((res) => res.data)
                            .catch((err) => {
                                console.error(`Error fetching ${endpoint}:`, err);
                                return null;
                            })
                    )
                );

                const formattedData = responses.reduce((acc, result, index) => {
                    acc[`api${index + 1}`] = result;
                    return acc;
                }, {});

                setData(formattedData);
            } catch (error) {
                console.error("Error fetching APIs:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <ApiContext.Provider value={{ data, isLoading }}>
            {children}
        </ApiContext.Provider>
    );
};

export const useApi = () => useContext(ApiContext);
