import React from "react";
import ArtistCard from "./ArtistCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BASEURL from "../../../../Constants";

const Artist = () => {
  const {
    data: artistData,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["artistData"],
    queryFn: async () => {
      const response = await axios.get(`${BASEURL}/admin/artists`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      });
      return response.data;
    },
  });
  return (
    <div className="p-4 bg-white rounded-md shadow">
      <div className="ll">
        <div className="top_title bg-[#F8FAFC] p-2 py-4 grid grid-cols-8 rounded-sm text-sm font-semibold">
          <span className="col-span-2">NAME</span>
          <div className="col-span-6 grid grid-cols-5">
            <span className="">Artist ID</span>
            {/* <span className="">ARTIST</span>
          <span className="">LABEL</span>
          <span className="">UPC</span>
          <span className="">RELEASE DATE</span> */}
          </div>
        </div>
        <div className="client_container flex flex-col gap-2 mt-2">
          {artistData?.data?.map((artist, i) => {
            return <ArtistCard key={i} artist={artist}></ArtistCard>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Artist;
