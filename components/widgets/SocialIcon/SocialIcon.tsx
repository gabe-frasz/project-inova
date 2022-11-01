/* eslint-disable @next/next/no-img-element */
interface SocialIconProps {
  type: "instagram" | "facebook";
}

export const SocialIcon = ({ type }: SocialIconProps) => {
  return (
    <div className="w-9 h-9 flex justify-center items-center bg-primary-500">
      <img src={`/icons/${type}-icon.png`} alt={`${type} icon`} />
    </div>
  );
};
