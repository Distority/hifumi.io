import { Tweet } from "./tweet";

export const tweets = [
  Tweet({
    avatar: "hifumi",
    verified: true,
    name: "Hifumi",
    tag: "@HTakimoto",
    content: "Just realized my new coworker looks so much like Sojiro when she's eating ≧◡≦",
    image: "https://i.imgur.com/aFvLMGy.jpg",
    hashtags: ["kawaii", "hedgehog"],
    time: "9:02 AM - 1 Feb 2015",
    likes: "24k",
    retweets: "859"
  }),
  Tweet({
    avatar: "hajime",
    verified: true,
    name: "Hajime",
    tag: "@HShinoda",
    content: "I can't believe I got tickets to go to Moon Rangers! Thanks @Yun",
    image: "../assets/twitter/hajime-twitter-1.jpg",
    hashtags: ["bestcoworker", "moonranger"],
    time: "12:54 AM - 4 May 2015",
    likes: "92k",
    retweets: "12k"
  }),
  Tweet({
    avatar: "aoba",
    verified: true,
    name: "Aoba",
    tag: "@ASuzukaze",
    content: "I just locked myself in the company hallway for the second time today... I hope they don't fire me on my first day.",
    hashtags: ["10iq", "sendhelp", "baka"],
    time: "12:54 AM - 1 Jan 2015",
    likes: "21k",
    retweets: "39k"
  })
]