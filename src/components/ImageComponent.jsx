/* eslint-disable react/prop-types */

export default function ImageComponent({id, children, onClick}) {



    return (
        <>
            <h2 onClick={() => onClick(id)}>Image Component {children}</h2>
        
        </>
    )
}