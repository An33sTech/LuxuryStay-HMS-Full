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
                    </ul>
                </div>
            </aside>
        </>
    );
}
export default Sidebar;