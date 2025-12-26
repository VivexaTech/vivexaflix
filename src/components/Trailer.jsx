export default function Trailer({key}) {
    return (
        <>
            <iframe width="560" height="315"
                src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&loop=1&playlist=${key}`}
                title="YouTube video player"
                frameborder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowfullscreen>
            </iframe>
        </>
    )
}