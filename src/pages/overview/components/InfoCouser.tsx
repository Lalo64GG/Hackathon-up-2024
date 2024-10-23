import {Card, CardHeader, CardBody, CardFooter, Button} from "@nextui-org/react";

type InformationCourseProps = {
    hourDemand: number,
    numberArticles:number,
    numberDownloads: number,
    precio:number
}
export const InformationCourse = ({hourDemand,numberArticles,numberDownloads,precio}:InformationCourseProps) => {
    return (
        <Card className="py-4 bg-[#0C0C0C] px-7">
          <CardHeader className="flex items-center justify-between pt-2 pb-0 4">
            <h2 className="font-semibold uppercase text-md">Full Course</h2>
            <small className="text-default-600">12% off</small>
           
          </CardHeader>
          <CardBody className="overflow-visible ">
            <article className="grid items-center grid-cols-2 mt-2">
                <section className="flex flex-col">
                <p className="font-light text-tiny">{hourDemand} hours on demand</p>
                <p className="font-light text-tiny">{numberArticles} articles</p>
                <p className="font-light text-tiny">{numberDownloads} downloads resource</p>
                <p className="font-light text-tiny">Mobile version</p>
                </section>

                <section>
                    <p className="w-full text-4xl font-semibold text-center">${precio}</p>
                </section>
            </article>
          </CardBody>
          <CardFooter>
            <Button size="md" className="w-full font-bold text-black text-lg rounded-2xl bg-[#BFED54]">
                Buy now
            </Button>
          </CardFooter>
        </Card>
      );
}