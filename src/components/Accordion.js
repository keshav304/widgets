import React, {useRef, useState} from 'react';




const Accordion = ({items})=>{
    const [currentIndex, setIndex] = useState(null)

    const onTitleClicked = (index)=>{
        setIndex(index)
    }
    const renderedItem = items.map((item,index)=>{
        const active = index === currentIndex ? 'active':''
        return(
            <React.Fragment key={item.title}>
                <div 
                className={`title ${active}`} 
                onClick={()=>onTitleClicked(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`} >
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    });
    return(
        <div className="ui styled accordion">
            {renderedItem}
        </div>
    );
}
export default Accordion