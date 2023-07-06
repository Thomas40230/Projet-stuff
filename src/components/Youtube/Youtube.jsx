import "./Youtube.css";
import Youtube from 'react-youtube';


const option = {
  width: '560',
  height: '315'
}

const YoutubeEmbed = ({ embedId }) => (
    <div className="video-responsive">
      <Youtube
        videoId={embedId}
        opts={option}/>
    </div>
);

export default YoutubeEmbed;