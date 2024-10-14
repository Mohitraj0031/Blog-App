import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import PostList from "./components/PostList";
import PostListProvider from "./store/post-list-store";
import CreatePost from "./components/CreatePost";

function App() {

  const [selectedTab, setSelectedTab] = useState("Home");
  
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab}  setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          
            {selectedTab === "Home" ? (<center> <PostList/> </center>) : (<CreatePost/>)}
      
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
