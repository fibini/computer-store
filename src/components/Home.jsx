import services from '/src/assets/images/services.jpg'
export default function Home()
{
    return(
        <>
        <section className=" pl-5 pr-5">
            <div className=" text-center">
                <h1 className=' font-bold text-xl pt-3'>Featured Product</h1>
                <div className=' pt-3'>
                    <img src={services} alt="" className="" />
                </div>
            </div>
            <div className=" text-center">
                <h2 className=' font-bold text-xl pt-3'>Specials</h2>
                <div className=' pt-3 pb-3'>
                    <img src={services} alt="" className=" h-full" />
                </div>
            </div>
        </section>
        </>
    )
}