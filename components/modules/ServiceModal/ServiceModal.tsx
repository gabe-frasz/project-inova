/* eslint-disable @next/next/no-img-element */
import * as PrimitiveDialog from "@radix-ui/react-dialog";
import { motion, Variants } from "framer-motion";

import { MenuToggler, Text } from "@components/widgets";
import { useState } from "react";

interface ServiceModalProps {
  title: string;
  description: string;
  imageUrl: string;
  largeImgUrl: string;
}

const variants: Variants = {
  open: {
    opacity: 1,
    scale: 1,
    y: "-50%",
  },
  closed: {
    opacity: 0,
    scale: 0.9,
    top: "50%",
    left: "50%",
    x: "-50%",
    y: "-45%",
  },
};

const AnimatedDialogContent = motion(PrimitiveDialog.Content);

export const ServiceModal = ({
  title,
  description,
  imageUrl,
  largeImgUrl,
}: ServiceModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <PrimitiveDialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
      <PrimitiveDialog.Trigger asChild>
        <figure className="relative w-[183px] lg:w-[340px] aspect-square mx-auto bg-white transition-all hover:scale-[1.03] cursor-pointer">
          <img
            src={imageUrl}
            alt={`Serviço INOVA - ${title}`}
            className="w-full h-full object-cover"
          />

          <figcaption className="absolute left-0 right-0 bottom-0">
            <div className="relative h-12 lg:h-16 px-1 pl-6 lg:pl-10 flex items-center bg-primary-500">
              <div className="absolute top-3 left-2 w-[10px] h-[calc(100%-24px)] lg:w-5 bg-base-300" />

              <Text className="text-primary-content text-[8px] leading-3 font-semibold uppercase">
                {title}
              </Text>
            </div>
          </figcaption>
        </figure>
      </PrimitiveDialog.Trigger>

      <PrimitiveDialog.Portal>
        <PrimitiveDialog.Overlay className="fixed inset-0 w-screen bg-black opacity-40 z-40" />

        <AnimatedDialogContent
          variants={variants}
          initial="closed"
          animate={isModalOpen ? "open" : "closed"}
          transition={{
            duration: 0.2,
          }}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-[656px] h-[634px] xl:max-w-[1030px] xl:h-[590px] p-14 flex flex-col border-[3px] border-[#585C68CC] justify-between gap-4 bg-base-300/70 backdrop-blur-[2px] text-primary-content z-50"
        >
          <header className="flex justify-between items-center">
            <PrimitiveDialog.Title asChild>
              <div className="relative pl-4 py-3 lg:pl-8 lg:py-5">
                <div className="absolute top-3 left-0 w-[10px] h-[calc(100%-24px)] lg:w-5 bg-primary-500" />
                <Text className="text-primary-500 font-semibold uppercase">
                  {title}
                </Text>
              </div>
            </PrimitiveDialog.Title>

            <PrimitiveDialog.Close className="text-primary-500">
              <MenuToggler
                isMobileMenuOpen={true}
                className="lg:block outline-none"
              />
            </PrimitiveDialog.Close>
          </header>

          <PrimitiveDialog.Description asChild>
            <Text asChild>
              <p className="text-sm text-white">{description}</p>
            </Text>
          </PrimitiveDialog.Description>

          <img
            src={largeImgUrl}
            alt={`Serviço INOVA - ${title}`}
            className="w-full h-[123px] lg:h-[246px] object-cover"
          />
        </AnimatedDialogContent>
      </PrimitiveDialog.Portal>
    </PrimitiveDialog.Root>
  );
};
