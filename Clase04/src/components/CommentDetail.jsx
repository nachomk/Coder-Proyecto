const CommentDetail = (props) => {
    console.log(props)

    return ( <>
    <div>
        <a href="">{props.author}</a>
        <div>
            <span>{props.date}</span>
        </div>
        <div>{props.message}</div>
        <div>{props.name}</div>
    </div>
    </> );
}
 
export default CommentDetail;