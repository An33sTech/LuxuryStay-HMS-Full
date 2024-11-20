import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProtectedRoute from "./Components/ProtectedRoute.jsx"
// import './assets/css/pace.min.css'
// import './assets/js/pace.min.js'
// import './assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css'
import './assets/plugins/metismenu/metisMenu.min.css'
import './assets/plugins/metismenu/mm-vertical.css'
import './assets/plugins/simplebar/css/simplebar.css'
import './assets/plugins/fancy-file-uploader/fancy_fileupload.css'
import './assets/css/bootstrap.min.css'
import './assets/plugins/datatable/css/dataTables.bootstrap5.min.css'
import './assets/css/style.css'
import './assets/css/bootstrap-extended.css'
import './assets/sass/main.css'
import './assets/sass/dark-theme.css'
import './assets/sass/responsive.css'
import './assets/js/bootstrap.bundle.min.js'
import './assets/js/jquery.min.js'
// import './assets/plugins/perfect-scrollbar/js/perfect-scrollbar.js'
import './assets/plugins/metismenu/metisMenu.min.js'
// import './assets/plugins/apexchart/apexcharts.min.js'
import './assets/plugins/datatable/js/jquery.dataTables.min.js'
import './assets/plugins/datatable/js/dataTables.bootstrap5.min.js'
import './assets/plugins/fancy-file-uploader/jquery.ui.widget.js'
import './assets/plugins/fancy-file-uploader/jquery.fileupload.js'
import './assets/plugins/fancy-file-uploader/jquery.iframe-transport.js'
import './assets/plugins/fancy-file-uploader/jquery.fancy-fileupload.js'
import './assets/plugins/simplebar/js/simplebar.min.js'
import './assets/plugins/peity/jquery.peity.min.js'
import './assets/js/dashboard2.js'
import './assets/js/main.js'
import RegisterPage from "./Pages/Register";
import LoginPage from "./Pages/Login"
import IndexPage from "./Pages/Index.jsx"
import UsersDetails from "./Pages/Users.jsx"
import LogoutPage from "./Pages/Logout.jsx"
import ReservationsPage from "./Pages/Reservations.jsx"
import RoomsPage from "./Pages/Rooms.jsx"
import RoomAddPage from "./Pages/RoomAddPage.jsx"
import RoomEditPage from "./Pages/RoomEditPage.jsx"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/admin/register" Component={RegisterPage} />
          <Route path="/admin/login" Component={LoginPage} />

          {/* Protected Routes */}
          <Route path="/admin" Component={() => (<ProtectedRoute><IndexPage/></ProtectedRoute>)} />
          <Route path="/admin/users" Component={() => (<ProtectedRoute><UsersDetails/></ProtectedRoute>)} />
          <Route path="/admin/logout" Component={() => (<ProtectedRoute><LogoutPage/></ProtectedRoute>)} />
          <Route path="/admin/reservations" Component={() => (<ProtectedRoute><ReservationsPage/></ProtectedRoute>)} />
          <Route path="/admin/rooms" Component={() => (<ProtectedRoute><RoomsPage/></ProtectedRoute>)} />
          <Route path="/admin/room-new" Component={() => (<ProtectedRoute><RoomAddPage/></ProtectedRoute>)} />
          <Route path="/admin/edit-room/:roomId" Component={() => (<ProtectedRoute><RoomEditPage/></ProtectedRoute>)} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
