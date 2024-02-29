// ================ youtube 삽입 ================
// YouTube Player API 스크립트를 동적으로 로드합니다.
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// API가 로드된 후에 실행될 함수를 정의합니다.
var player;
function onYouTubeIframeAPIReady() {
  // 플레이어를 생성합니다.
  player = new YT.Player("player", {
    height: "390",
    width: "640",
    videoId: "fB8Kcjp-nX0", // 여기에 재생하고자 하는 유튜브 영상의 ID를 입력합니다.
    playerVars: {
      autoplay: 0, // 자동 재생 여부
      controls: 1, // 재생 컨트롤러 표시 여부
      loop: 1, // 반복 재생 여부
      rel: 0, // 관련 영상 표시 여부
      showinfo: 0, // 영상 정보 표시 여부
      modestbranding: 1, // YouTube 로고 표시 여부
    },
    events: {
      onReady: onPlayerReady,
    },
  });
}

function onPlayerReady(event) {
  // 플레이어가 준비되었을 때 실행할 작업을 여기에 추가할 수 있습니다.
  // 예: event.target.playVideo();
}