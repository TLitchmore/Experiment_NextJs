//app/page.js is the UI for the '/' URL
import Link from 'next/link'

export const metadata = {
    title: 'Spatial Journal'
}
export default function Page(){
    return( <><h1>Hello, Next!</h1><Link href="/gallery">Gallery</Link></>)
}