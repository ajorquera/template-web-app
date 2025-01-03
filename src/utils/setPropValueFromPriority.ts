
/**
 *  Set the right property value according to the priority of it's other properties
 */
const setPropValueFromPriority = (key: string, priorityOrder: string[]) => (props) => {
    priorityOrder.forEach(prop => {
        const value = props[key] ?? props[prop];
        if (value !== undefined) {
            props[key] = props[key] ?? props[prop];
        }
    });

    return props;
}

export default setPropValueFromPriority;