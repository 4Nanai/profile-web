export default function VideoPlayer(props: { url: string }) {
    const videoUrl = props.url;
    return (
        <>
            <div>
                <video
                    width="100%"
                    controls // 显示播放控件
                    preload="auto" // 预加载视频元数据
                    playsInline // 在 iOS 上内联播放，防止自动全屏
                    muted     // 许多现代浏览器要求视频静音才能自动播放
                    // autoPlay // 如果需要自动播放，可以取消此行注释
                >
                    <source src={videoUrl} type="video/mp4" />
                    你的浏览器不支持播放该视频。
                </video>
            </div>
        </>
    )
}
