"use client"
import { X } from "lucide-react"
import { redirect } from "next/navigation"
import { useTranslation } from "react-i18next"

import {
  Tab,
  TabContainer,
  TabPanel,
  Tabs,
} from "@/components/animated/animated-tabs"
import Bounce from "@/components/animated/uibeats/bounce"
import { Check } from "@/components/icons/check"
import { Badge } from "@/components/tremor/ui/badge"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { useUser } from "@/hooks/use-user"
import { subsList } from "@/lib/prices"
import { cn } from "@/lib/utils"

export const Pricing = () => {
  const { t } = useTranslation()

  const handleButtonClick = async () => {
    return redirect("/auth")
  }

  return (
    <div
      id="pricing"
      className="relative mt-20 flex flex-col items-center justify-center"
    >
      <div className="absolute bottom-32 right-0 h-[577.161px] w-[1756.387px] flex-shrink-0 rounded-[1756.387px] bg-[rgba(0,153,255,0.6)] blur-[112px]"></div>
      <div className="absolute bottom-32 left-0 h-[577.161px] w-[1756.387px] flex-shrink-0 rounded-[1756.387px] bg-[rgba(204,0,255,0.4)] blur-[112px]"></div>
      <Bounce className="font-inter text-center text-[64px] font-semibold leading-[68px] text-[#FDFDFD] max-sm:text-[50px]">
        {t(`Unlock the Full Power of`)} <br />
        <span className="bg-gradient-to-r from-[#CC00FF] to-[#0099FF] bg-clip-text px-8 text-transparent">
          Pandorra.ai
        </span>
      </Bounce>
      <Bounce className="my-6 max-w-3xl text-center font-medium leading-normal text-neutral-400">
        {t(
          `Choose the plan that fits your creative needs and experience AI-powered content generation like never before. Whether you're just exploring or need professional-grade tools, we have the right plan for you`,
        )}
      </Bounce>
      <div className="relative flex min-h-[424px] w-full max-w-[1200px] items-center justify-center gap-9 pb-48 pt-8">
        <TabContainer className="relative flex flex-col items-center justify-center">
          <Tabs className="mb-32 text-white">
            <Tab value={"small"}>{t(`Small`)}</Tab>
            <Tab value={"monthly"}>{t(`Monthly`)}</Tab>
            <Tab value={"Annually"}>{t(`Annually`)}</Tab>
          </Tabs>
          <TabPanel
            value={"small"}
            className="relative flex justify-between gap-4 max-sm:flex-col"
          >
            <div className="flex min-h-[522px] w-[350px] shrink-0 flex-col items-start gap-[32px] rounded-[24px] border border-[rgba(255,255,255,0.10)] bg-[rgba(5,10,24,0.40)] p-[25px_32px]">
              <div className="">
                <p className="font-inter self-stretch text-[24px] font-bold leading-normal text-white">
                  {t(`Free`)}
                </p>

                <div className="mb-6 mt-8 flex flex-col gap-3">
                  <div className="font-inter flex items-center text-[16px] font-normal leading-normal text-white">
                    <Check className="mr-3" />
                    <p>
                      <span className="font-italic mx-1 font-extrabold">
                        100
                      </span>{" "}
                      {t(`Credits`)}
                    </p>
                  </div>
                  <div className="font-inter flex items-center text-[16px] font-normal leading-normal text-white">
                    <X className="mr-2 size-4" />
                    <p>{t(`Short Video`)}</p>
                  </div>
                  <div className="font-inter flex items-center text-[16px] font-normal leading-normal text-white">
                    <X className="mr-2 size-4" />
                    <p>{t(`Medium Video`)}</p>
                  </div>
                  <div className="font-inter flex items-center text-[16px] font-normal leading-normal text-white">
                    <Check className="mr-3" />
                    <p className="font-italic mx-1 font-extrabold">20</p>{" "}
                    {t(`AI-generated images`)}
                  </div>
                  <div className="font-inter flex items-center text-[16px] font-normal leading-normal text-white">
                    <Check className="mr-3" /> {t(`Text Generation unlimited`)}
                  </div>
                  <div className="font-inter flex items-center text-[16px] font-normal leading-normal text-white">
                    <Check className="mr-3" /> {t(`AI Voice`)}:{" "}
                    <p className="font-italic mx-1 font-extrabold">1</p>{" "}
                    {t(`minutes`)}
                  </div>
                </div>

                <div className="mb-8 flex items-center text-white">
                  <p className="pt-2 text-[24px]"></p>
                  <p className="text-[36px] font-bold"></p>
                  <p className="ml-2 pt-2 font-light"></p>
                </div>
              </div>
            </div>
            <div className="flex min-h-[522px] w-[350px] items-center justify-center rounded-[24px] bg-gradient-to-br from-[#0099FF66] to-[#CC00FF77] p-[1px]">
              <div className="flex h-full w-full shrink-0 flex-col items-start gap-[32px] rounded-[24px] bg-[#39517e77] p-[25px_32px]">
                <div className="">
                  <div className="flex items-center justify-between">
                    <p className="font-inter self-stretch text-[24px] font-bold leading-normal text-white">
                      {t(`Weekly`)}
                    </p>
                  </div>
                  <div className="mb-6 mt-8 flex flex-col gap-3">
                    <div className="font-inter flex items-center text-[16px] font-normal leading-normal text-white">
                      <Check className="mr-3" />
                      <p>
                        <span className="font-italic mx-1 font-extrabold">
                          350
                        </span>{" "}
                        {t(`Credits`)}
                      </p>
                    </div>
                    <div className="font-inter flex items-center text-[16px] font-normal leading-normal text-white">
                      <Check className="mr-3" />
                      <p>
                        {t(`Short Video`)} (5 sec):{" "}
                        <span className="font-italic mx-1 font-extrabold">
                          8
                        </span>{" "}
                        {t(`videos`)}
                      </p>
                    </div>
                    <div className="font-inter flex items-center text-[16px] font-normal leading-normal text-white">
                      <Check className="mr-3" />
                      <p>
                        {t(`Medium Video`)} (10 sec):{" "}
                        <span className="font-italic mx-1 font-extrabold">
                          4
                        </span>{" "}
                        {t(`videos`)}
                      </p>
                    </div>
                    <div className="font-inter flex items-center text-[16px] font-normal leading-normal text-white">
                      <Check className="mr-3" />
                      <p>
                        <span className="font-italic mx-1 font-extrabold">
                          70
                        </span>{" "}
                        {t(`AI-generated images`)}
                      </p>
                    </div>
                    <div className="font-inter flex items-center text-[16px] font-normal leading-normal text-white">
                      <Check className="mr-3" />{" "}
                      {t(`Text Generation unlimited`)}
                    </div>
                    <div className="font-inter flex items-center text-[16px] font-normal leading-normal text-white">
                      <Check className="mr-3" />
                      <p>
                        {t(`AI Voice`)}:{" "}
                        <span className="font-italic mx-1 font-extrabold">
                          5
                        </span>{" "}
                        {t(`minutes`)}
                        <span className="font-italic mx-1 font-extrabold">
                          {" "}
                          30
                        </span>{" "}
                        {t(`s`)}
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex items-center text-white">
                    <p className="pt-2 text-[24px]">$</p>
                    <p className="text-[36px] font-bold">5.80</p>
                    <p className="ml-2 pt-2 font-light">/ {t(`week`)}</p>
                  </div>
                  <Button
                    variant={"gradient"}
                    className="mt-auto w-full"
                    onClick={() => handleButtonClick()}
                  >
                    <p className="">{t(`Choose`)}</p>
                  </Button>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel
            value={"monthly"}
            className="relative flex justify-between gap-4 max-md:flex-col"
          >
            {subsList.map((price) => (
              <Sub
                creditsCount={price.creditsCount}
                price={price.price}
                isPrime={price.isPrime}
                title={price.title}
                priceStripe={price.priceStripe}
                badge={price.badge}
                key={price.creditsCount}
                frequence={"month"}
              />
            ))}
          </TabPanel>
          <TabPanel
            value={"Annually"}
            className="relative flex justify-between gap-4 max-md:flex-col"
          >
            {subsList.map((price) => (
              <Sub
                creditsCount={price.creditsCount * 12}
                price={price.price * 11}
                isPrime={price.isPrime}
                title={price.title}
                priceStripe={price.priceStripe * 11}
                badge={price.badge}
                frequence={"year"}
                key={price.creditsCount}
              />
            ))}
          </TabPanel>
        </TabContainer>
      </div>
    </div>
  )
}

