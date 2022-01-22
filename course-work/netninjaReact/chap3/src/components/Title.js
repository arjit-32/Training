export default function Title({titleName,subtitleName}){
    return (
        <div>
            <h1 className="title">{titleName}</h1>
            <br />
            <h2 className="subtitle">{subtitleName}</h2>
        </div>
    )
}