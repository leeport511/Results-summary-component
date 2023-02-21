import { data } from "./data/data";
import "./assets/fonts/HankenGrotesk-VariableFont_wght.ttf";

function App() {
    return (
        <div className="container mx-auto h-screen xl:flex xl:items-center xl:justify-center">
            <div className="xl:flex xl:h-[50%] xl:items-center xl:justify-center xl:rounded-3xl xl:shadow-xl xl:shadow-light-lavender xl:w-[50%]">
                <section className="items-center justify-center rounded-b-3xl bg-gradient-to-b from-light-slate-blue to-light-royal-blue p-4 text-center xl:flex xl:h-[100%] xl:w-[100%] xl:flex-col xl:rounded-3xl">
                    <h4 className="mt-3 text-lg font-medium text-gray-300">
                        Your Result
                    </h4>
                    <div className="mt-5 inline-block">
                        <div className="h-40 w-40 rounded-full bg-gradient-to-b from-violet-blue to-persian-blue pt-8">
                            <p className="mb-3 text-6xl font-extrabold text-white">
                                76
                            </p>
                            <p className="text-base font-medium text-gray-400">
                                of 100
                            </p>
                        </div>
                    </div>
                    <div className="mt-5 p-4">
                        <h3 className="mb-2 text-2xl font-bold text-white">
                            Great
                        </h3>
                        <p className="text-base font-medium text-gray-400">
                            You scored higher than 65% of the
                            <br />
                            people who have taken these tests.
                        </p>
                    </div>
                </section>
                <section className="p-6 xl:w-[100%] xl:rounded-3xl xl:m-6">
                    <h3 className="mb-5 text-lg font-bold text-dark-gray-blue">
                        Summary
                    </h3>
                    {data.map((singleData, i) => {
                        return (
                            <div
                                key={i}
                                className={`mt-4 flex justify-between rounded-lg p-4 ${singleData.bgcolor} bg-opacity-10`}
                            >
                                <div className="flex gap-3 ">
                                    <img
                                        src={singleData.icon}
                                        alt={singleData.category}
                                    />
                                    <p
                                        className={`${singleData.color} font-bold`}
                                    >
                                        {singleData.category}
                                    </p>
                                </div>
                                <div className="flex">
                                    <p className="font-bold">
                                        {singleData.score}
                                        &nbsp;
                                    </p>
                                    <p className="font-bold text-light-lavender">
                                        {" "}
                                        / 100
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                    <div className="mt-8 text-center">
                        <button className=" w-[100%] rounded-full bg-dark-gray-blue from-light-slate-blue to-light-royal-blue p-4 font-medium tracking-wider text-white hover:bg-gradient-to-b">
                            Continue
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;
