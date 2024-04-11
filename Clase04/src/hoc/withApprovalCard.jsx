export const withApprovalCard = BaseComponent => {
    const DerivedComponent = props => {
        const data = {
            name: "data"
        }
    return <BaseComponent name={data.name} {...props}/>
    }
    return DerivedComponent;
}