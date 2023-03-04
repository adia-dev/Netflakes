import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import netflakes_diagram from "../assets/NetflakesFInalMCD.drawio.png";
import tables from "../data/tables.json";
import { Table } from "../types/table";
type Props = {
  scrollY?: number;
};
interface Link {
  label: string;
  uri: string;
}




const Browse = (props: Props) => {
  const titleLinks: Link[] = [...Array(20)].map((_, i) => ({
    uri: "/browse",
    label: "Author " + (i + 1).toString(),
  }));


  const [currentTable, setCurrentTable] = useState<Table>(tables[0]);
  const [currentTableIndex, setCurrentTableIndex] = useState(0);
  const [startCarousel, setStartCarousel] = useState(false);
  const entityTables = tables.filter((table) => table.isRelationTable === false);
  const relationTables = tables.filter((table) => table.isRelationTable === true);

  useEffect(() => {
    setCurrentTable(tables[0]);

    const TimeoutId = setTimeout(() => {
      if (!startCarousel) {
        setStartCarousel(true);
        return;
      }
    }, 10000);


    return () => clearTimeout(TimeoutId);
  }, []);



  const tableToImage = ({ name }: { name: string }) => {
    const imagePaths: any[] = [];
    Object.values(import.meta.glob("../assets/tables/*.png", { eager: true })).forEach(
      ({ default: path }: any) => {
        const url = new URL(path, import.meta.url);
        const data = {
          path: url.pathname,
        };
        imagePaths.push(data);
      }
    );

    const image = imagePaths.find((image) =>
      image.path.toLowerCase().includes(name.toLowerCase())
    );
    return image?.path || "";
  }


  return (
    <div id="browse" className="text-white overflow-y-scroll z-0">
      <div className="brightness-75 z-[-1]  w-screen h-screen fixed top-0 left-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
        <img
          className=" w-full h-full object-contain"
          src={!startCarousel ? netflakes_diagram : tableToImage(currentTable)}
          alt=""
          style={{
            filter: props.scrollY ? "brightness(0.25)" : "brightness(1)",
            transform: props.scrollY ? "scale(1.0)" : "scale(1.1)",
            transition: props.scrollY
              ? "all 0.5s ease-in-out"
              : "all 0.5s ease-in-out",
          }}
        />
      </div>

      <div className="pl-32 pt-24 z-50">
        <div className="flex items-end space-x-2 text-3xl uppercase">
          <h2 className="font-bold">NETFLAKES</h2>
          <p className="font-light">Original</p>
        </div>
        <h1 className="text-5xl font-extrabold">{currentTable.name}</h1>
        <div className="flex items-center space-x-2 font-medium text-sm py-3 text-gray-200">
          <span className="text-green-400">95% Match</span>
          <span className="hover:text-white transition duration-300 cursor-pointer">
            2023
          </span>
          <span className="hover:text-white transition duration-300 cursor-pointer">
            {currentTable.fields.length} Attribut s
          </span>
          <span className="transition duration-300 cursor-pointer px-1 border hover:bg-white hover:text-black">
            4K Ultra HD
          </span>
          <span className="transition duration-300 cursor-pointer px-1 border hover:bg-white hover:text-black">
            5.1
          </span>
        </div>
        <p className="max-w-md font-light text-white">
          {currentTable.comment}
        </p>
        <div className="flex items-center text-xs text-gray-300 pt-4 max-w-md flex-wrap">
          {
            currentTable
              .fields
              .slice(0, currentTable.fields.length - 1)
              .map((field, i) => (
                <Link key={i} to={"#"} className="mr-1">
                  <span className="hover:text-white hover:underline transition duration-300 delay-200 whitespace-nowrap">
                    {field.name},
                  </span>
                </Link>
              ))
          }
          {
            currentTable.fields.length >= 0 && (
              <Link to={"#"}>
                <span className="hover:text-white hover:underline transition duration-300 delay-200">
                  {currentTable.fields[currentTable.fields.length - 1].name}
                </span>
              </Link>
            )
          }
        </div>
      </div>
      <div className="w-screen relative -bottom-40 overflow-x-hidden">
        <div className="h-48 w-full flex flex-col my-3">
          <p className="font-semibold text-xl text-white px-10">
            Tables d'Entités
          </p>
          <div className="w-fit overflow-x-scroll flex-1 flex items-center space-x-2 -translate-x-[220px]">
            {entityTables.map((table: Table, j) => (
              <div
                key={`row-video-${j}`}
                onClick={() => setCurrentTable(table)}
                className={`group h-full w-[250px] border-4 relative 
                ${table.name === currentTable.name ? "border-white" : "border-transparent"}
                brightness-90 hover:border-white cursor-pointer transition duration-300 hover:brightness-100`}
              >
                <img
                  className="w-full h-full transition-all duration-300 ease-in-out object-cover group-hover:object-contain"
                  src={tableToImage(table)}
                  alt=""
                />
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-600 text-transparent group-hover:text-white ease-out absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center">
                  <p className="font-semibold text-white text-2xl">{table.name}</p>
                  <p className="font-light text-white text-sm">
                    {table.fields.length} Attributes
                  </p>
                </div>
                {/* background gradient */}
                <div className="opacity-100 group-hover:opacity-0  absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0008] to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-48 w-full flex flex-col my-3">
          <p className="font-semibold text-xl text-white px-10">
            Tables de relation
          </p>
          <div className="w-fit overflow-x-scroll flex-1 flex items-center space-x-2 -translate-x-[220px]">
            {relationTables.map((table: Table, j) => (
              <div
                key={`row-video-${j}`}
                onClick={() => setCurrentTable(table)}
                className={`group h-full w-[250px] border-4 relative 
                ${table.name === currentTable.name ? "border-white" : "border-transparent"}
                brightness-90 hover:border-white cursor-pointer transition duration-300 hover:brightness-100`}
              >
                <img
                  className="w-full h-full transition-all duration-300 ease-in-out object-cover group-hover:object-contain"
                  src={tableToImage(table)}
                  alt=""
                />
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-600 text-transparent group-hover:text-white ease-out absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center">
                  <p className="font-semibold text-white text-2xl">{table.name}</p>
                  <p className="font-light text-white text-sm">
                    {table.fields.length} Attributes
                  </p>
                </div>
                {/* background gradient */}
                <div className="opacity-100 group-hover:opacity-0  absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0008] to-transparent"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Browse;
