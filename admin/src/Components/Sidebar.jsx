import { Link } from 'react-router-dom';
import logoIcon from '../assets/images/logo-icon.png';
function Sidebar() {
    return (
        <>
            <aside className="sidebar-wrapper" data-simplebar="true">
                <div className="sidebar-header">
                    <div className="logo-icon">
                        <img src={logoIcon} className="logo-img" alt="" />
                    </div>
                    <div className="logo-name flex-grow-1">
                        <h5 className="mb-0">Maxton</h5>
                    </div>
                    <div className="sidebar-close">
                        <span className="material-icons-outlined">close</span>
                    </div>
                </div>
                <div className="sidebar-nav">
                    <ul className='metismenu' id='sidenav'>
                        <li>
                            <Link to={"/admin"}>
                                <div className="parent-icon"><i className="material-icons-outlined">home</i>
                                </div>
                                <div className="menu-title">Dashboard</div>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/admin/users"}>
                                <div className="parent-icon"><i className="material-icons-outlined">group</i>
                                </div>
                                <div className="menu-title">Users</div>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/admin/reservations"}>
                                <div className="parent-icon"><i className="material-icons-outlined">event_available</i>
                                </div>
                                <div className="menu-title">Reservations</div>
                            </Link>
                        </li>
                        <li>
                            <a className="has-arrow">
                                <div className="parent-icon"><i className="material-icons-outlined">bedroom_parent</i>
                                </div>
                                <div className="menu-title">Rooms</div>
                            </a>
                            <ul>
                                <li><Link to={"/admin/rooms"}><i className="material-icons-outlined">arrow_right</i>Rooms</Link>
                                </li>
                                <li><Link to={"/admin/room-new"}><i className="material-icons-outlined">arrow_right</i>Add New Room</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to={"/admin/feedbacks"}>
                                <div className="parent-icon"><i className="material-symbols-outlined">thumbs_up_down</i>
                                </div>
                                <div className="menu-title">Feedbacks</div>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/admin/register"}>
                                <div className="parent-icon"><i className="material-symbols-outlined">person_add</i>
                                </div>
                                <div className="menu-title">Register</div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
}
export default Sidebar;