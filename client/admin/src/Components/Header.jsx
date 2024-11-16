import { Link } from 'react-router-dom';
import avatar1 from '../assets/images/avatars/01.png';
import apps13 from '../assets/images/apps/13.png';
import apps14 from '../assets/images/apps/14.png';
import avatar6 from '../assets/images/avatars/06.png';
function Header() {

    return (
        <>
            <header className="top-header">
                <nav className="navbar navbar-expand align-items-center gap-4">
                    <div className="btn-toggle">
                        <a><i className="material-icons-outlined">menu</i></a>
                    </div>
                    <ul className="navbar-nav gap-1 nav-right-links align-items-center">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative" data-bs-auto-close="outside"
                                data-bs-toggle="dropdown" ><i className="material-icons-outlined">notifications</i>
                                <span className="badge-notify">5</span>
                            </a>
                            <div className="dropdown-menu dropdown-notify dropdown-menu-end shadow">
                                <div className="px-3 py-1 d-flex align-items-center justify-content-between border-bottom">
                                    <h5 className="notiy-title mb-0">Notifications</h5>
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle dropdown-toggle-nocaret option" type="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className="material-icons-outlined">
                                                more_vert
                                            </span>
                                        </button>
                                        <div className="dropdown-menu dropdown-option dropdown-menu-end shadow">
                                            <div><a className="dropdown-item d-flex align-items-center gap-2 py-2" ><i
                                                className="material-icons-outlined fs-6">inventory_2</i>Archive All</a></div>
                                            <div><a className="dropdown-item d-flex align-items-center gap-2 py-2" ><i
                                                className="material-icons-outlined fs-6">done_all</i>Mark all as read</a></div>
                                            <div><a className="dropdown-item d-flex align-items-center gap-2 py-2" ><i
                                                className="material-icons-outlined fs-6">mic_off</i>Disable Notifications</a></div>
                                            <div><a className="dropdown-item d-flex align-items-center gap-2 py-2" ><i
                                                className="material-icons-outlined fs-6">grade</i>What's new ?</a></div>
                                            <div>
                                                <hr className="dropdown-divider" />
                                            </div>
                                            <div><a className="dropdown-item d-flex align-items-center gap-2 py-2" ><i
                                                className="material-icons-outlined fs-6">leaderboard</i>Reports</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="notify-list">
                                    <div>
                                        <a className="dropdown-item border-bottom py-2" >
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="">
                                                    <img src={avatar1} className="rounded-circle" width="45" height="45" alt="" />
                                                </div>
                                                <div className="">
                                                    <h5 className="notify-title">Congratulations Jhon</h5>
                                                    <p className="mb-0 notify-desc">Many congtars jhon. You have won the gifts.</p>
                                                    <p className="mb-0 notify-time">Today</p>
                                                </div>
                                                <div className="notify-close position-absolute end-0 me-3">
                                                    <i className="material-icons-outlined fs-6">close</i>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div>
                                        <a className="dropdown-item border-bottom py-2" >
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="user-wrapper bg-primary text-primary bg-opacity-10">
                                                    <span>RS</span>
                                                </div>
                                                <div className="">
                                                    <h5 className="notify-title">New Account Created</h5>
                                                    <p className="mb-0 notify-desc">From USA an user has registered.</p>
                                                    <p className="mb-0 notify-time">Yesterday</p>
                                                </div>
                                                <div className="notify-close position-absolute end-0 me-3">
                                                    <i className="material-icons-outlined fs-6">close</i>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div>
                                        <a className="dropdown-item border-bottom py-2" >
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="">
                                                    <img src={apps13} className="rounded-circle" width="45" height="45" alt="" />
                                                </div>
                                                <div className="">
                                                    <h5 className="notify-title">Payment Recived</h5>
                                                    <p className="mb-0 notify-desc">New payment recived successfully</p>
                                                    <p className="mb-0 notify-time">1d ago</p>
                                                </div>
                                                <div className="notify-close position-absolute end-0 me-3">
                                                    <i className="material-icons-outlined fs-6">close</i>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div>
                                        <a className="dropdown-item border-bottom py-2" >
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="">
                                                    <img src={apps14} className="rounded-circle" width="45" height="45" alt="" />
                                                </div>
                                                <div className="">
                                                    <h5 className="notify-title">New Order Recived</h5>
                                                    <p className="mb-0 notify-desc">Recived new order from michle</p>
                                                    <p className="mb-0 notify-time">2:15 AM</p>
                                                </div>
                                                <div className="notify-close position-absolute end-0 me-3">
                                                    <i className="material-icons-outlined fs-6">close</i>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div>
                                        <a className="dropdown-item border-bottom py-2" >
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="">
                                                    <img src={avatar6} className="rounded-circle" width="45" height="45" alt="" />
                                                </div>
                                                <div className="">
                                                    <h5 className="notify-title">Congratulations Jhon</h5>
                                                    <p className="mb-0 notify-desc">Many congtars jhon. You have won the gifts.</p>
                                                    <p className="mb-0 notify-time">Today</p>
                                                </div>
                                                <div className="notify-close position-absolute end-0 me-3">
                                                    <i className="material-icons-outlined fs-6">close</i>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div>
                                        <a className="dropdown-item py-2" >
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="user-wrapper bg-danger text-danger bg-opacity-10">
                                                    <span>PK</span>
                                                </div>
                                                <div className="">
                                                    <h5 className="notify-title">New Account Created</h5>
                                                    <p className="mb-0 notify-desc">From USA an user has registered.</p>
                                                    <p className="mb-0 notify-time">Yesterday</p>
                                                </div>
                                                <div className="notify-close position-absolute end-0 me-3">
                                                    <i className="material-icons-outlined fs-6">close</i>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='nav-item dropdown'>
                            <a className="dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown">
                                <img src={avatar1} className="rounded-circle p-1 border" width="45" height="45" alt="" />
                            </a>
                            <div className="dropdown-menu dropdown-user dropdown-menu-end shadow">
                                <a className="dropdown-item  gap-2 py-2">
                                    <div className="text-center">
                                        <img src={avatar1} className="rounded-circle p-1 shadow mb-3" width="90" height="90"
                                            alt="" />
                                        <h5 className="user-name mb-0 fw-bold">Hello, Jhon</h5>
                                    </div>
                                </a>
                                <hr className="dropdown-divider" />
                                <hr className="dropdown-divider" />
                                <Link to={"/admin/logout"} className="dropdown-item d-flex align-items-center gap-2 py-2"><i
                                    className="material-icons-outlined">power_settings_new</i>Logout</Link>
                            </div>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};
export default Header;