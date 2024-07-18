import React from 'react'

const Message = (props) => {
  return (
    <div className='row my-4'>
        <div className='message-box' style={{right: props.isMessageFromUser ? "-12vw" : undefined, left: props.isMessageFromUser ? undefined : "0px",}}>
            {props.isMessageFromUser ? (<div>You said : {props.message}</div>) : (<div>Bot Says : {props.message}</div>)}
        </div>
    </div>
  )
}

export default Message
