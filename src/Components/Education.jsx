
export default function Education({place, degree, year, desc}){
    return(
        <div>
            <br/>
            <h3>{place}</h3>
            <h5>{degree} | {year}</h5>
            <ul><li>{desc}</li></ul>

        </div>
    )
}