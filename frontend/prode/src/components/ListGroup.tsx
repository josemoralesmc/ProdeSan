import React from "react";

const ListGroup = () => {
  return (
    <div className="h-full flex justify-center">
      <div className="h-20 w-80  shadow-lg mb-4 ml-3 mr-3 bg-white/75 rounded-2xl flex content-center">
        <div className="w-1/4 mt-3 mb-4 flex items-center justify-center">
          <img
            className="max-w-full max-h-full "
            src="https://a1.espncdn.com/combiner/i?img=%2Fi%2Fleaguelogos%2Fsoccer%2F500%2F23.png"
            alt=""
          />
        </div>
        <div className="w-full flex-column justify-center text-center">
          <h2 className="mt-2">Nombre grupo</h2>
          <h4 className="mt-2">Nombre Liga</h4>
        </div>
      </div>
    </div>
  );
};

export default ListGroup;
