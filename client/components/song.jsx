var Song = ({video, handleVideoListEntryTitleClick}) => (
    <div className="">
      <div className="">{ /* friends name */}

      </div>
      <div className="">
        <div className=""
          onClick={() => handleSongClick(song)}>
          {/* ong play button */}</div>
        <div className="">{/* song title */}</div>
        <div className="">{/* artist */}</div>
      </div>
    </div>
  );

  // `var` declarations will only exist globally where explicitly defined
export default Song;