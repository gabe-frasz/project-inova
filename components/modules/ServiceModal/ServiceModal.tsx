/* eslint-disable @next/next/no-img-element */
import { Text } from "@components/widgets";
import * as PrimitiveDialog from "@radix-ui/react-dialog";

interface ServiceModalProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const ServiceModal = ({
  title,
  description,
  imageUrl,
}: ServiceModalProps) => (
  <PrimitiveDialog.Root>
    <PrimitiveDialog.Trigger asChild>
      <figure className="relative w-[183px] lg:w-[340px] mx-auto bg-white transition-all hover:scale-[1.03] cursor-pointer">
        <img
          src={imageUrl}
          alt={`Serviço INOVA - ${title}`}
          className="w-full object-cover"
        />

        <figcaption className="absolute left-0 right-0 bottom-0">
          <div className="relative px-1 pl-6 py-3 lg:pl-10 lg:py-5 bg-primary-500">
            <div className="absolute top-3 left-2 w-[10px] h-[calc(100%-24px)] lg:w-5 bg-base-300" />

            <Text className="text-primary-content text-[8px] font-semibold uppercase">
              {title}
            </Text>
          </div>
        </figcaption>
      </figure>
    </PrimitiveDialog.Trigger>

    <PrimitiveDialog.Portal>
      <PrimitiveDialog.Overlay className="fixed inset-0 w-screen bg-black opacity-70 z-40" />

      <PrimitiveDialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-[656px] px-14 py-20 bg-white text-primary-content z-50">
        <PrimitiveDialog.Title asChild>
          <div className="relative mb-6 lg:mb-12 px-1 pl-6 py-3 lg:pl-10 lg:py-5">
            <div className="absolute top-3 left-2 w-[10px] h-[calc(100%-24px)] lg:w-5 bg-primary-500" />

            <Text className="text-primary-500 text-[8px] font-semibold uppercase">
              {title}
            </Text>
          </div>
        </PrimitiveDialog.Title>

        <PrimitiveDialog.Description asChild>
          <Text asChild>
            <p className="mb-12 lg:mb-24 text-sm text-primary-content">
              {description}
            </p>
          </Text>
        </PrimitiveDialog.Description>

        <img
          src={imageUrl}
          alt={`Serviço INOVA - ${title}`}
          className="w-full h-[123px] lg:h-[246px] object-cover"
        />

        <PrimitiveDialog.Close className="absolute top-5 right-5 px-2 text-primary-500 rounded-full border-2 border-transparent outline-none focus:border-primary-500">
          X
        </PrimitiveDialog.Close>
      </PrimitiveDialog.Content>
    </PrimitiveDialog.Portal>
  </PrimitiveDialog.Root>
);
