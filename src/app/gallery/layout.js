export default function GalleryLayout({
    children
}){
    return(
        <section>
            {/*Include shared UI here*/}
            <nav></nav>
            {children}
        </section>

    )
}