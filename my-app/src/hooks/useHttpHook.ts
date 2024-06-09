
import { useCallback } from 'react';

export default function useHttp() {
    const request =
        useCallback(
            async (
                url: RequestInfo | URL,
                method = 'GET',
                body: null | string = null,
                contentType = 'application/json',
            ) => {
                try {
                    const response = await fetch(url, {
                        method,
                        body,
                        headers: {
                            "Content-type": contentType,
                        }
                    });
                    if (!response.ok) {
                        throw new Error(
                            `Could not fetch ${url}, status: ${response.status}`,
                        );
                    }

                    const data = await response.json();
                        return data;
                } catch (e) {
                    throw e;
                }
            }, []);



    return { request };
}
