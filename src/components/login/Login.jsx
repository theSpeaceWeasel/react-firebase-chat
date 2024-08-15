import { useState } from "react"
import "./login.css"

const Login = () => {
    const [avatar, setAvatar] = useState({
        file: null,
        url: ""
    })
    const handleAvatar = (e) => {
        const file = e.target.files[0];
        if (file) {
            setAvatar({ file, url: URL.createObjectURL(file) });
        }
    }
    return (
        <div className="login">
            <div className="item">
                <h2>Welcome back</h2>
                <form>
                    <input type="text" placeholder="Email" name="email" required />
                    <input type="password" placeholder="Password" name="password" required />
                    <button >Sign In</button>
                </form>
            </div>
            <div className="separator"></div>
            <div className="item">
                <h2>Create an account</h2>
                <form>
                    <label htmlFor="file"><img src={avatar.url || "./avatar.png"} />Upload an image</label>

                    <input type="file" id="file" style={{ display: "none" }} onChange={handleAvatar} />
                    <input type="text" placeholder="Username" name="username" required />
                    <input type="text" placeholder="Email" name="email" required />
                    <input type="password" placeholder="Password" name="password" required />
                    <button >Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Login