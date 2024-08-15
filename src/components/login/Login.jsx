import { useState } from "react"
import "./login.css"
import { toast } from "react-toastify"

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
    const handleLogin = (e) => {
        e.preventDefault();
        // const formData = new FormData();
        // formData.append('file', avatar.file);
        // formData.append('username', 'username');
        // formData.append('password', 'password');
        // fetch('http://localhost:3000/login', {
        //     method: 'POST',
        //     body: formData
        // })

        toast.warn("hzllo")
    }
    return (
        <div className="login">
            <div className="item">
                <h2>Welcome back</h2>
                <form onSubmit={handleLogin}>
                    <input type="text" placeholder="Email" name="email" required />
                    <input type="password" placeholder="Password" name="password" required />
                    <button type="submit">Sign In</button>
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