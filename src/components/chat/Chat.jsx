import { useEffect, useRef, useState } from "react"
import "./chat.css"
import EmojiPicker from "emoji-picker-react"
const Chat = () => {
    const [emojiOpen, setEmojjiOpen] = useState(false)
    const [text, setText] = useState("")
    const endRef = useRef(null)
    const handleEmoji = (e) => {
        setText((prev) => prev + e.emoji)
        setEmojjiOpen(false)
    }
    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [])
    return (
        <div className="chat">
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" />
                    <div className="texts">
                        <span>Jane Doe</span>
                        <p>ths is a descriotkldzkn</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" />
                    <img src="./video.png" />
                    <img src="./info.png" />
                </div>
            </div>
            <div className="center">
                <div className="message">
                    <img src="./avatar.png" />
                    <div className="texts">
                        <p>hello how are you?</p>
                        <span>1 min ago </span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>hello how are you? loremxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                        <span>1 min ago </span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" />
                    <div className="texts">
                        <p>hello how are you? cccccccccccccccccccccccccccccccccc</p>
                        <span>1 min ago </span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <img src="./emoji.png" />
                        <p>hello how are you?</p>
                        <span>1 min ago </span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" />
                    <div className="texts">
                        <p>hello how are you?</p>
                        <span>1 min ago </span>
                    </div>
                </div>
                <div ref={endRef}></div>
            </div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" />
                    <img src="./camera.png" />
                    <img src="./mic.png" />
                </div>
                <input type="text" placeholder="Type a message..." value={text} onChange={e => setText(e.target.value)} />
                <div className="emoji">
                    <img src="./emoji.png" onClick={() => setEmojjiOpen(!emojiOpen)} />
                    <div className="picker">
                        {emojiOpen && <EmojiPicker onEmojiClick={handleEmoji} />}
                    </div>
                </div>
                <button className="sendButton">Send</button>
            </div>

        </div>
    )
}

export default Chat
