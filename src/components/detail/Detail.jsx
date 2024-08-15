import "./detail.css"
const Detail = () => {
    return (
        <div className="detail">
            <div className="user">
                <img src="./avatar.png" />
                <h2>Jane Doe</h2>
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
            <div className="btn">
                Block User
            </div>
            <div className="btn logout">
                Logout
            </div>
        </div>
    )
}

export default Detail
