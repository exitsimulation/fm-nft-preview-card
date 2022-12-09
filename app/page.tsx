import Image from "next/image";
import Link from "next/link";

import equilibrium from "../public/image-equilibrium.jpg";
import avatar from "../public/image-avatar.png";

import { AiFillClockCircle } from "react-icons/ai";
import { FaEthereum } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";

export default function Home() {
  return (
    <div className={"flex h-[100vh] items-center justify-center"}>
      <div
        className={
          "m-5 flex flex-col gap-4 rounded-2xl bg-very-dark-blue-card p-5 pb-8 drop-shadow-2xl lg:max-w-[20rem]"
        }
      >
        <div className={"relative "}>
          <div
            className={
              "absolute flex h-full w-full items-center justify-center rounded-2xl bg-cyan opacity-0 hover:opacity-40"
            }
          >
            <AiFillEye className={"scale-[3] fill-amber-50"} />
          </div>
          <Image src={equilibrium} alt={"Image"} className={"rounded-2xl"} />
        </div>
        <div className={"text-xl font-semibold text-white hover:text-cyan"}>
          Equilibrium #3429
        </div>
        <div className={"text-lg font-light text-soft-blue"}>
          Our Equilibrium collection promotes balance and calm.
        </div>
        <div className={"flex flex-row justify-between"}>
          <div className={"text-cyan"}>
            <FaEthereum className={"inline-block"} /> 0.041 ETH
          </div>
          <div className={"text-soft-blue"}>
            <AiFillClockCircle className={"inline-block"} /> 3 days left
          </div>
        </div>
        <div className={"h-[1px] w-full bg-very-dark-blue-line"}></div>
        <div className={"flex flex-row items-center gap-3"}>
          <div>
            <Image
              src={avatar}
              alt={"Avatar"}
              className={"max-w-[35px] rounded-full border border-amber-50"}
            />
          </div>
          <div className={"text-soft-blue"}>
            Creation of{" "}
            <strong className={"font-normal text-white hover:text-cyan"}>
              Jules Wyvern
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}
