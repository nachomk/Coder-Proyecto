import {render} from 'react-dom'

const ApprovalCard = (props) => {
    const data = {
        name: "dato dentro de Approval Card"
    }
    
    return props.render(data.name)
}
 
export default ApprovalCard;