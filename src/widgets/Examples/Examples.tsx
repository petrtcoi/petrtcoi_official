"use client";

import { useState, useEffect, useReducer } from "react";
import Image from "next/image";
import { useAtom } from "jotai";

import { darkModeAtom } from "@features/dark_mode";

import velarShopImage from "./assets/velarshop.jpg";
import tubogShopImage from "./assets/tubgoshop.jpg";
import kreditGuideImage from "./assets/kreditguide.jpg";
import Link from "next/link";


export default function Examples() {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div className="flex flex-col gap-2 justify-start   max-w-[400px] m-auto">
        <Link href="https://velarshop.ru" target="_blank">
          <Image
            src={velarShopImage}
            alt="Heating radiators VelarShop"
            loading="eager"
            width={450}
            height={450}
            sizes="450px"
            className={"rounded-xl shadow-none hover:shadow-xl hover:cursor-pointer"}
          />
        </Link>
        <h3 className="text-sm font-semibold">VelarShop.ru</h3>
        <p className="text-sm font-light">Online store for designer radiators and floor convectors. Created with SEO requirements in mind.</p>
        <div className="flex flex-row gap-5 items-center justify-start text-xs font-semibold">
          <div>Astro</div>
          <div>Tailwind</div>
          <div>Supabase</div>
        </div>
      </div>

      <div className="flex flex-col gap-2 justify-start  max-w-[400px] m-auto">
        <Link href="https://tubogshop.ru" target="_blank">
          <Image
            src={tubogShopImage}
            alt="TubogShop.ru screenshot"
            loading="eager"
            width={450}
            height={450}
            sizes="450px"
            className={"rounded-xl shadow-none hover:shadow-xl hover:cursor-pointer"}
          />
        </Link>
        <h3 className="text-sm font-semibold">TubogShop.ru</h3>
        <p className="text-sm font-light">Another stock of radiators. Realized on Next. Google Sheets is used as a database for editing prices.</p>
        <div className="flex flex-row gap-5 items-center justify-start text-xs font-semibold">
          <div>NextJS</div>
          <div>MUI</div>
          <div>Google Sheets</div>
        </div>
      </div>

      <div className="flex flex-col gap-2 justify-start max-w-[400px] m-auto">
        <Link href="https://kreditguide.ru" target="_blank">
          <Image
            src={kreditGuideImage}
            alt="KreditGuide.ru screenshot"
            loading="eager"
            width={450}
            height={450}
            sizes="450px"
            className={"rounded-xl shadow-none hover:shadow-xl hover:cursor-pointer"}
          />
        </Link>
        <h3 className="text-sm font-semibold">KreditGuide.ru</h3>
        <p className="text-sm font-light">Online directory of microcredit organizations and credit card banks. There are sections for news and articles.</p>
        <div className="flex flex-row gap-5 items-center justify-start text-xs font-semibold">
          <div>Astro</div>
          <div>Tailwind</div>
          <div>Supabase</div>
        </div>
      </div>

    </div>

  );
}
