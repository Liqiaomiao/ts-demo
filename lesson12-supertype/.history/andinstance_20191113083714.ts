import React from 'react'

const Layout:React.FunctionComponent & {Header: React.FunctionComponent}=()=>{
    return (
        React.createElement('div',null,'hello')
    )
}
Layout.Header=()=>{
    return (
        React.createElement('div',null,'hello')
    )
}
