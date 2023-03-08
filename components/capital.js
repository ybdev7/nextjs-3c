import { v4 as uuidv4 } from "uuid";

export default function CapitalCard({ capital, country }) {
  return (
    <div className="flex flex-col items-center bg-white md:flex-row md:max-w-xl hover:bg-slate-100 ">
      <div className="flex flex-col justify-between p-4 leading-normal">
        <div>
          <h2 className="text-1xl font-bold ">{capital}</h2>
        </div>
      </div>
    </div>
  );
}
