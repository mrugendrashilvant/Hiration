import React from 'react'
const cardStyle = {
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    width: "25%",
}
export default function Cards(props) {
    // const [link, setLink] = React.useState("none")
    function showTag(e) {
        document.getElementById('hidden-link').style.display = "block"
        // setLink("block")
        // alert(link)
    }
    function hide() {
        document.getElementById('hidden-link').style.display = "none"
        // setLink("none")
        // alert(link)
    }
    return (
        <div className='rounded-md px-4 py-2 flex justify-between duration-200' onMouseEnter={(e) => { showTag(e) }} onMouseLeave={hide} style={cardStyle}>
            {props.icon}
            <div className="right flex flex-col">
                <h4 className="text-xl font-semibold text-gray-700">{props.title}</h4>
                <p className="font-light">{props.text}</p>
                <p className="text-orange-500 mt-4 hidden duration-200" id="hidden-link">Browse ATS Friendly Designs -</p>
            </div>
        </div>
    )
}


