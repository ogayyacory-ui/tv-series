import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';

import Home from './pages/Home';
import Discover from './pages/Discover/Discover';

import Feed from './pages/Feed/Feed';
import PostDetail from './pages/posts/PostDetail';
import CreatePost from './pages/posts/CreatePost';

import Movies from './pages/movies/Movies';
import MovieDetailsPage from './pages/movies/MovieDetails';

import ClubList from './pages/Clubs/ClubList';
import ClubDetail from './pages/Clubs/ClubDetail';
import ClubCreate from './pages/Clubs/ClubCreate';
import ClubManage from './pages/Clubs/ClubManage';

import ProfileView from './pages/Profile/ProfileView';
import ProfileEdit from './pages/Profile/ProfileEdit';

import WatchedList from './pages/Watched/WatchedList';

import Settings from './pages/Settings/Settings';
import Help from './pages/Help/Help';

import NotFound from './pages/NotFound/NotFound';

import './App.css';

function App() {
  return (
    <div className="app-layout">
      {/* Sidebar */}
      <Navbar />

      {/* Main application content */}
      <main className="app-main">
        <Routes>

          {/* ================= PUBLIC ================= */}

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* ================= HOME ================= */}

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          {/* ================= FEED ================= */}

          <Route
            path="/feed"
            element={
              <ProtectedRoute>
                <Feed />
              </ProtectedRoute>
            }
          />

          <Route
            path="/posts/:id"
            element={
              <ProtectedRoute>
                <PostDetail />
              </ProtectedRoute>
            }
          />

          <Route
            path="/posts/new"
            element={
              <ProtectedRoute>
                <CreatePost />
              </ProtectedRoute>
            }
          />

          {/* ================= MOVIES ================= */}

          <Route
            path="/movies"
            element={
              <ProtectedRoute>
                <Movies />
              </ProtectedRoute>
            }
          />

          <Route
            path="/movies/:tmdbId"
            element={
              <ProtectedRoute>
                <MovieDetailsPage />
              </ProtectedRoute>
            }
          />

          {/* ================= DISCOVER ================= */}

          <Route
            path="/discover"
            element={
              <ProtectedRoute>
                <Discover />
              </ProtectedRoute>
            }
          />

          {/* ================= CLUBS ================= */}

          <Route
            path="/clubs"
            element={
              <ProtectedRoute>
                <ClubList />
              </ProtectedRoute>
            }
          />

          <Route
            path="/clubs/new"
            element={
              <ProtectedRoute>
                <ClubCreate />
              </ProtectedRoute>
            }
          />

          <Route
            path="/clubs/:id"
            element={
              <ProtectedRoute>
                <ClubDetail />
              </ProtectedRoute>
            }
          />

          <Route
            path="/clubs/:id/manage"
            element={
              <ProtectedRoute>
                <ClubManage />
              </ProtectedRoute>
            }
          />

          {/* ================= PROFILE ================= */}

          <Route
            path="/profile/:id"
            element={
              <ProtectedRoute>
                <ProfileView />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile/:id/edit"
            element={
              <ProtectedRoute>
                <ProfileEdit />
              </ProtectedRoute>
            }
          />

          {/* ================= WATCHED ================= */}

          <Route
            path="/watched"
            element={
              <ProtectedRoute>
                <WatchedList />
              </ProtectedRoute>
            }
          />

          {/* ================= SETTINGS ================= */}

          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />

          {/* ================= HELP ================= */}

          <Route
            path="/help"
            element={<Help />}
          />

          {/* ================= 404 ================= */}

          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;