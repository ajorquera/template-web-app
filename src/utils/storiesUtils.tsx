import { FC } from "react"

type Props = Record<string, unknown>

export const simpleStory = (Component: FC<any>, defaultProps?: Props) => (props: Props) => (
    <Component {...defaultProps} {...props} />
)

export const gridStory = (Component: FC<any>, items:Props[]) => () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        {items.map((item, index) => (
            <Component key={index} {...item}  />
        ))}
    </div>
);

export const flexStory = (Component: FC<any>, items: Props[]) => () => (
    <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
        {items.map((item, index) => (
            <Component key={index} {...item} />
        ))}
    </div>
);