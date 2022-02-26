import Avatar from "./Avatar";


function FriendListBox (props){
    let data = props.data;

    return (
        <div className="friendlistbox">
        {
            data.map((item) => {
                return <div className="friend-list-item">
                    <Avatar name={item.user}/>
                    {item.displayName}
                </div>
            })
        }
        </div>
    )    
}

export default FriendListBox;