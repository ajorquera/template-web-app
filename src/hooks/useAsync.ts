import { useCallback, useEffect, useState } from "react";

interface Opts {
    autoRun?: boolean;
}

const useAsync = <T>(asyncFn: (val: any) => Promise<T>, opts: Opts = { autoRun: true }) => {
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);

    const execute = useCallback((...args) => {
        setLoading(true);
        setValue(null);
        setError(null);

        return asyncFn(...args)
            .then(setValue)
            .catch(setError)
            .finally(() => setLoading(false));

    }, [asyncFn]);

    useEffect(() => {
        if (opts?.autoRun) {
            execute();
        }
    }, [asyncFn, opts]);

    return { execute, value, error, loading };
};

export default useAsync;
