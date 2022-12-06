import React from "react";

const Card = () => {
    return (
        <div className="rounded overflow-hidden shadow-md">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">TITLE</div>

                <p className="text-gray-500 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iusto molestiae fugiat expedita molestias voluptatibus praesentium ullam dignissimos fuga, deserunt blanditiis alias animi accusantium incidunt eligendi assumenda nemo quam. Molestias.</p>
            </div>

            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#yuhu</span>
            </div>
            
        </div>
    );
};

export default Card;