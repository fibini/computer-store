import cleaning from "/src/assets/images/cleaning.jpg"
import upgrades from "/src/assets/images/upgrades.webp"
import virus from "/src/assets/images/virus-protection.webp"
import playstation from "/src/assets/images/playstation-5.jpg"
export default function Services()
{
    return(
        <>
        <section className=" flex flex-col text-center font-bold text-3xl gap-5">
            <h1 className="text-4xl font-bold">SERVICES</h1>
            <div>
                <h2 className=" py-5">Computer cleaning / Dust removal </h2>
                <img src={cleaning} alt=" computer cleaning" />
            </div>
            <div>
                <h2 className=" py-5">Software and Hardware upgrades</h2>
                <img src={upgrades} alt=" hardware upgrades" />
            </div>
            <div>
                <h2 className=" py-5">Virus Protection</h2>
                <img src={virus} alt=" virus protection" />
            </div>
            <div>
                <h2 className=" py-5">Console service and repairs</h2>
                <img src={playstation} alt=" ps5 console" />
            </div>
        </section>
        </>
    )
}