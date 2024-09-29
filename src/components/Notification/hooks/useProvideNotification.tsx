import { ReactNode, useCallback, useMemo, useState } from "react";
import Message from "../components/Message";
import Flex from "@/components/Flex/Flex";

const DEFAULT_DISMISS_TIMEOUT = 5000;

const useProvideNotification = () => {
    const [nodes, setNode] = useState<ReactNode[]>([]);

    const dismiss = useCallback(() => {
        setNode(null);
    }, [setNode]);

    const notify = useCallback( (message: string) => {
        nodes.unshift(<Message>{message}</Message>);
        setNode([...nodes]);

        setTimeout(() => {
            nodes.shift();
            setNode([...nodes]);
        }, DEFAULT_DISMISS_TIMEOUT);
    }, [setNode, dismiss]);

    const node = useMemo(() => {
        return (
            <Flex position="absolute" top={0} right={0} flexDirection="column" gap={10}>
                {nodes}
            </Flex>
        )
    }, [nodes]);

    return {
        notify,
        dismiss,
        node
    };

}

export default useProvideNotification;