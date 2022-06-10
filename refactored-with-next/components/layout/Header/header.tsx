import { Button } from "@components/widgets";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export const Header = () => {
  const router = useRouter();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  function toggleNavbar() {
    setIsNavbarOpen(!isNavbarOpen);
  }

  function closeNavbar() {
    setIsNavbarOpen(false);
  }

  return (
    <header>
      <div className="container mx-auto px-4 py-6 flex justify-between lg:justify-start items-center">
        <div className="mr-6 pr-6 lg:border-r-[3px] border-black">
          <Link href="/">
            <a className="w-[50vw] max-w-[200px] block">
              <svg viewBox="0 0 509 103" className="w-full">
                <path d="M2.59716 1.33567H17.6607C19.0706 1.33567 20.2579 2.52295 20.2579 3.93284V98.1727C20.2579 99.5826 19.0706 100.77 17.6607 100.77H2.59716C1.18727 100.77 0 99.5826 0 98.1727V3.93284C0 2.52295 1.18727 1.33567 2.59716 1.33567Z" />
                <path d="M272.405 30.2013C269.66 23.9681 265.801 18.6254 260.755 14.0989C255.783 9.6466 249.773 6.15898 242.798 3.71023C235.822 1.26148 228.031 0 219.646 0C211.186 0 203.395 1.26148 196.42 3.71023C189.444 6.15898 183.434 9.6466 178.462 14.0989C173.49 18.5512 169.632 23.8939 166.812 30.2013C164.066 36.4345 162.657 43.3355 162.657 50.8302C162.657 58.399 164.066 65.3 166.812 71.6074C169.558 77.9148 173.416 83.3318 178.462 87.8583C183.434 92.3847 189.444 95.9466 196.42 98.4695C203.395 100.992 211.112 102.254 219.646 102.254C228.105 102.254 235.822 100.992 242.798 98.4695C249.773 95.9466 255.783 92.3847 260.755 87.8583C265.727 83.3318 269.585 77.9148 272.405 71.6074C275.151 65.3 276.561 58.399 276.561 50.8302C276.486 43.2613 275.151 36.4345 272.405 30.2013ZM253.483 64.7064C251.628 68.8619 249.031 72.3495 245.766 75.2435C242.501 78.1375 238.642 80.3636 234.116 81.9219C229.663 83.4802 224.766 84.2964 219.497 84.2964C214.229 84.2964 209.331 83.4802 204.879 81.9219C200.427 80.3636 196.494 78.1375 193.229 75.2435C189.964 72.3495 187.367 68.8619 185.512 64.7064C183.656 60.551 182.766 55.9503 182.766 50.8302C182.766 45.71 183.656 41.1094 185.512 37.0281C187.367 32.9468 189.89 29.5334 193.229 26.7137C196.494 23.8939 200.427 21.7419 204.879 20.2579C209.331 18.7738 214.229 18.0317 219.497 18.0317C224.766 18.0317 229.589 18.7738 234.116 20.2579C238.568 21.7419 242.501 23.8939 245.766 26.7137C249.031 29.5334 251.628 32.9468 253.483 37.0281C255.338 41.1094 256.303 45.71 256.303 50.8302C256.303 55.9503 255.412 60.551 253.483 64.7064Z" />
                <path d="M298.748 1.33567H315.37C316.409 1.33567 317.373 2.00352 317.818 2.96818L346.016 71.3848C346.907 73.5368 349.949 73.5368 350.839 71.3848L379.037 2.96818C379.408 2.00352 380.373 1.33567 381.486 1.33567H398.108C399.963 1.33567 401.224 3.26499 400.482 4.9717L359.15 99.2116C358.705 100.176 357.815 100.77 356.776 100.77H340.228C339.189 100.77 338.225 100.176 337.854 99.2116L296.522 4.9717C295.557 3.26499 296.819 1.33567 298.748 1.33567Z" />
                <path d="M462.443 3.11658H444.931C443.966 3.11658 443.002 3.71022 442.631 4.60067L399.74 95.9466C398.924 97.6533 400.186 99.5826 402.041 99.5826H416.956C417.92 99.5826 418.885 98.9889 419.256 98.0985L425.341 84.8159C425.786 83.9254 426.677 83.3318 427.641 83.3318H480.698C481.662 83.3318 482.553 83.9254 482.998 84.8159L489.305 98.0985C489.75 98.9889 490.641 99.5826 491.606 99.5826H506.447C508.302 99.5826 509.563 97.5791 508.747 95.8724L464.595 4.52649C464.298 3.71024 463.408 3.11658 462.443 3.11658ZM434.691 65.0033L451.535 28.643C452.5 26.6395 455.394 26.5653 456.284 28.643L473.574 65.0033C474.39 66.7842 473.129 68.7877 471.199 68.7877H437.065C435.136 68.7877 433.874 66.7842 434.691 65.0033Z" />
                <path d="M43.2613 1.33572H60.18C60.6252 1.33572 60.9962 1.40992 61.3673 1.63253L118.95 31.7596C120.657 32.6501 122.809 31.3886 122.809 29.4593V3.93288C122.809 2.52299 123.996 1.33572 125.406 1.33572H140.321C141.731 1.33572 142.918 2.52299 142.918 3.93288V98.1728C142.918 99.5827 141.731 100.77 140.321 100.77H125.48C124.07 100.77 122.883 99.5827 122.883 98.1728V56.7666C122.883 55.8019 122.363 54.9115 121.473 54.4662L64.6323 24.9328C62.9256 24.0423 60.7736 25.3038 60.7736 27.2331V98.247C60.7736 99.6568 59.5863 100.844 58.1765 100.844H43.2613C41.8514 100.844 40.6642 99.6568 40.6642 98.247V4.00709C40.6642 2.523 41.8514 1.33572 43.2613 1.33572Z" />
              </svg>

              <style jsx>{`
                svg path {
                  transition: all 0.2s ease-in-out;
                }
                svg path:nth-child(1) {
                  transition-delay: 0s;
                }
                svg path:nth-child(2) {
                  transition-delay: 0.15s;
                }
                svg path:nth-child(3) {
                  transition-delay: 0.25s;
                }
                svg path:nth-child(4) {
                  transition-delay: 0.35s;
                }
                svg path:nth-child(5) {
                  transition-delay: 0.05s;
                }
                svg:hover path {
                  fill: rgb(219 54 9);
                }
              `}</style>
            </a>
          </Link>
        </div>

        <div
          onClick={toggleNavbar}
          className={`${
            isNavbarOpen ? "active" : ""
          } relative w-8 h-6 lg:hidden cursor-pointer z-20`}
        >
          <style jsx>{`
            div::before {
              content: "";
              position: absolute;
              width: 100%;
              height: 3px;
              background: black;
              box-shadow: 0px 10px 0px black;
              transition: all 0.3s ease;
            }
            div::after {
              content: "";
              position: absolute;
              width: 100%;
              height: 3px;
              bottom: 0;
              background: black;
              transition: all 0.3s ease;
            }
            div.active::before {
              transform: translateY(12px) rotate(45deg);
              box-shadow: none;
            }
            div.active::after {
              transform: translateY(-8px) rotate(-45deg);
            }
          `}</style>
        </div>

        <nav
          className={`flex-1 fixed lg:relative w-screen h-screen top-0 ${
            isNavbarOpen ? "left-0" : "left-full"
          } lg:w-auto lg:h-auto lg:left-0 flex flex-col lg:flex-row justify-center lg:justify-between items-center bg-white lg:bg-transparent transition-all z-10`}
        >
          <ul className="flex flex-col lg:flex-row gap-6 text-center">
            {router.pathname != "/" && (
              <li>
                <Link href="/">
                  <a onClick={closeNavbar}>Início</a>
                </Link>
              </li>
            )}

            <li>
              <Link href="/contato">
                <a onClick={closeNavbar}>Contato</a>
              </Link>
            </li>

            <li>
              <Link href="/#servicos" scroll={false}>
                <a onClick={closeNavbar}>Serviços</a>
              </Link>
            </li>

            <li>
              <Link href="/sobre">
                <a onClick={closeNavbar}>Sobre</a>
              </Link>
            </li>

            <style jsx>{`
              li {
                position: relative;
              }

              li::after {
                content: "";
                width: 0;
                height: 4px;
                display: block;
                position: absolute;
                bottom: 6px;
                background-color: #db360966;
                transition: all 0.3s ease;
                pointer-events: none;
              }

              li:hover::after {
                width: 100%;
              }
            `}</style>
          </ul>

          {router.pathname != "/orcamento" && (
            <Link href="/orcamento">
              <a onClick={closeNavbar} className="mt-6 lg:mt-0">
                <Button variant="budget" />
              </a>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};
