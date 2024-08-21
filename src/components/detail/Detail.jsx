import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore"
import { useChatStore } from "../../lib/chatStore"
import { auth, db } from "../../lib/firebase"
import { useUserStore } from "../../lib/userStore"
import "./detail.css"
const Detail = () => {

    const { currentUser } = useUserStore()
    const { chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock, resetChat } =
        useChatStore();
    const handleBlock = async () => {
        if (!user) return;

        const userDocRef = doc(db, "users", currentUser.id);

        try {
            await updateDoc(userDocRef, {
                blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
            });
            changeBlock();
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="detail">
            <div className="user">
                <img src={user?.avatar || "./avatar.png"} />
                <h2>{user?.username}</h2>
                <p>lorem text more test hello hiyuu</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" />
                    </div>

                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy</span>
                        <img src="./arrowUp.png" />
                    </div>
                </div>

                <div className="option">
                    <div className="title">
                        <span>Shared</span>
                        <img src="./arrowDown.png" />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://images.pexels.com/photos/23105844/pexels-photo-23105844/free-photo-of-narrow-house-in-town.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                <span>photo.png</span>
                            </div>
                            <img src="./download.png" className="dlIcon" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://images.pexels.com/photos/23105844/pexels-photo-23105844/free-photo-of-narrow-house-in-town.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                <span>photo.png</span>
                            </div>
                            <img src="./download.png" className="dlIcon" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://images.pexels.com/photos/23105844/pexels-photo-23105844/free-photo-of-narrow-house-in-town.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                <span>photo.png</span>
                            </div>
                            <img src="./download.png" className="dlIcon" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://images.pexels.com/photos/23105844/pexels-photo-23105844/free-photo-of-narrow-house-in-town.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                <span>photo.png</span>
                            </div>
                            <img src="./download.png" className="dlIcon" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn" onClick={handleBlock}>
                {isCurrentUserBlocked ? "you are blocked" : isReceiverBlocked ? "User Blocked" : "Block user"}
            </div>
            <div className="btn logout" onClick={() => auth.signOut()}>
                Logout
            </div>
        </div>
    )
}

export default Detail
