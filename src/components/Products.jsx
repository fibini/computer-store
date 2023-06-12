import keyboard from "/src/assets/images/keyboard.jpg"
import mouse from "/src/assets/images/mouse.webp"
import combo from "/src/assets/images/k-and-m-combo.jpg"
import mats from "/src/assets/images/mats.jpg"
import fans from "/src/assets/images/fans.jpg"
import rgbcase from "/src/assets/images/case.jpg"
export default function Products()
{
    return(
        <>
        <section>
            <div className="flex flex-col items-center gap-4 font-bold text-3xl">
                <div className=" text-center border-b-2 border-slate-300">
                    <h2 className="pt-5">KEYBOARDS</h2>
                    <img src={keyboard} alt="rgb keyboard" className=" w-80 h-80 py-5" />
                </div>
                <div className=" text-center border-b-2 border-slate-300">
                    <h2>MICE</h2>
                    <img src={mouse} alt="rgb keyboard" className=" w-80 h-80 py-5" />
                </div>
                <div className=" text-center border-b-2 border-slate-300">
                    <h2>COMBOS</h2>
                    <img src={combo} alt="rgb keyboard" className=" w-80 h-80 py-5" />
                </div>
                <div className=" text-center border-b-2 border-slate-300">
                    <h2>MOUSE MATS</h2>
                    <img src={mats} alt="rgb keyboard" className=" w-80 h-80 py-5" />
                </div>
                <div className=" text-center border-b-2 border-slate-300">
                    <h2>FANS</h2>
                    <img src={fans} alt="rgb keyboard" className=" w-80 h-80 py-5" />
                </div>
                <div className=" text-center ">
                    <h2>CASES</h2>
                    <img src={rgbcase} alt="rgb keyboard" className=" w-80 h-80 py-5" />
                </div>
            </div>
        </section>
        </>
    )
}