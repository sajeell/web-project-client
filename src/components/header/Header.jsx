import "./Header.scss"

export default function Header() {
    document.title = "Dashboard"
    return (
        <div className="header-wrapper">
            <div className="header">
                <div className="header-title">
                    <span>EVALY</span>
                </div>
                <ul className="header-items">
                    <li className="header-item">RESULT</li>
                    <li className="header-item">HELP</li>
                    <li className="header-item">LOGOUT</li>
                </ul>
            </div>
        </div>
    )
}