// import { getUsers } from "../../utils/localStorage";

import { useRecoilState } from "recoil";
import InstagramPost from "../../components/middleComponent/middle";
import Tweet from "../../components/tweet/tweet";
import { tweets } from "../../atoms/atoms";
import { useEffect } from "react";
import MiddleFirst from "../../components/middleFirst/middleFirst";
///*******md components******** */

import Trends from "../../Components/Trends/Trend";
import Search from "../../Components/Search/Search";
import FollowComponent from "../../Components/FollowComponent/Follow";
import Sidebar from "../../Components/Sidebar/Sidebar";
///*******md components******** */

export function Home() {
  const [tweet, setTweets] = useRecoilState(tweets);
 
  useEffect(() => {
    fetchData();
  }, []);
  
  function fetchData() {
    fetch("http://localhost:3000/tweets?_limit=10")
      .then((r) => r.json())
      .then((data) => setTweets(data));
  }
    console.log("tweets............", tweet);
    function Sidebart(){
      return(
        <div style={{border:"1px solid",height:"100vh",width:"315px"}}></div>
      )
    }
  return (
    <div style={{ display: "flex" }}>
      <div>
        {" "}
       
        <Sidebar/>
      </div>
      <div style={{ width: "600px" }}>
        <div style={{ border: "3px solid #f7f9f9" }}>
        
            <MiddleFirst  />
          
          <Tweet />
        </div>

        {tweet.map((e) => (
          <InstagramPost details={e} />
        ))}
      </div>
      <div>
        <Search />
        <Trends />
        <FollowComponent />
      </div>
    </div>
  );
}
  // <>
  //     <div>
        //  <MiddleFirst />
        // <Tweet />
        // {tweet.map((e) => (
        //   <InstagramPost details={e} />
        // ))}
  //     </div>
      // <Search />
      // <Trends />
      // <FollowComponent />
  //   </>