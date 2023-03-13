
export default function Nft(props) {
    return <>
        <div className="container">
            <div className="img-placeholder padding">
                <img src={`../images/${props.img}`} alt="image" />
            </div>
            <h2 className="padding-text">{props.name}</h2>
            <p className="padding-text soft-blue">Our Equilibrium collection promotes balance and calm </p>
            <div className="info padding-text">
                <div className="info-left">
                    <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z" fill="#00FFF8" /></svg>
                    <p>{props.price}</p>
                </div>
                <div className="info-right">
                    <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg"><path d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z" fill="#8BACD9" /></svg>
                    <p className="soft-blue">{props.time}</p>
                </div>
            </div>
            <div className="line"></div>
            <div className="author-info">
                <img src={`../images/${props.authorimg}`} height={30} alt="" />
                <p><span className="soft-blue">Creation of</span> {props.authorname}</p>
            </div>
        </div>
    </>
}