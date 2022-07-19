import React,{useState} from 'react';
import Card from './Card'
import image1 from "../../src/images/image-daniel.jpg"
import image2 from "../../src/images/image-jonathan.jpg"
import image3 from "../../src/images/image-jeanette.jpg"
import image4 from "../../src/images/image-patrick.jpg"
import image5 from "../../src/images/image-kira.jpg"




function App() {
  const[user,setUser]= useState([
    {
      name:"Daniel Clifford",

      account:"Verified Graduate",

      intro:"I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",

      body:"I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ",
      
      image:image1,

      classCSS:"card1",

      bgImg:"../src/images/bg-pattern-quotation.svg",

      id :"1"


    },
    {
      name:"Jonathan Walters",

      account:"Verified Graduate",

      intro:"The team was very supportive and kept me motivated",

      body:"I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best        investments I’ve made in myself. ",

      image:image2,

      classCSS:"card2",

      id :"2"

    },
    {
      name:"Jeanette Harmon",

      account:"Verified Graduate",

      intro:"An overall wonderful and rewarding experience",

      body:"Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.",

      image: image3,

      classCSS:"card3",

      id :"3"

    },
    {
      name:"Patrick Abrams",

      account:"Verified Graduate",

      intro:"Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",

      body:"The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.",

      image:image4,

      classCSS:"card4",

      id :"4"

    },
    {
      name:"Kira Whittle",

      account:"Verified Graduate",

      intro:"Such a life-changing experience. Highly recommended!",

      body:"Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!",

      image:image5,
      
      classCSS:"card5",

      id :"5"


    }
  ]);



  return (
    <main className="main">

      {user.map((users)=>(
        <Card 
          nameProp ={users.name}
          account = {users.account}
          intro = {users.intro}
          body = {users.body}
          image = {users.image}
          classCssProp = {users.classCSS}
          key = {users.id}
        />
      ))}
     

    </main>
  );
}

export default App;
