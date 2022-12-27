import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './style.css'
export default function Fecting() {
    const [data, setData] = useState('')
    const [state, setState] = useState('')
    const [change, setChange] = useState(true)
    const [res, setRes] = useState([])
    const refer =useRef(null)
    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${data}`)
            .then((res) => res.json()).then((e) => setState(e)).catch(() => console.log('error'))
    }, [data])
    const click = (e) => {
        e.preventDefault()
        console.log(state.items)
        setRes(state.items)
        console.log(res)
    }
    const funChange = (e) => {
        setData(e)
    }
    return (
        <div>
            <div><h1>BOOK SEARCH</h1></div>
            <input type="text" onChange={(e) => (funChange(e.target.value))} placeholder="Search for book"/>
            <button onClick={click}>search</button>
            {res.map((e) => {
                return (
                    <div className='main-div'>
                        <div className='second-div'>
                            {change ?<div className='img'> <a href={e.volumeInfo.infoLink}><img ref={refer}  className='imd-tag' src={e.volumeInfo.imageLinks.smallThumbnail} alt="img" /></a></div> : 
                            <div className='third-div'><div className='div-1-title'>{e.volumeInfo.title}</div>
                            <div className='div-authors'>{e.volumeInfo.authors[0]}</div>
                            <div className='div-pageCount'>{e.volumeInfo.pageCount}</div> </div>}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
