export default function PageBanner({title}:{title:string}){
    return(
        <div className="page_banner">
            <h1 className="page_title">{title}</h1>
        </div>
    )
}