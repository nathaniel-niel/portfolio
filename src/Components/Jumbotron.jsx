import React from "react";

const Jumbotron = () => {
    return (
        <div className="rounded border overflow-hidden">
            <div className="px-6 py-12">
                <div className="font-bold text-xl mb-2">TITLE</div>
                <div className="text-base text-gray-700 mb-4"> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quidem voluptate facere blanditiis consequatur consequuntur quis optio reprehenderit possimus, assumenda deserunt impedit qui! Deleniti officia ipsam animi accusamus vel reprehenderit.
                </div>
                <div className="border border-gray-200 mb-4">
                </div>
                <div className="text-base mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ipsa!
                </div>
                <button className="rounded bg-blue-600 px-4 py-2 text-white font-semibold">Check it out</button>

            </div>

        </div>
    );
}

export default Jumbotron;