type SubProps = {
  creditsCount: number
  price: number
  priceStripe: number
  isPrime?: boolean
  badge?: string
  title: string
  frequence: string
}

const Sub = (props: SubProps) => {
  const { t } = useTranslation()
  const { toast } = useToast()
  const { user } = useUser()

  const handleButtonClick = async () => {
    return redirect("/auth")
  }
  return (
    <div
      className={cn(
        "flex min-h-[400px] w-[350px] items-center justify-center rounded-[24px]",
        props.isPrime &&
          "bg-gradient-to-br from-[#0099FF66] to-[#CC00FF77] p-[1px]",
      )}
    >
      <div
        className={cn(
          "flex h-full w-full shrink-0 flex-col items-start gap-[32px] rounded-[24px] bg-[#39517e77] p-[25px_32px]",
          !props.isPrime &&
            "border-[rgba(255,255,255,0.10)] bg-[rgba(5,10,24,0.40)]",
        )}
      >
        <div className="">
          <div className="flex items-center justify-between">
            <p
              className={cn(
                "font-inter self-stretch text-[24px] font-bold leading-normal text-white",
                props.badge == "Most popular" && "gdt",
              )}
            >
              {t(props.title)}
            </p>
            {props.badge && (
              <Badge
                className={
                  props.isPrime
                    ? "dark:bg-blue-800/50 dark:text-white dark:ring-blue-700/70"
                    : "dark:bg-purple-800/50 dark:text-white dark:ring-purple-700/70"
                }
              >
                {t(props.badge)}
              </Badge>
            )}
          </div>
          <div className="mb-6 mt-8 flex flex-col gap-3">
            <div className="font-inter flex items-center text-[16px] font-normal leading-normal text-white">
              <Check className="mr-3" />
              <p>
                <span className="font-italic mx-1 font-extrabold">
                  {props.creditsCount}
                </span>{" "}
                {t(`Credits`)}
              </p>
            </div>
            <div className="font-inter flex items-center text-[16px] font-normal leading-normal text-white">
              <Check className="mr-3" />
              <p>
                {t(`Short Video`)} (5 sec):{" "}
                <span className="font-italic mx-1 font-extrabold">
                  {Math.floor(props.creditsCount / 40)}
                </span>{" "}
                {t(`videos`)}
              </p>
            </div>
            <div className="font-inter flex items-center text-[16px] font-normal leading-normal text-white">
              <Check className="mr-3" />
              <p>
                {t(`Medium Video`)} (10 sec):{" "}
                <span className="font-italic mx-1 font-extrabold">
                  {Math.floor(props.creditsCount / 80)}
                </span>{" "}
                {t(`videos`)}
              </p>
            </div>
            <div className="font-inter flex items-center text-[16px] font-normal leading-normal text-white">
              <Check className="mr-3" />
              <p>
                <span className="font-italic mx-1 font-extrabold">
                  {Math.floor(props.creditsCount / 4)}
                </span>{" "}
                {t(`AI-generated images`)}
              </p>
            </div>
            <div className="font-inter flex items-center text-[16px] font-normal leading-normal text-white">
              <Check className="mr-3" /> {t(`Text Generation unlimited`)}
            </div>
            <div className="font-inter flex items-center text-[16px] font-normal leading-normal text-white">
              <Check className="mr-3" />
              <p>
                {t(`AI Voice`)}:{" "}
                <span className="font-italic mx-1 font-extrabold">
                  {Math.floor(props.creditsCount / 60)}
                </span>{" "}
                {t(`minutes`)}
              </p>
            </div>
          </div>
          <div className="mb-8 flex items-center text-white">
            <p className="pt-2 text-[24px]">$</p>
            <p className="text-[36px] font-bold">{props.price.toFixed(2)}</p>
            <p className="ml-2 pt-2 font-light">/ {t(props.frequence)}</p>
          </div>
          <Button
            variant={props.isPrime ? "gradient" : "ghost"}
            className={cn(
              "w-full",
              !props.isPrime && "bg-white hover:bg-white/80",
            )}
            onClick={() => handleButtonClick()}
          >
            <p className={!props.isPrime ? "gdt" : ""}>{t(`Choose`)}</p>
          </Button>
        </div>
      </div>
    </div>
  )
}
