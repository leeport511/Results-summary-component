import { data } from "./data/data";

console.log(data[0].category);

function App() {
    return (
        <div>
            <section>
                <h4>Your Result</h4>
                <div>
                    <p>76</p>
                    <p>of 100</p>
                </div>
                <div>
                    <h3>Great</h3>
                    <p>
                        You scored higher than 65% of the people who have taken
                        these tests.
                    </p>
                </div>
            </section>
            <section>
                <h3>Summary</h3>
                {data.map((singleData, i) => {
                    return (
                        <div key={i}>
                            <img
                                src={singleData.icon}
                                alt={singleData.category}
                            />
                            <p>{singleData.category}</p>
                            <p>{singleData.score} / 100</p>
                        </div>
                    );
                })}
            </section>
            <div>
                <button>Continue</button>
            </div>
        </div>
    );
}

export default App;
