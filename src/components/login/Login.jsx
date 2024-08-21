import { useState } from "react"
import "./login.css"
import { toast } from "react-toastify"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "../../lib/firebase"
import { setDoc, doc } from "firebase/firestore"
import upload from "../../lib/upload"
const Login = () => {
    const [avatar, setAvatar] = useState({
        file: null,
        url: ""
    })
    const [loading, setLoading] = useState(false)
    const handleAvatar = (e) => {
        const file = e.target.files[0];
        if (file) {
            setAvatar({ file, url: URL.createObjectURL(file) });
        }
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true)
        // const formData = new FormData();
        // formData.append('file', avatar.file);
        // formData.append('username', 'username');
        // formData.append('password', 'password');
        const formData = new FormData(e.target);
        const { email, password } = Object.fromEntries(formData)

        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }


        toast.warn("hzllo")
    }

    const handleRegister = async (e) => {
        setLoading(true)
        e.preventDefault();
        // const formData = new FormData();
        // formData.append('file', avatar.file);
        // formData.append('username', 'username');
        // formData.append('password', 'password');
        const formData = new FormData(e.target);
        const { username, email, password } = Object.fromEntries(formData)

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            const imgURL = await upload(avatar.file)
            await setDoc(doc(db, "users", res.user.uid), {
                username,
                email,
                avatar: imgURL,
                id: res.user.uid,
                blocked: []
            })
            await setDoc(doc(db, "userchats", res.user.uid), {
                chats: []
            })
            toast.success("account created, you can login")
        } catch (error) {
            console.log(error);
            toast.error(error.msg)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="login">
            <div className="item">
                <h2>Welcome back</h2>
                <form onSubmit={handleLogin}>
                    <input type="text" placeholder="Email" name="email" required />
                    <input type="password" placeholder="Password" name="password" required />
                    <button disabled={loading} type="submit">{loading ? "Loading..." : "Sign in"}</button>
                </form>
            </div>
            <div className="separator"></div>
            <div className="item">
                <h2>Create an account</h2>
                <form onSubmit={handleRegister}>
                    <label htmlFor="file"><img src={avatar.url || "./avatar.png"} />Upload an image</label>

                    <input type="file" id="file" style={{ display: "none" }} onChange={handleAvatar} />
                    <input type="text" placeholder="Username" name="username" required />
                    <input type="text" placeholder="Email" name="email" required />
                    <input type="password" placeholder="Password" name="password" required />
                    <button disabled={loading}>{loading ? "Loading..." : "Sign Up"}</button>
                </form>
            </div>
        </div>
    )
}

export default Login