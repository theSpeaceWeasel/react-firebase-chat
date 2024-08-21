import { useEffect, useState } from 'react'
import './chatList.css'
import AddUser from '../../addUser/AddUser'
import { useUserStore } from '../../../lib/userStore'
import { useChatStore } from '../../../lib/chatStore'
import { doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore'
import { db } from '../../../lib/firebase'

const ChatList = () => {
    const [addMode, setAddMode] = useState(false)
    const { currentUser } = useUserStore()
    const { changeChat } = useChatStore()
    const [chats, setChats] = useState([])
    const [searchInput, setSearchInput] = useState("")
    console.log(currentUser);
    useEffect(() => {
        if (!currentUser?.id) return;
        const unsub = onSnapshot(doc(db, "userchats", currentUser.id), async (res) => {
            if (res.exists()) {
                const items = res.data().chats
                const promises = items.map(async (item) => {
                    const userDocRef = doc(db, "users", item.receiverId)
                    const userDocSnap = await getDoc(userDocRef)
                    const user = userDocSnap.data()

                    return { ...item, user }
                })
                const chatData = await Promise.all(promises)
                setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt))
            } else {
                console.log("No such document!");
            }
        }, (error) => {
            console.error("Error fetching document:", error);
        });

        return () => {
            unsub()
        };
    }, [currentUser.id])

    const handleSelect = async (chat) => {

        const userChats = chats.map((item) => {
            const { user, ...rest } = item;
            return rest;
        });

        const chatIndex = userChats.findIndex(
            (item) => item.chatId === chat.chatId
        );

        userChats[chatIndex].isSeen = true;

        const userChatsRef = doc(db, "userchats", currentUser.id);

        try {
            await updateDoc(userChatsRef, {
                chats: userChats,
            });
            changeChat(chat.chatId, chat.user);
        } catch (err) {
            console.log(err);
        }
    }
    const filteredChats = chats.filter((c) =>
        c.user.username.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
        <div className='chatList'>
            <div className='search'>
                <div className='searchBar'>
                    <img src='./search.png' />
                    <input type='text' placeholder='Search' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                </div>
                <img
                    src={addMode ? './minus.png' : './plus.png'}
                    className='add'
                    onClick={() => { setAddMode(!addMode) }}
                />
            </div>
            {/* xxxxxxxxxxxxxxxxxxxxxx */}
            {filteredChats.map((chat) => {
                return <div
                    key={chat.chatId}
                    className='item'
                    onClick={() => handleSelect(chat)}
                    style={{ backgroundColor: chat?.isSeen ? "transparent" : "#5183fe" }}
                >
                    <img src={chat.user.blocked.includes(currentUser.id) ? './avatar.png' : chat.user.avatar || './avatar.png'} />
                    <div className='texts'>
                        <span>{chat.user.blocked.includes(currentUser.id) ? "User" : chat.user.username}</span>
                        <p>{chat.lastMessage}</p>
                    </div>
                </div>
            })}

            {/* wwwwwwwwwwwwwwwwwwwwwwwww */}
            {addMode && <AddUser />}
        </div>
    )
}

export default ChatList