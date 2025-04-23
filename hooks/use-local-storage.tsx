"use client";

import { type Dispatch, type SetStateAction, useEffect, useState } from "react";

/**
 * Custom hook to synchronize a value with `localStorage`. 
 * This hook ensures that the initial value is only read from `localStorage` 
 * after the component mounts, preventing issues with server-side rendering (SSR).
 * 
 * @template T - The type of the stored value.
 * 
 * @param {string} key - The `localStorage` key under which the value is stored.
 * @param {T} initialValue - The initial value to use when no value exists in `localStorage`.
 * 
 * @returns {[T, Dispatch<SetStateAction<T>>]} - Returns the current value from `localStorage` 
 * and a function to update that value. Updating the value automatically stores the new value 
 * in `localStorage`.
 * 
 * @example
 * // Storing and retrieving a string from localStorage
 * const [name, setName] = useLocalStorage<string>('name', 'John Doe');
 * 
 * // Storing and retrieving an object from localStorage
 * const [user, setUser] = useLocalStorage<{id: number, name: string}>('user', {id: 1, name: 'John'});
 */
export default function useLocalStorage<T>(
    key: string,
    initialValue: T
): [T, Dispatch<SetStateAction<T>>] {
    // State to hold the value, initialized with the provided initial value
    const [storedValue, setStoredValue] = useState(initialValue);
    // Flag to check if the initial load from localStorage has completed
    const [firstLoadDone, setFirstLoadDone] = useState(false);

    /**
     * Effect hook to load the value from `localStorage` when the component mounts. 
     * This hook avoids SSR inconsistencies by loading the value only in the browser environment.
     */
    useEffect(() => {
        const fromLocal = () => {
            if (typeof window === "undefined") {
                return initialValue;
            }
            try {
                const item = window.localStorage.getItem(key);

                // ✅ Avoid trying to parse null or "undefined"
                if (!item || item === 'undefined') {
                    return initialValue;
                }

                return JSON.parse(item) as T;
            } catch (error) {
                console.error('Error reading localStorage:', error);
                return initialValue;
            }
        };


        // Update the state with the value from localStorage
        setStoredValue(fromLocal());
        // Mark that the first load from localStorage is complete
        setFirstLoadDone(true);
    }, [initialValue, key]);

    /**
     * Effect hook to update `localStorage` whenever the `storedValue` changes.
     * This ensures that any changes to the state are reflected in `localStorage`.
     */
    useEffect(() => {
        // Skip saving to localStorage on the initial load
        if (!firstLoadDone) {
            return;
        }

        try {
            // Store the updated value in localStorage as a string
            if (typeof window !== "undefined") {
                window.localStorage.setItem(key, JSON.stringify(storedValue));
            }
        } catch (error) {
            console.log('Error writing to localStorage:', error);
        }
    }, [storedValue, firstLoadDone, key]);

    // Return the current stored value and the function to update it
    return [storedValue, setStoredValue];
}