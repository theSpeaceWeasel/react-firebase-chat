import { onAuthStateChanged } from "firebase/auth"
import Chat from "./components/chat/Chat"
import Detail from "./components/detail/Detail"
import List from "./components/list/List"
import Login from "./components/login/Login"
import Notification from "./components/notification/Notification"
import { auth } from "./lib/firebase"
import { useUserStore } from "./lib/userStore"
import { useEffect } from "react"

const App = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore()

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      // console.log(user);
      fetchUserInfo(user.uid)
    })
    return () => {
      unsub()
    };
  }, [fetchUserInfo])

  // const user = false
  console.log(currentUser);

  if (isLoading) return <div className="loading">loading...</div>
  return (
    <>
      <div className='container'>
        {
          currentUser ? (
            <>
              <List />
              <Chat />
              <Detail />
            </>

          ) : (<Login />)
        }

      </div>
      <Notification />
    </>

  )
}

export default App