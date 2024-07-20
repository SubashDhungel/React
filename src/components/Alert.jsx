import React from 'react'

const Alert = (props) => {
  let Capitalized=(word)=>{
    word=word.charAt(0).toUpperCase()+word.slice(1)
    return word
}
  return (
    <div>
      {props.alert &&  (<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{Capitalized(props.alert.type)}</strong> :{props.alert.msg}
                
            </div>
            )}
    </div>
  )
}

export default Alert
