import React, { FC } from "react";

const withProps = <P extends object>(props: Partial<P>, Component: FC<P>) => {
    const WithProps: FC<Omit<P, keyof typeof props>> = (innerProps) => {
        return <Component {...props} {...innerProps} />;
    }

    return WithProps;
}

export default withProps;