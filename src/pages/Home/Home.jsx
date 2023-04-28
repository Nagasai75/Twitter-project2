// import { getUsers } from "../../utils/localStorage";

import { useRecoilState } from "recoil";
import InstagramPost from "../../components/middleComponent/middle";
import Tweet from "../../components/tweet/tweet";
import { tweets } from "../../atoms/atoms";
import { useEffect } from "react";
import MiddleFirst from "../../components/middleFirst/middleFirst";
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

  return (
    <div >
      <MiddleFirst/>
      <Tweet />
    {tweet.map((e)=>
       <InstagramPost details={e} />
    )}
      
    </div>
  );
}
