import React from "react";
import MusicCard from "./MusicCard";
const AcceptMunic = ({ allSong, isLoading }) => {
  return (
    <div className="p-4 bg-white rounded-md shadow">
      <div className="ll">
        <div className="top_title bg-[#F8FAFC] p-2 py-4 grid grid-cols-8 rounded-sm text-sm font-semibold">
          <span className="col-span-2">TITLE</span>
          <div className="col-span-6 grid grid-cols-5">
            <span className="">RELEASE ID</span>
            <span className="">ARTIST</span>
            <span className="">LABEL</span>
            <span className="">UPC</span>
            <span className="">RELEASE DATE</span>
          </div>
        </div>
        <div className="client_container flex flex-col gap-2 mt-2">
          {allSong?.map((song, i) => {
            return <MusicCard key={i} song={song}></MusicCard>;
          })}
        </div>
      </div>
    </div>
  );
};

export default AcceptMunic;
