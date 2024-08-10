import React from 'react'

const Message = (props) => {
  return (
    <div className='row my-4'>
        <div className='message-box' style={{right: props.isMessageFromUser ? "-11vw" : undefined, left: props.isMessageFromUser ? undefined : "0px", boxShadow:"3px 3px 1px -1px grey", textAlign: props.isMessageFromUser ? "right" : "left"}}>
            {props.isMessageFromUser ? (<div>You said : {props.message}</div>) : (<div>Bot Says : {props.message}</div>)}
        </div>
    </div>
  )
}

export default Message
