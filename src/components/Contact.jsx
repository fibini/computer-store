import { BsFillEnvelopeFill, BsPhone, BsWhatsapp, BsInstagram, BsTwitter, BsLinkedin, BsFacebook } from "react-icons/bs"

export default function Contact()
{
    return(
        <>
        <section className=" flex flex-col items-center">
            <div className=" py-5">
                <h1 className=" text-xl font-bold">Contact</h1>
            </div>
            <div className="flex gap-2 items-center py-5">
                <BsFillEnvelopeFill size="25" /><p className=" text-xl">: test@gmail.com</p>
            </div>
            <div className=" flex items-center gap-2 py-5">
                <BsPhone size="50" /><p className=" text-5xl">/</p><BsWhatsapp size="50" /><p className=" text-2xl">: (999)999-9999</p>
            </div>
            <div className="flex items-center gap-8 py-10">
                <BsFacebook size="75" cursor="pointer" />
                <BsInstagram size="75" cursor="pointer" />
                <BsLinkedin size="75" cursor="pointer" />
                <BsTwitter size="75" cursor="pointer" />
            </div>
        </section>
        </>
    )
}