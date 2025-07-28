"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React from "react";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center mx-auto my-auto bg-gradient-to-br from-black via-[#27272a] via-40% to-[#400a0a] bg-no-repeat">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center w-full gap-3 mb-10"
      >
        <Image
          src={"/logo.svg"}
          alt={"Keyloop Logo"}
          width={60}
          height={60}
          className="w-[2%]"
        />
        <div className="text-3xl text-white font-bold group-hover:!text-primary-300">
          KEY
          <span className="text-secondary-500 font-light group-hover:!text-primary-300">
            LOOP
          </span>
        </div>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-white mb-4"
      >
        404 - Page Not Found
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-xl text-white mb-8"
      >
        The page you are looking for does not exist.
      </motion.p>
      <Link href="/">
        <Button className="bg-secondary-500 text-white rounded-md border-none hover:bg-secondary-600 h-12 mt-5">
          Go Back to Home
        </Button>
      </Link>
    </div>
  );
}
