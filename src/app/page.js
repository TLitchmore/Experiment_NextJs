//app/page.js is the UI for the '/' URL
import { get } from 'http'
import Link from 'next/link'

export async function getData() {
    const res = await fetch("http://localhost:5000")
    const data = await res.json()
    console.log(data)
    return Response.json(data)
}

export const metadata = {
    title: 'Spatial Journal'
}

export default async function Page(){
    const something= getData()
    var oh2 = (await (await something).text()).toString()
    var oh = oh2
    return( <><h1>{oh}</h1><Link href="/gallery">Gallery</Link></>)
}