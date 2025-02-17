"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight, BookOpen, Compass } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden bg-gradient-to-br  from-purple-950 via-indigo-950 to-indigo-950">
      {/* Gredient overlay */}

      <div className="absolute inset-0 before:absolute before:left-1/4 before:top-0 before:h-[500px] before:w-[500px] before:rounded-full before:bg-gradient-to-r before:from-violet-600/20 before:to-indigo-600/20 before:blur-3xl" />

      <div className="container relative mx-auto flex h-full flex-col items-center justify-center px-4 py-24 md:flex-row md:py-32">
        <div className="flex-1 space-y-8 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-5xl font-bold tracking-tighter text-white sm:text-6xl md:text-7xl font-orbitron"
          >
            <span className="relative block">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute -inset-2 bg-gradient-to-r from-violet-400/40 to-indigo-400/40 blur-xl"
              />
              A World of
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="ml-3 inline-block bg-gradient-to-r from-pink-400 to-violet-500 bg-clip-text text-transparent"
              >
                Words
              </motion.span>
            </span>

            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-4 block text-3xl font-light tracking-wider text-indigo-200 sm:text-4xl md:text-5xl font-space-mono hover:text-white transition-all duration-300 hover:drop-shadow-glow"
            >
              Waiting for You 📖
            </motion.span>
          </motion.h1>
          <p className="mx-auto max-w-2xl space-y-4 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl font-orbitron"
            >
              Read. Think. Innovate.
            </motion.span>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-4 block text-xl font-light tracking-wide text-gray-300 md:text-2xl font-space-mono hover:text-white transition-all duration-300"
            >
              A fresh take on technology, lifestyle, and the ideas shaping our
              world. 🚀
            </motion.span>
          </p>

          <div className="flex justify-center items-center mx-auto flex-col sm:flex-row gap-6">
            {/* Primary CTA Button */}
            <Button
              size="lg"
              className="group relative rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                Start Reading
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>

            {/* Secondary Button */}
            <Button
              variant="outline"
              size="lg"
              className="group relative rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300 hover:border-primary hover:bg-primary/10 dark:text-white"
            >
              <span className="flex items-center gap-2">
                <Compass className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />
                Explore Topics
              </span>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8 text-white md:mx-w-md">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">1k+</div>
              <div className="text-sm text-gray-400">Published Articles</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-gray-400">Expert Writers</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">10M</div>
              <div className="text-sm text-gray-400">Monthly Readers</div>
            </div>
          </div>
        </div>
        {/* Image Frame */}

        <div className="mt-12 flex-1 md:mt-0">
          <div
            className={cn(
              "relative mx-auto h-64 w-64 rounded-2xl overflow-hidden",
              "bg-gradient-to-br from-white/5 to-transparent",
              "border border-primary/20 backdrop-blur-lg",
              "shadow-2xl shadow-indigo-500/10"
            )}
          >
            <Image
              src="https://images.pexels.com/photos/16129705/pexels-photo-16129705/free-photo-of-man-sitting-at-desk-working-on-computers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Coding Environment Image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
