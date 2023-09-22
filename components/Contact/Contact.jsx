
import Add from "./add.png";
import Circle from "./Group 162526.png";

export default function Contact() {
    return (
        <section className="w-full contact py-24">
            <div className="float-right mr-[10%]">
                <img src={Add.src} alt="Add image" />
            </div>
            <section className="flex justify-between w-[80%] mx-auto mt-32 mb-24 sm:flex-col">
                <div className="w-[60%] sm:w-[100%] sm: mb-7">
                    <h2 className="font-bold text-6xl text-white md:overflow-y-hidden">Contact us for the service you want to use</h2>
                </div>
                <div className="text-white w-[204px] h-[58px] bg-[#5454D4] flex items-center justify-center my-auto">Contact us </div>
            </section>
            <div className="ml-[10%]">
                <img src={Circle.src} alt="Add image" />
            </div>
        </section>
    )
}