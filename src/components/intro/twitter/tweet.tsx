import * as React from "react";
import {
  Card,
  CardContent,
  Container,
  Content,
  Icon,
  Level,
  LevelItem,
  LevelLeft,
  Media,
  MediaContent,
  MediaLeft
} from "bloomer";
import verified from "./verified.png";

interface TweetMetadata {
  readonly [girl: string]: {
    tag: string;
    verified: boolean;
    avatar: string;
  };
}

const tweetMetadata: TweetMetadata = Object.entries({
  hifumi: {
    tag: "@HTakimoto",
    verified: true,
  },
  hajime: {
    tag: "@HShinoda",
    verified: true
  },
  aoba: {
    tag: "@ASuzukaze",
    verified: true
  }
}).reduce((all, [k, v]) => ({
  ...all,
  [k]: {
    ...v,
    avatar: require(`./avatars/${k}.jpg`)
  }
}), {});

interface TweetProps {
  avatar: string;
  name: string;
  tag: string;
  verified: boolean;
  content: string;
  hashtags: string[];
  time: string;
  retweets: string;
  likes: string;
}

export interface MarkdownTweetProps {
  name: string;
  hashtags: string[];
  date: string;
  retweets: string;
  likes: string;
  html: string;
}

export const Tweet = (props: TweetProps) => {
  const badge = (
    <span className="icon is-32x32 is-vcentered">
      <img src={verified} alt="" style={{ marginLeft: "10px" }}/>
    </span>
  );

  const hashTags = props.hashtags.map(tag => (
    <a href={tag} key={tag}>{`#${tag} `}</a>
  ));

  const avatar = tweetMetadata[props.name.toLowerCase()].avatar;

  return (
    <div className="tweet-container carousel-cell">
      <Card className="tweet">
        <CardContent>
          <Media>
            <MediaLeft>
              <figure className="image is-48x48">
                <img src={avatar} alt=""/>
              </figure>
            </MediaLeft>
            <MediaContent>
              <Container>
                <p className="title is-4 tweet-name is-flex">
                  {props.name}
                  {props.verified && badge}
                </p>
                <p className="subtitle has-text-grey is-6">{props.tag}</p>
              </Container>
            </MediaContent>
          </Media>
          <Content>
            <div dangerouslySetInnerHTML={{ __html: props.content}}/>
            <br/>
            {props.hashtags && hashTags}
            <br/>
            <time>{props.time}</time>
            <Level>
              <LevelLeft>
                <LevelItem>
                  <span className="tweet-controls has-text-info">
                    <Icon className="fas fa-retweet"/>
                    <span>{props.retweets}</span>
                  </span>
                </LevelItem>
                <LevelItem>
                  <span className="tweet-controls has-text-danger">
                    <Icon className="far fa-heart"/>
                    <span>{props.likes}</span>
                  </span>
                </LevelItem>
              </LevelLeft>
            </Level>
          </Content>
        </CardContent>
      </Card>
    </div>
  );
};

export const MarkdownTweet = (props: MarkdownTweetProps) => {
  const name = props.name.toLowerCase();
  const { verified: isVerified, tag, avatar } = tweetMetadata[name];

  return (
    <Tweet
      avatar={avatar}
      name={props.name}
      tag={tag}
      verified={isVerified}
      content={props.html}
      hashtags={props.hashtags}
      time={props.date}
      retweets={props.retweets}
      likes={props.likes}/>
  );
};
