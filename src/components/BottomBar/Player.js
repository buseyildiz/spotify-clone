import { Icon } from "icons";
import CustomRange from "components/CustomRange";
import { useAudio, useFullscreen,useToggle } from "react-use";
import { secondsToTime } from "utils";
import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setControls, setPlaying, setSidebar } from "stores/player";
import FullScreenPlayer from "components/FullScreenPlayer";

function Player() {

  const fsRef = useRef()
  const [show,toggle] = useToggle(false)
  const isFullscreen = useFullscreen(fsRef, show, {onClose: () => toggle(false)});

  const dispatch = useDispatch();
  const { current, sidebar } = useSelector((state) => state.player);
  const [audio, state, controls, ref] = useAudio({
    src: current?.src,
  });

  useEffect(() => {
    controls.play();
  }, [current]);

  useEffect(()=>{
      dispatch(setPlaying(state.playing))
  },[state.playing])

  useEffect(() => {
    dispatch(setControls(controls));
  }, []);

  const volumeIcon = useMemo(() => {
    if (state.volume === 0 || state.muted) return "volumeMuted";

    if (state.volume > 0 && state.volume < 0.33) return "volumeLow";

    if (state.volume >= 0.33 && state.volume < 0.66) return "volumeNormal";

    return "volumeFull";
  }, [state.volume, state.muted]);

  return (
    <div className="flex justify-between px-4 items-center h-full">
      <div className="min-w-[11.25rem] w-[30%] ">
        {current && (
          <div className="flex items-center">
            <div className="flex items-center mr-3">
              {!sidebar && (
                <div className="w-14 h-14 mr-2 flex-shrink-0 relative group">
                  <img src={current.image} />
                  <button className="w-6 h-6 rotate-90 rounded-full opacity-0 group-hover:opacity-60 hover:!opacity-100 hover:scale-[1.06] absolute top-1 right-1 bg-black  flex items-center justify-center"
                  onClick={() => dispatch(setSidebar(true))}>
                    <Icon size={16} name="arrowLeft" />
                  </button>
                </div>
              )}
              <div className="w-14 h-14 mr-3 ">
                <h6 className="text-sm line-clamp-1">{current.title}</h6>
                <p className="text-[0.688rem] text-white text-opacity-70">
                  {current.artist}
                </p>
              </div>
            </div>
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <Icon size={16} name="heart" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <Icon size={16} name="pictureInPicture" />
            </button>
          </div>
        )}
      </div>
      <div className=" max-w-[45.125rem] pt-2 w-[40%] flex flex-col items-center px-4 ">
        <div className="flex items-center gap-x-2">
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={16} name="shuffle" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={16} name="playerPrev" />
          </button>
          <button
            className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full hover:scale-[1.06]"
            onClick={controls[state?.playing ? "pause" : "play"]}
          >
            <Icon size={16} name={state?.playing ? "pause" : "play"} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={16} name="playerNext" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon size={16} name="repeat" />
          </button>
        </div>
        <div className="w-full flex items-center gap-x-2 mt-1.5">
          {audio}
          <div className="text-[0.688rem] text-white text-opacity-70">
            {secondsToTime(state?.time)}
          </div>
          <CustomRange
            step={0.1}
            min={0}
            max={state?.duration || 1}
            value={state?.time}
            onChange={(value) => controls.seek(value)}
          />
          <div className="text-[0.688rem] text-white text-opacity-70">
            {secondsToTime(state?.duration)}
          </div>
        </div>
      </div>
      <div className="min-w-[11.25rem] w-[30%] flex justify-end items-center">
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon size={16} name="lyrics" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon size={16} name="queue" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <Icon size={16} name="device" />
        </button>
        <button
          onClick={controls[state.muted ? "unmute" : "mute"]}
          className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"
        >
          <Icon size={16} name={volumeIcon} />
        </button>
        <div className="w-[6rem] max-w-full">
          <CustomRange
            step={0.01}
            min={0}
            max={1}
            value={state.muted ? 0 : state?.volume}
            onChange={(value) => {
              controls.unmute();
              controls.volume(value);
            }}
          />
        </div>
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100" onClick={toggle}>
          <Icon size={16} name="fullScreen" />
        </button>
      </div>
      <div ref={fsRef}>
        {isFullscreen && (
        <FullScreenPlayer
        toggle={toggle}
        state={state}
        controls={controls}
        volumeIcon={volumeIcon}
        />) 
        }
      </div>
    </div>
  );
}

export default Player;
