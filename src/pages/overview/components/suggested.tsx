import { Card,CardHeader,CardBody } from "@nextui-org/react"
import suggesteI from "../../../../public/img/suggesteI.png"
export const Suggested = ()=>{

    return (
     <Card className="py-1 bg-[#0C0C0C] px-7 mt-2">
        <CardHeader>
            <h2 className="text-lg font-semibold">Suggested Courses</h2>
        </CardHeader>

        <CardBody>
            <section className="grid items-center grid-cols-2 gap-y-5">
                  <img src={suggesteI} alt="" />
                   <div className="flex flex-col">
                     <p className="font-semibold">Cibersecurity</p>
                     <p className="text-sm">by Google</p>
                     <p className="text-sm">4.5</p>
                   </div>

                   <img src={suggesteI} alt="" />
                   <div className="flex flex-col">
                     <p className="font-semibold">Cibersecurity</p>
                     <p className="text-sm">by Google</p>
                     <p className="text-sm">4.5</p>
                   </div>
            </section>
        </CardBody>
     </Card>
    )
}