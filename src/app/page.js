//app/page.js is the UI for the '/' URL
import { get } from 'http'
import Link from 'next/link'

async function getData() {
    const res = await fetch("http://localhost:5000")
    const data = await res.json()
    console.log(data)
}

export const metadata = {
    title: 'Spatial Journal'
}

export default async function Page(){
    const something= getData()
    var oh = Response.json(something).text()
    return( <><h1>Hello</h1><Link href="/gallery">Gallery</Link></>)
}