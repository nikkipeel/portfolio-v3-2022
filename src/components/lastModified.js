import React from "react"

function LastModified() {
    const last_modified = new Date(document.lastModified); 
       
  return (
    <>
        <div className="flex mx-auto my-4 justify-center font-mono text-sm"><strong className="mr-2">Last modified:</strong>{" "} {last_modified.toDateString()}</div> 
    </>
  )
}

export default LastModified
